import React from "react";
// import Button from "../UI/Button";
import Input from "../UI/Input";

import classes from "./SecondPage.module.css";

const SecondPage = (props) => {
  return (
    <div>
      <button
        className={classes.backBtn}
        type="submit"
        onClick={props.prevPageData}
      >
        უკან
      </button>

      <div className={classes.choosebar}>
        <div className={classes.innerChoose}>
          <text className={classes.customerInfo}>თანამშრომლების ინფო</text>
          <text className={classes.customerInfo2}>ლეპტოპის მახასიათებლები</text>
        </div>
      </div>

      <form className={classes.mainForm}>
        <label htmlFor="name" className={classes.nmsr}>
          <span>სახელი</span>
          <Input type="text" placeholder="გრიშა" />
          <text>მინიმუმ 2 სიმბოლო, ქართული ასოები</text>
        </label>

        <label htmlFor="surname" className={classes.nmsr}>
          <span>გვარი</span>
          <Input type="text" placeholder="ბაგრატიონი" />
          <text>მინიმუმ 2 სიმბოლო, ქართული ასოები</text>
        </label>
      </form>
    </div>
  );
};

export default SecondPage;
