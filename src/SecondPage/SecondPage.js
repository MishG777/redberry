import React, { useState, useCallback, useEffect } from "react";
import UserForm from "./UserForm";
import LaptopForm from "./LaptopForm";

import classes from "./SecondPage.module.css";
import Button from "../UI/Button";

const SecondPage = (props) => {
  const [change, setChange] = useState(false);
  const [teams, setTeams] = useState([]);
  const [Position, setPosition] = useState([]);
  const [error, setError] = useState(null);

  const switchHandler = () => {
    setChange((prev) => !prev);
  };

  const aboutCompHandler = () => {
    setChange(true);
  };
  // fetchapi------------------------------------------------
  const fetchTeamsHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/teams"
      );
      const response1 = await fetch(
        "https://pcfy.redberryinternship.ge/api/positions"
      );
      if (!response.ok || !response1.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const data1 = await response1.json();

      const transformedTeams = data.data.map((teamsData) => {
        return {
          id: teamsData.id,
          name: teamsData.name,
        };
      });
      const transformedpositions = data1.data.map((positionData) => {
        return {
          id: positionData.id,
          name: positionData.name,
        };
      });

      setTeams(transformedTeams);
      setPosition(transformedpositions);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchTeamsHandler();
  }, [fetchTeamsHandler]);

  // fetchApi------------------------------------------------

  return (
    <div className={classes.mainBackground}>
      <Button
        className={classes.backBtn}
        type="submit"
        onClick={props.prevPageData}
      >
        უკან
      </Button>

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

      {/* FORM */}

      {!change && (
        <UserForm
          compData={aboutCompHandler}
          teamsFunc={fetchTeamsHandler}
          teams={teams}
          position={Position}
        />
      )}
      {change && <LaptopForm forBackButton={switchHandler} />}
      <section>{error}</section>
    </div>
  );
};

export default SecondPage;
