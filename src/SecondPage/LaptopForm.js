import React from "react";
import Button from "../UI/Button";

import classes from "../SecondPage/LaptopForm.module.css";

const LaptopForm = () => {
  return (
    <form className={classes.mainForm}>
      <label htmlFor="file-upload" className={classes.uploadPhoto}>
        <input type="file" multiple />
        <p>Drag your files here or click in this area.</p>
        <Button type="submit">ატვირთე</Button>
      </label>
    </form>
  );
};

export default LaptopForm;
