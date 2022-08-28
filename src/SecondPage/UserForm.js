import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  //   console.log(props.teams);
  const team = props.teams;

  console.log(team[0].name);

  return (
    <form className={classes.mainForm}>
      <div className={classes.nameSurname}>
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
      </div>

      <div className={classes.selects}>
        <select className={classes.selectTheme} onClick={props.teamsFunc}>
          <option value="0">თიმი</option>
          <option value="1">{}</option>
          <option value="2">{}</option>
          <option value="2">{}</option>
          <option value="2">{}</option>
          <option value="2">{}</option>
        </select>

        <select className={classes.selectTheme}>
          <option value="0">პოზიცია</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
        </select>
      </div>

      <label htmlFor="name" className={classes.mailNum}>
        <span>მეილი</span>
        <Input
          type="text"
          placeholder="grish666@redberry.ge"
          className={classes.mailInp}
        />
        <text>უნდა მთავრდებოდეს @redberry.ge-ით</text>
      </label>

      <label htmlFor="surname" className={classes.mailNum}>
        <span>ტელეფონის ნომერი</span>
        <Input
          type="text"
          placeholder="+995 598 00 07 01"
          className={classes.telInp}
        />
        <text>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</text>
      </label>
      <div className={classes.nextBtn}>
        <Button className={classes.btn} onClick={props.compData}>
          შემდეგი
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
