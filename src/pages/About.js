import React from "react";

import MainHeader from "../nav/MainHeader";
import styles from "./share.module.css";

const About = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <h1 className={styles}>About us!</h1>
    </React.Fragment>
  );
};

export default About;
