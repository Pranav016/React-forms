import React, { useState } from 'react';
import { checkEmailIsValid } from './SimpleInput';

const BasicForm = (props) => {
	const [firstName, setFirstName] = useState('');
	const [firstNameTouched, setFirstNameTouched] = useState(false);

	const [lastName, setLastName] = useState('');
	const [lastNameTouched, setLastNameTouched] = useState(false);

	const [email, setEmail] = useState('');
	const [emailTouched, setEmailTouched] = useState(false);

	let firstIsValid = firstName.trim() !== '';
	let firstIsInvalid = !firstIsValid && firstNameTouched;

	let lastIsValid = lastName.trim() !== '';
	let lastIsInvalid = !lastIsValid && lastNameTouched;

	let emailIsValid = checkEmailIsValid(email);
	let emailIsInvalid = !emailIsValid && emailTouched;

	const firstInputOnChangeHandler = (e) => {
		setFirstName(e.target.value);
	};
	const firstInputOnBlurHandler = (e) => {
		setFirstNameTouched(true);
	};

	const lastInputOnChangeHandler = (e) => {
		setLastName(e.target.value);
	};
	const lastInputOnBlurHandler = (e) => {
		setLastNameTouched(true);
	};

	const emailInputOnChangeHandler = (e) => {
		setEmail(e.target.value);
	};
	const emailInputOnBlurHandler = (e) => {
		setEmailTouched(true);
	};

	let formIsValid = false;
	if (firstIsValid && lastIsValid && emailIsValid) formIsValid = true;
	else formIsValid = false;

	const submitHandler = (e) => {
		e.preventDefault();
		if (!formIsValid) {
			return;
		}

		setFirstName('');
		setLastName('');
		setEmail('');
		setFirstNameTouched(false);
		setLastNameTouched(false);
		setEmailTouched(false);
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
				<button>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
