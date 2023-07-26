import React from "react";
import "./usermanager.css";
import { ImSearch } from "react-icons/im";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import defaultPhoto from "../../harta/img/defaultprofile.jpg";
import { BsFillTrashFill } from "react-icons/bs";
import { RiEditFill } from "react-icons/ri";
import CurrencyInput from "react-currency-input-field";
import axios from "axios";

const Usermanager = (props) => {
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/user/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const paraAdmin = props.users.filter(
    (m) => m.position.toLowerCase() === "admin"
  );
  const admin = paraAdmin.length;
  const paraDeveloper = props.users.filter(
    (m) => m.position.toLowerCase() === "developer"
  );
  const developer = paraDeveloper.length;
  const paraCashier = props.users.filter(
    (m) => m.position.toLowerCase() === "cashier"
  );
  const cashier = paraCashier.length;
  const paraOfficeBoy = props.users.filter(
    (m) => m.position.toLowerCase() === "officeboy"
  );
  const officeBoy = paraOfficeBoy.length;
  const paraWaiters = props.users.filter(
    (m) => m.position.toLowerCase() === "waiters"
  );
  const waiters = paraWaiters.length;

  const total =
    admin * 4500000 +
    developer * 8200000 +
    cashier * 4300000 +
    officeBoy * 3400000 +
    waiters * 4250000;
  return (
    <>
      <div className="bungkusUserManager">
        <div className="searchBar">
        </div>
        <div className="contentUserManager">
          <div className="infoUserManager">
            <div className="totalEmployee">
              <h5>Total Employees</h5>
              <p>{props.users.length}</p>
            </div>
            <div className="totalGajiSemua">
              <h5>Total Salary</h5>
              <p>
                <CurrencyInput
                  value={total}
                  prefix="Rp. "
                  disabled
                  style={{outlines: "none" , border : "none" , paddingLeft: "10px" , fontWeight: "700"}}
                />
              </p>
            </div>
            <div className="addEmployee">
              <h5>Add Employee</h5>
              <Link to="/usermanager/tambahkaryawan" className="tambahKaryawan">
                <IoAddCircle />
              </Link>
            </div>
          </div>
          <div className="isiContentDiUserManager">
            {/* Card Karyawan */}
            {props.users.map((user, index) => {
              return (
                <div className="cardKaryawan" key={index}>
                  <div className="fotoCardUser">
                    <img src={defaultPhoto} alt="" />
                    <p>{user.email}</p>
                  </div>
                  <div className="infoCardUser">
                    <h3>{user.nip}</h3>
                    <h4>{user.name}</h4>
                    <p>{user.position}</p>
                    <p>{user.gender}</p>
                  </div>
                  <div className="buttonCardUser">
                    <Link to="/dashboard" className="buttonUser">
                      <BsFillTrashFill
                        onClick={(e) => {
                          if (
                            window.confirm("Are You Sure Delete This Employe?")
                          ) {
                            deleteUser(user._id);
                            window.location.href="/usermanager";
                          }else{
                            e.preventDefault();
                          }
                        }}
                      />
                    </Link>
                    <Link
                      to={`/usermanager/editkaryawan/${user._id}`}
                      className="buttonUser"
                    >
                      <RiEditFill />
                    </Link>
                  </div>
                </div>
              );
            })}
            {/* End Of Card Karyawan */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Usermanager;
