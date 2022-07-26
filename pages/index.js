import Head from "next/head";
import Hoc from "../components/HOC";

export default function Home() {
  return (
    <>
    {/* <Hoc/> */}
        <div>
      <Head>
      <title>Home Page</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1 style={{textAlign: 'center'}}>Welcome to Dashboard</h1>
    </div>
  </>);
}
