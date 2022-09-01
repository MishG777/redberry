import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const [usersInfoState, setUsersInfoState] = useState([]);

  const chooseTeam = useRef();

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName);
    console.log(chooseTeam.current.value);
  };

  return (
    <form className={classes.mainForm} onSubmit={submitHandler}>
      <div className={classes.nameSurname}>
        <label className={classes.nmsr}>
          <span>სახელი</span>
          <Input type="text" placeholder="გრიშა" onChange={nameChangeHandler} />
          <text>მინიმუმ 2 სიმბოლო, ქართული ასოები</text>
        </label>

        <label className={classes.nmsr}>
          <span>გვარი</span>
          <Input type="text" placeholder="ბაგრატიონი" />
          <text>მინიმუმ 2 სიმბოლო, ქართული ასოები</text>
        </label>
      </div>

      <div className={classes.selects}>
        <select
          className={classes.selectTheme}
          onClick={props.teamsFunc}
          id="select1"
          ref={chooseTeam}
        >
          <option value="">თიმი</option>
          {props.teams.map((team) => {
            return (
              <option key={team.id} value={team.name}>
                {team.name}
              </option>
            );
          })}
        </select>

        <select className={classes.selectTheme} id="select1">
          <option value="">პოზიცია</option>
          {props.position.map((positionData) => {
            return (
              <option key={positionData.id} value={positionData.name}>
                {positionData.name}
              </option>
            );
          })}
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
        <Button className={classes.btn}>
          {/* onClick={props.compData}  */}
          შემდეგი
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
