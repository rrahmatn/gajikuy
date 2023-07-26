import React , { useState} from "react";
import "./usermanager.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const Tambahkaryawan = () => {
  const [nip, setNip] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");


  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/user", {
        nip,
        name,
        position,
        password,
      });
      window.location.href="/usermanager";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bungkusTambah">
      <div className="navTambahKaryawan">
        <Link to="/usermanager" className="backTambahKaryawan">
          <FiChevronLeft />
        </Link>
      </div>
      <div className="formTambahKaryawan">
        <h2>Add New Employee</h2>
        <form onSubmit={saveUser}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>NIP</label>
                </td>
                <td>:</td>
                <td>
                  <input type="text" value={nip} onChange={e=>setNip(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Name</label>
                </td>
                <td>:</td>
                <td>
                  <input type="text" value={name} onChange={e=>setName(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Position</label>
                </td>
                <td>:</td>
                <td>
                  <input type="text" value={position} onChange={e=>setPosition(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password</label>
                </td>
                <td>:</td>
                <td>
                  <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="submitTambahKaryawan">Add New Employee</button>
        </form>
      </div>
    </div>
  );
};
export default Tambahkaryawan;
