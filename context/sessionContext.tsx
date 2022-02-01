import { createContext, useState } from "react";

interface ISession {
	state: boolean;
	data: []
}

const defaultSession: ISession = {
	state: false,
	data: []
}

export const SessionContext = createContext<any>({});

export const DataProvider = ({ children }) => {
	const [session, setSession] = useState<ISession>(defaultSession);

	return (
		<SessionContext.Provider value={{
			session,
			setSession
		}}>
			{ children }
		</SessionContext.Provider>
	);
}