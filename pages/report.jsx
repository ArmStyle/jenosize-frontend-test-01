import Head from "next/head";
import Layout from "../components/Layout";

const report = () => {
  return (
    <>
      <Head>
        <title>Report page</title>
      </Head>
      <Layout>
        <div style={{ textAlign: "center" }}>
          <h1>Report page</h1>
        </div>
      </Layout>
    </>
  );
};

export default report;
