import Layout from "../components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";

const AllReportContainer = dynamic(import("../containers/AllReportContainer"), {
  ssr: false,
});
const AllReportPage = () => {
  return (
    <>
      <Head>
        <title>Statistic</title>
      </Head>
      <Layout>
        <AllReportContainer />
      </Layout>
    </>
  );
};

export default AllReportPage;
