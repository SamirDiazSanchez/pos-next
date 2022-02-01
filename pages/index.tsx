import { Login } from "components/login/login";
import { Dashboard } from "components/dashboard";

import { SessionContext } from "context/sessionContext";
import Router from "next/router";
import { useContext } from "react";

const HomePage = () => {
	const { session } = useContext(SessionContext);
	
	return(
		<div className="row vh-100 justify-content-center align-items-center">
			<div className="col-md-4">
				{
					!session.state ?
						<Login />
					:
						<Dashboard />
				}
			</div>
		</div>
	);
}

export default HomePage;