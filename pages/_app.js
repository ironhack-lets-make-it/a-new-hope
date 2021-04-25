import "../styles/globals.css";
import { Link } from "@components/Link";
// This is the main Wrapper of the app. And its where we can add layout features
function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        Welcome to the new hope
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
