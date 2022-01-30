import { Layout } from "../components/layout";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps}/>
		</Layout>
	);
}

export default App;