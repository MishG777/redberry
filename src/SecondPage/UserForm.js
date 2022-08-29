import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [selectedTeam, setselectedTeam] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const chooseTeam = (e) => {
    setselectedTeam(e.target.value);
  };

  const choosePosition = (e) => {
    setSelectedPosition(e.target.value);
  };

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
        <select
          className={classes.selectTheme}
          onClick={props.teamsFunc}
          id="select1"
          onChange={chooseTeam}
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
        <h2>{selectedTeam}</h2>

        <select className={classes.selectTheme} onChange={choosePosition}>
          <option value="">პოზიცია</option>
          {props.position.map((positionData) => {
            return (
              <option key={positionData.id} value={positionData.name}>
                {positionData.name}
              </option>
            );
          })}
        </select>
        <h2>{selectedPosition}</h2>
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
