import React from "react";
import "./employee.css";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import defaultprofile from "../../harta/img/defaultprofile.jpg";


const Employee = (props) => {

  return (
    <>
      <div className="bungkusEmploye">
        {props.users.map((user, index) => {
          return (
            <Link to={`/detailprofile/${user._id}`} className="linkDetailProfile" key={index}>
              <img src={defaultprofile} alt="profile" />
              <div className="tumbnailNama">
                <h4>{user.name}</h4>
                <p>{user.nip}</p>
              </div>
              <BiChevronRight className="linkDetail" />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Employee;
