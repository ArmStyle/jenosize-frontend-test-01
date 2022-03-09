import Head from "next/head";
import Layout from "../components/Layout";

const report = () => {
  return (
    <>
      <Head>
        <title>Setting page</title>
      </Head>
      <Layout>
        <div style={{ textAlign: "center" }}>
          <h1>Setting page</h1>
        </div>
      </Layout>
    </>
  );
};

export default report;
