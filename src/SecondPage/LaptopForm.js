import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import classes from "../SecondPage/LaptopForm.module.css";

const LaptopForm = (props) => {
  // const [enteredPhoto, setEnteredPhoto] = useState();

  const symbols = "${!@#$%^&*()_+=";

  // const photoChangeHandler = (e) => {
  //   setEnteredPhoto(e);
  //   console.log(enteredPhoto);
  // };

  console.log(props.mainUserData);

  return (
    <form className={classes.mainForm}>
      <label className={classes.uploadPhoto}>
        <input type="file" />
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

        <label className={classes.core}>
          <span>CPU-ს ბირთვი</span>
          <Input type="number" placeholder="14" className={classes.coreInput} />
          <text>მხოლოდ ციფრები</text>
        </label>
        <label className={classes.core}>
          <span>CPU-ს ნაკადი</span>
          <Input
            type="number"
            placeholder="365"
            className={classes.coreInput}
          />
          <text>მხოლოდ ციფრები</text>
        </label>

        <label className={classes.LaptopRam}>
          <span>ლეპტოპის RAM (GB) </span>
          <Input type="number" placeholder="16" className={classes.laptopRam} />
          <text>მხოლოდ ციფრები</text>
        </label>

        <div className={classes.mainCheckbox}>
          <span>მეხსიერების ტიპი</span>
          <div className={classes.checkboxes}>
            <input type="checkbox" className={classes.ssd} />
            <span>SSD</span>
            <input type="checkbox" className={classes.hdd} />
            <span>HDD</span>
          </div>
        </div>
      </div>

      <div className={classes.line1}></div>

      <div className={classes.datePrice}>
        <label className={classes.LaptopRam}>
          <span>შეძენის რიცხვი (არჩევითი)</span>
          <Input
            type="date"
            placeholder="დდ / თთ / წწწწ"
            className={classes.laptopRam}
          />
          <text className={classes.hide}>მხოლოდ ციფრები</text>
        </label>
        <label className={classes.LaptopRam}>
          <span>ლეპტოპის ფასი</span>
          <Input
            type="number"
            placeholder="0000"
            className={classes.laptopRam}
          />
          <text>მხოლოდ ციფრები</text>
        </label>

        <div className={classes.mainCheckbox2}>
          <p>ლეპტოპის მდგომარეობა</p>
          <div className={classes.checkboxes}>
            <input type="checkbox" className={classes.ssd} />
            <span>ახალი</span>
            <input type="checkbox" className={classes.hdd} />
            <span>მეორადი</span>
          </div>
        </div>
      </div>

      <div className={classes.finalbuttons}>
        <Button className={classes.backBtn} onClick={props.forBackButton}>
          უკან
        </Button>
        <Button className={classes.saveBtn}>დამახსოვრება</Button>
      </div>
    </form>
  );
};

export default LaptopForm;
