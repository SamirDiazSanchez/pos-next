import { Input, FormGroup, Button, Alert } from "reactstrap";
import Link from "next/link";
import Router from "next/router";
import { useState, useContext } from "react";
import { SessionContext } from "context/sessionContext";

export const Login = () => {

	const [user, setUser] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [badLogin, setBadLogin] = useState<boolean>(false);
	const { session, setSession } = useContext(SessionContext);

	const tryLogin = e => {
		e.preventDefault();

		if (user === "mail@mail.com" && password === "123456") {
			setBadLogin(false);
			setSession({...session, state: true});
		}
		else {
			setBadLogin(true);
		}
	}

	return (
		<div className="card">
			<div className="card-body">
				<h4 className="card-title text-center">Login</h4>

				{
					badLogin &&
						<Alert
							color="danger"
						>
							User or password are wrong!!
						</Alert>
				}

				<form onSubmit={tryLogin}>
					<FormGroup>
						<Input
							bsSize="sm"
							type="email"
							placeholder="User"
							className="mb-1"
							value={user}
							onChange={
								e => {
									setUser(e.target.value);
								}
							}
							required
						/>

						<Input
							type="password"
							bsSize="sm"
							placeholder="Password"
							className="mb-1"
							pattern="[a-zA-z0-9]{6}"
							value={password}
							onChange={
								e => {
									setPassword(e.target.value);
								}
							}
							required
						/>

						<Button
							block
							color="primary"
							size="sm"
						>
							Login
						</Button>
					</FormGroup>
				</form>

				<hr />

				<div className="text-end">
					<Link href="/forgotPassword">
						Forgot your password ?
					</Link>
				</div>
			</div>
		</div>
	);
}