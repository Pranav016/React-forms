import React from 'react';
import { checkEmailIsValid } from './SimpleInput';
import useInput from '../hooks/use-input';

const BasicForm = (props) => {
	const {
		value: firstName,
		isValid: firstIsValid,
		hasError: firstIsInvalid,
		valueChangeHandler: firstInputOnChangeHandler,
		inputBlurHandler: firstInputOnBlurHandler,
		reset: firstNameReset,
	} = useInput((value) => value.trim() !== '');

	const {
		value: lastName,
		isValid: lastIsValid,
		hasError: lastIsInvalid,
		valueChangeHandler: lastInputOnChangeHandler,
		inputBlurHandler: lastInputOnBlurHandler,
		reset: lastNameReset,
	} = useInput((value) => value.trim() !== '');

	const {
		value: email,
		isValid: emailIsValid,
		hasError: emailIsInvalid,
		valueChangeHandler: emailInputOnChangeHandler,
		inputBlurHandler: emailInputOnBlurHandler,
		reset: emailReset,
	} = useInput(checkEmailIsValid);

	let formIsValid = false;
	if (firstIsValid && lastIsValid && emailIsValid) formIsValid = true;
	else formIsValid = false;

	const submitHandler = (e) => {
		e.preventDefault();
		if (!formIsValid) {
			return;
		}

		firstNameReset();
		lastNameReset();
		emailReset();
	};

	let firstClasses = firstIsInvalid ? 'form-control invalid' : 'form-control';
	let lastClasses = lastIsInvalid ? 'form-control invalid' : 'form-control';
	let emailClasses = emailIsInvalid ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div className={firstClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						value={firstName}
						onChange={firstInputOnChangeHandler}
						onBlur={firstInputOnBlurHandler}
					/>
					{firstIsInvalid && (
						<p className='error-text'>
							Please enter a valid input.
						</p>
					)}
				</div>
				<div className={lastClasses}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
						value={lastName}
						onChange={lastInputOnChangeHandler}
						onBlur={lastInputOnBlurHandler}
					/>
					{lastIsInvalid && (
						<p className='error-text'>
							Please enter a valid input.
						</p>
					)}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor='email'>E-Mail Address</label>
				<input
					type='email'
					id='name'
					value={email}
					onChange={emailInputOnChangeHandler}
					onBlur={emailInputOnBlurHandler}
				/>
				{emailIsInvalid && (
					<p className='error-text'>Please enter a valid input.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
