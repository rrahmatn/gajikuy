import React, { useState } from "react";
import "./usermanager.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import axios from "axios";
import { useEffect } from "react";

const Editkaryawan = (props) => {
  const [nip, setNip] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const { id } = useParams();
  const history = useHistory();
  

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://127.0.0.1:5000/user/${id}`);
    setNip(response.data.nip);
    setName(response.data.name);
    setPhone(response.data.phone);
    setEmail(response.data.email);
    setGender(response.data.gender);
    setAddress(response.data.address);
    setPosition(response.data.position);
    setAge(response.data.age);
    setPassword(response.data.password);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://127.0.0.1:5000/user/${id}`, {
        nip,
        name,
        phone,
        email,
        age,
        gender,
        address,
        position,
        password,
      });
      history.push("/usermanager");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bungkusEditKaryawan">
        <div className="navEditKaryawan">
          <Link to="/usermanager" className="backTambahKaryawan">
            {" "}
            <FiChevronLeft />
          </Link>
        </div>
        <div className="formEditKaryawan">
          <h2>Edit Employee</h2>
          <form onSubmit={updateUser}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>NIP</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="number"
                      value={nip}
                      onChange={(e) => setNip(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Name</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Position</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Email</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Age</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Gender</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Address</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Password</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="tombolUdahEdit" onClick={()=> window.location.href="/usermanager"}>
              Edit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Editkaryawan;
