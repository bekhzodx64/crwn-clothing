import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
import Button from '../button/button';
import FormInput from '../form-input/form-input';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			setCurrentUser(user);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log('User creation encountered an error', error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					required
					label='Display Name'
					type='text'
					name='displayName'
					onChange={handleChange}
					value={displayName}
				/>
				<FormInput
					required
					label='Email'
					type='email'
					name='email'
					onChange={handleChange}
					value={email}
				/>
				<FormInput
					required
					label='Password'
					type='password'
					name='password'
					onChange={handleChange}
					value={password}
				/>
				<FormInput
					required
					label='Confirm Password'
					type='password'
					name='confirmPassword'
					onChange={handleChange}
					value={confirmPassword}
				/>

				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
