const FormInput = ({ label, ...otherProps }) => {
	return (
		<div className='customGroup'>
			<input className='form-input' {...otherProps} />
			{label && (
				<label
					className={`${
						otherProps.value.length ? 'customShrink' : ''
					} form-input-label`}>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
