import React from "react";
import Button from "../UI/Button";

import classes from "./SecondPage.module.css";

const SecondPage = (props) => {
  return (
    <div className={classes.color}>
      <h1 className={classes.h1}>გადავიდა</h1>
      <Button type="submit" onClick={props.prevPageData}>
        უკან
      </Button>
    </div>
  );
};

export default SecondPage;
