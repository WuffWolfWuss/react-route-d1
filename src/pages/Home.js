import React from "react";

import MainHeader from "../nav/MainHeader";
import styles from "./share.module.css";

const Home = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <h1 className={styles}>Home Page</h1>
    </React.Fragment>
  );
};

export default Home;
