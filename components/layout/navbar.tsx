import { SessionContext } from "context/sessionContext";
import Link from "next/link";

import { useContext, useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink, NavbarText } from "reactstrap";

export const MyNavbar = () => {
	const [collapse, setCollapse] = useState<boolean>(false);
	const {session, setSession} = useContext(SessionContext);

	const handleCollapse = () => {
		setCollapse(!collapse);
	}

	const logOut = () => {
		setSession({...session, state: false});
	}

	return (
		<Navbar
			color="light"
			expand="md"
			fixed="top"
			light
		>
			<NavbarBrand href="/">
				POS
			</NavbarBrand>

			<NavbarToggler onClick={handleCollapse} />

			<Collapse navbar isOpen={collapse}>
				<Nav
					className="ms-auto"
					navbar
				>
					<NavItem>
						<Link href="/">
							<NavLink>
								page
							</NavLink>
						</Link>
					</NavItem>

					<NavItem>
						<NavLink onClick={logOut}>
							LogOut
						</NavLink>
					</NavItem>
				</Nav>

			</Collapse>
		</Navbar>
	);
}