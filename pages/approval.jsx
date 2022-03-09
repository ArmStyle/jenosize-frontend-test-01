import Head from "next/head";
import Layout from "../components/Layout";

const report = () => {
  return (
    <>
      <Head>
        <title>Approval page</title>
      </Head>
      <Layout>
        <div style={{ textAlign: "center" }}>
          <h1>Approval page</h1>
        </div>
      </Layout>
    </>
  );
};

export default report;
