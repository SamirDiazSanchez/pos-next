import { SessionContext } from "context/sessionContext";
import { useContext } from "react";
import { MyNavbar } from "./navbar";

export const Layout = ({ children }) => {
	const {session} = useContext(SessionContext);

	return (
		<main className="container">
			{
				session.state &&
					<MyNavbar />
			}
			
			{ children }
		</main>
	);
}