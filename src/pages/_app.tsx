import "../styles/index.scss";
import DefaultTemplate from "../templates/default";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultTemplate>
      <Component {...pageProps} />;
    </DefaultTemplate>
  );
}

export default MyApp;
