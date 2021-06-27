import React, { useState } from 'react';

const SimpleInput = (props) => {
	const emailIsValid = () => {
		if (
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
				enteredEmail
			)
		)
			return true;
		else return false;
	};

	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
	const enteredEmailIsValid = emailIsValid();
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
	console.log(enteredEmailIsValid);

	let formIsValid = false;
	if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};
	const nameInputBlurHandler = (e) => {
		setEnteredNameTouched(true);
	};

	const emailInputChangeHandler = (e) => {
		setEnteredEmail(e.target.value);
	};
	const emailInputBlurHandler = (e) => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();
		setEnteredNameTouched(true);
		setEnteredEmailTouched(true);
		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}

		setEnteredName('');
		setEnteredEmail('');
		setEnteredNameTouched(false);
		setEnteredEmailTouched(false);
	};

	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control';
	const emailInputClasses = emailInputIsInvalid
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className='error-text'>Name must not be empty.</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your Email</label>
				<input
					type='text'
					id='email'
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{emailInputIsInvalid && (
					<p className='error-text'>Invalid email</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
