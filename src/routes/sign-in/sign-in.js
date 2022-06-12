import SignUpForm from '../../components/sign-up-form/sign-up-form';
import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign in</h1>
			<button className='bg-blue-300 rounded-lg p-2' onClick={logGoogleUser}>
				sign in with google popup
			</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
