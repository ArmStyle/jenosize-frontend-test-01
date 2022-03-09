import React from "react";
import Head from "next/head";
import Router from "next/router";
const Home = () => {
  React.useEffect(() => {
    Router.push("/statistic?action=engagement");
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
    </>
  );
};

export default Home;
