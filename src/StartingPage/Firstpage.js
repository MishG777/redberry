import React from "react";
import Button from "../UI/Button";

import classes from "./Firstpage.module.css";

const Firstpage = (props) => {
  return (
    <div>
      <Button
        className={classes.button}
        type="submit"
        onClick={props.getNextPageData}
      >
        გადასვლა
      </Button>
    </div>
  );
};

export default Firstpage;
