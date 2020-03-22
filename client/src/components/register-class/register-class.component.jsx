import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./register-class.css";

// Components
import RoleClass from "../role-class/role-class.component";

// Assets
import warriorImg from "../../assets/role-classes/warriorImg.PNG";
import rogueImg from "../../assets/role-classes/rogueImg.PNG";
import wizardImg from "../../assets/role-classes/wizardImg.PNG";

const loadImage = image => {
  console.log(image);
};

loadImage(warriorImg);

const RoleClassDb = {
  0: {
    classType: "Warrior",
    image: warriorImg,
    attack: +1,
    hp: +100
  },
  1: {
    classType: "Rogue",
    image: rogueImg,
    attack: +3,
    hp: +75
  },
  2: {
    classType: "Wizard",
    image: wizardImg,
    attack: +5,
    hp: +50
  }
};

const RegisterClass = submitFunction => {
  return (
    <div>
      <h1 className="select-class">SELECT YOUR CLASS</h1>
      <div className="container1">
        <Link to="/home" onClick={() => submitFunction.submitFunction(1)}>
          <RoleClass roleClass={RoleClassDb[0]} />
        </Link>
        <Link to="/home" onClick={() => submitFunction.submitFunction(2)}>
          <RoleClass roleClass={RoleClassDb[1]} />
        </Link>
        <Link to="/home" onClick={() => submitFunction.submitFunction(3)}>
          <RoleClass roleClass={RoleClassDb[2]} />
        </Link>
      </div>
    </div>
  );
};

export default RegisterClass;
