import { Layout } from "components/layout/layout";
import { DataProvider } from "context/sessionContext";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps }) => {
	return (
		<DataProvider>
			<Layout>
				<Component {...pageProps}/>
			</Layout>
		</DataProvider>
	);
}

export default App;