import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurName, setEnteredSurName] = useState("");
  const [enteredTeam, setEnteredTeam] = useState("");
  const [enteredPosition, setEnteredPosition] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  // const [usersInfoState, setUsersInfoState] = useState([]);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const surNameChangeHandler = (e) => {
    setEnteredSurName(e.target.value);
  };

  const teamChangeHandler = (e) => {
    setEnteredTeam(e.target.value);
  };
  const positionChangeHandler = (e) => {
    setEnteredPosition(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const numberChangeHandler = (e) => {
    setEnteredNumber(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const fullUserData = {
      name: enteredName,
      surName: enteredSurName,
      team: enteredTeam,
      position: enteredPosition,
      email: enteredEmail,
      number: enteredNumber,
    };

    props.gotUserData(fullUserData);
    // console.log(enteredName);
    // console.log(enteredSurName);
    // console.log(enteredTeam);
    // console.log(enteredPosition);
    // console.log(enteredEmail);
    // console.log(enteredNumber);
  };

  return (
    <form className={classes.mainForm} onSubmit={submitHandler}>
      <div className={classes.nameSurname}>
        {/* name-------------------------- */}
        <div className={classes.nmsr}>
          <span>სახელი</span>
          <Input placeholder="გრიშა" onChange={nameChangeHandler} />
          <text>მინიმუმ 2 სიმბოლო, ქართული ასოები</text>
        </div>

        {/* surname---------------------------------- */}
        <div className={classes.nmsr}>
          <span>გვარი</span>
          <Input
            type="text"
            placeholder="ბაგრატიონი"
            onChange={surNameChangeHandler}
          />
          <text>მინიმუმ 2 სიმბოლო, ქართული ასოები</text>
        </div>
      </div>

      <div className={classes.selects}>
        {/* entered-team----------------------- */}
        <select
          className={classes.selectTheme}
          onClick={props.teamsFunc}
          // id="select1"
          onChange={teamChangeHandler}
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
        {/* entered-position----------------------------------- */}
        <select
          className={classes.selectTheme}
          onChange={positionChangeHandler}
        >
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
      {/* entered-mail-------------------------------------- */}
      <label className={classes.mailNum}>
        <span>მეილი</span>
        <Input
          type="text"
          placeholder="grish666@redberry.ge"
          className={classes.mailInp}
          onChange={emailChangeHandler}
        />
        <text>უნდა მთავრდებოდეს @redberry.ge-ით</text>
      </label>

      {/* number------------------------------------------- */}
      <label className={classes.mailNum}>
        <span>ტელეფონის ნომერი</span>
        <Input
          type="text"
          placeholder="+995 598 00 07 01"
          className={classes.telInp}
          onChange={numberChangeHandler}
        />
        <text>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</text>
      </label>
      <div className={classes.nextBtn}>
        <Button type="submit" className={classes.btn}>
          {/* onClick={props.compData}  */}
          შემდეგი
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
