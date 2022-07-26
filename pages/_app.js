import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteGuard from "../components/RouteGuard";
import Hoc from "../components/HOC";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </Layout>
    </div>
  );
}

export default MyApp;
