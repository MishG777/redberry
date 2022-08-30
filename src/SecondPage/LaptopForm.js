import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import classes from "../SecondPage/LaptopForm.module.css";

const LaptopForm = () => {
  const symbols = "${!@#$%^&*()_+=";

  return (
    <form className={classes.mainForm}>
      <label htmlFor="file-upload" className={classes.uploadPhoto}>
        <input type="file" multiple />
        <p>Drag your files here or click in this area.</p>
        <Button type="submit">ატვირთე</Button>
      </label>

      <div className={classes.nameBrand}>
        <label htmlFor="name" className={classes.mainLaptName}>
          <span>ლეპტოპის სახელი</span>
          <Input type="text" placeholder="HP" className={classes.laptopName} />
          <text>ლათინური ასოები, ციფრები,{symbols} </text>
        </label>

        <select className={classes.selectBrand}>
          <option value="0">Select car:</option>
          <option value="1">Audi</option>
        </select>
      </div>

      <div className={classes.line1}></div>

      <div className={classes.mainCPU}>
        <select className={classes.selectCPU}>
          <option value="0">CPU</option>
          <option value="1">intel</option>
        </select>

        <label htmlFor="name" className={classes.core}>
          <span>CPU-ს ბირთვი</span>
          <Input type="text" placeholder="14" className={classes.coreInput} />
          <text>მხოლოდ ციფრები</text>
        </label>
        <label htmlFor="name" className={classes.core}>
          <span>CPU-ს ნაკადი</span>
          <Input type="text" placeholder="365" className={classes.coreInput} />
          <text>მხოლოდ ციფრები</text>
        </label>
      </div>
    </form>
  );
};

export default LaptopForm;
