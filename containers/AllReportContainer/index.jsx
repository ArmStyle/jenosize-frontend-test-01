import React from "react";
import { useRouter } from "next/router";
import MenuTitle from "./MenuTitle";
import Submission from "./Submission";
import Engagement from "./Engagement";
const Home = () => {
  const router = useRouter();
  return (
    <>
      <MenuTitle />
      <>
        {router.query.action == "engagement" ? <Engagement /> : <Submission />}
      </>
    </>
  );
};

export default Home;
