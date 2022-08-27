import React from "react";
import Button from "../UI/Button";
import logo from "../photos/LOGO.png";
import landingPhoto from "../photos/landingPhoto.png";

import classes from "./Firstpage.module.css";

const Firstpage = (props) => {
  return (
    <div className={classes.mainPage}>
      <div className={classes.landingDiv}>
        <img src={logo} alt="LOGO" className={classes.logo} />
        <img
          src={landingPhoto}
          alt="LandingPhoto"
          className={classes.landingImg}
        />
      </div>

      <div className={classes.buttons}>
        <div className={classes.innerbtn}>
          <Button
            className={classes.btn}
            type="submit"
            onClick={props.getNextPageData}
          >
            ჩანაწერების ჩამატება
          </Button>

          <Button className={classes.btn} type="submit">
            ჩანაწერების სია
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
