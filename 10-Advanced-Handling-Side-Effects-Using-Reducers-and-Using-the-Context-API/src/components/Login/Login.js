import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";
import InputForm from "../UI/Input/InputForm";

const emailReducer = (state, action) => {
	switch (action.type) {
		case "USER_INPUT":
			return { val: action.val, isValid: action.val.includes("@") };

		case "INPUT_BLUR":
			return { val: state.val, isValid: state.val.includes("@") };
		default:
			return { val: "", isValid: false };
	}
};

const passwordReducer = (state, action) => {
	switch (action.type) {
		case "USER_INPUT":
			return { val: action.val, isValid: action.val.trim().length > 6 };
		case "INPUT_BLUR":
			return { val: state.val, isValid: state.val.trim().length > 6 };
		default:
			return { val: "", isValid: false };
	}
};
const Login = (props) => {
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		val: "",
		isValid: null,
	});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		val: "",
		isValid: null,
	});

	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	useEffect(() => {
		const indentifier = setTimeout(() => {
			console.log("Checking form validity.");
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);

		return () => {
			console.log("CLEAN UP");
			clearTimeout(indentifier);
		};
	}, [emailIsValid, passwordIsValid]);

	const authContextData = useContext(AuthContext);
	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value });
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		authContextData.onLogin(emailState.val, passwordState.val);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<InputForm
					isValid={emailState.isValid}
					type="email"
					id="email"
					label={"E-Mail"}
					value={emailState.val}
					onChangeHandler={emailChangeHandler}
					onBlurHandler={validateEmailHandler}
				/>

				<InputForm
					isValid={passwordState.isValid}
					type="password"
					label={"Password"}
					val={passwordState.val}
					onChangeHandler={passwordChangeHandler}
					onBlurHandler={validatePasswordHandler}
				/>

				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
