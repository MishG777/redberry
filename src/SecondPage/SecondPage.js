import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import classes from "./SecondPage.module.css";

const SecondPage = (props) => {
  const [change, setChange] = useState(false);

  const switchHandler = () => {
    setChange((prev) => !prev);
  };

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
          <text
            className={!change ? classes.customerInfo : classes.customerInfo2}
            onClick={switchHandler}
          >
            თანამშრომლების ინფო
          </text>
          <text
            className={change ? classes.customerInfo : classes.customerInfo2}
            onClick={switchHandler}
          >
            ლეპტოპის მახასიათებლები
          </text>
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

        <div className={classes.selects}>
          <select className={classes.selectTheme}>
            <option value="0">თიმი</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>
          <select className={classes.selectTheme}>
            <option value="0">თიმი</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>
        </div>

        <label htmlFor="name" className={classes.mailNum}>
          <span>სახელი</span>
          <Input type="text" placeholder="გრიშა" className={classes.mailInp} />
          <text>უნდა მთავრდებოდეს @redberry.ge-ით</text>
        </label>

        <label htmlFor="surname" className={classes.mailNum}>
          <span>გვარი</span>
          <Input
            type="text"
            placeholder="ბაგრატიონი"
            className={classes.telInp}
          />
          <text>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</text>
        </label>
      </form>
      <Button className={classes.btn}>შემდეგი</Button>
    </div>
  );
};

export default SecondPage;
