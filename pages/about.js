import styles from "../styles/about.module.css";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.heading}>About</h1>
        <Image
          src="https://media.istockphoto.com/photos/renewable-energy-and-sustainable-development-picture-id1186330948?k=20&m=1186330948&s=612x612&w=0&h=5aNPCcQ8FcZraX44PEhb2mqcHkow2xMITJMHdh28xNg="
          width="500"
          height="300"
          alt="Nature Image"
        ></Image>
      </div>
    </>
  );
};

export default About;
