import React, { useState } from "react";
import "./profile.css";
import { AiFillDollarCircle } from "react-icons/ai";
import { FiChevronLeft } from "react-icons/fi";
import defaultFotoProfile from "../../harta/img/defaultprofile.jpg";
import CurrencyInput from "react-currency-input-field";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Profile = (props) => {
  const [lihatBiodata, setLihatBiodata] = useState("biodata");
  const [gaji, setGaji] = useState("0");
  const gajii = gaji;
  const bonus =
    (gajii * ((props.tinggimakanan + props.tinggiminuman) / 20)) / 100;
  const tax = gajii / 110;
  const total = gaji + bonus - tax;

  const [nip, setNip] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  // const [cekPassword, setCekPassword] = useState(" ");
  const history = useHistory();

  useEffect(() => {
    getUserById();
    if (position.toLowerCase() === "admin") {
      setGaji(4500000);
    }
    if (position.toLowerCase() === "office boy") {
      setGaji(3400000);
    }
    if (position.toLowerCase() === "developer") {
      setGaji(8200000);
    }
    if (position.toLowerCase() === "waiters") {
      setGaji(4250000);
    }
    if (position.toLowerCase() === "cashier") {
      setGaji(4300000);
    }

  }, [position]);

  const getUserById = async () => {
    const response = await axios.get(
      `http://127.0.0.1:5000/user/63a9d3b284feb5e62abd9238`
    );
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
      await axios.patch(`http://127.0.0.1:5000/user/63a9d3b284feb5e62abd9238`, {
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
  const createPDF = async () => {   
    const pdf = new jsPDF("portrait", "pt", "a4"); 
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");  
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("slipgaji.pdf");
  };

  // const checkPassword = () => {
  //   password !== cekPassword ? console.log("password is wrong") : "";
  // };

  const DetailBiodata = () => {
    if (lihatBiodata === "biodata") {
      return (
        <>
          <form onSubmit={updateUser}>
            <table>
              <tbody>
                <tr>
                  <td>NIP</td>
                  <td>:</td>
                  <td>
                    <input type="number" value={nip} disabled />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Age</td>
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
                  <td>Gender</td>
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
                  <td>Address</td>
                  <td>:</td>
                  <td>
                    <input
                      type="textarea"
                      value={address}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Photo Profile</td>
                  <td>:</td>
                  <td>
                    <input
                      type="file"
                      style={{ backgroundColor: "none", border: "none" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Change</button>
          </form>
          <button
            className="buttonPassword"
            onClick={() => {
              setLihatBiodata("password");
            }}
          >
            Change Password
          </button>
        </>
      );
    }
    if (lihatBiodata === "password") {
      return (
        <>
          <div className="ubahPassword">
            <form>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Current Password</label>
                    </td>
                    <td>:</td>
                    <td>
                      <input
                        type="password"
                        // value={cekPassword}
                        // onChange={() => setCekPassword((e) => e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>New Password</label>
                    </td>
                    <td>:</td>
                    <td>
                      <input type="password" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Confirm Password</label>
                    </td>
                    <td>:</td>
                    <td>
                      <input type="password" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button>Confirm</button>
              <button
                onClick={() => {
                  setLihatBiodata("biodata");
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </>
      );
    }
    if (lihatBiodata === "gaji") {
      return (
        <>
          <div className="gaji" id="pdf">
            <FiChevronLeft
              className="backToBiodata"
              onClick={() => {
                setLihatBiodata("biodata");
              }}
            />
            <form>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Salary</label>
                    </td>
                    <td>:</td>
                    <td>
                      <CurrencyInput
                        value={gajii}
                        prefix="Rp. "
                        decimalsLimit={2}
                        disabled
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Bonus</label>
                    </td>
                    <td>:</td>
                    <td>
                      <CurrencyInput
                        value={bonus.toFixed(2)}
                        prefix="Rp. "
                        decimalsLimit={2}
                        disabled
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label style={{ fontSize: "11px", fontWeight: "700" }}>
                        Medical Allowance
                      </label>
                    </td>
                    <td>:</td>
                    <td>
                      <CurrencyInput
                        value={tax.toFixed(2)}
                        prefix="Rp. "
                        decimalsLimit={2}
                        disabled
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Total</label>
                    </td>
                    <td>:</td>
                    <td>
                      <CurrencyInput
                        value={total.toFixed(2)}
                        prefix="Rp. "
                        decimalsLimit={2}
                        disabled
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  createPDF();
                }}
              >
                Print
              </button>
            </form>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="bungkusProfile">
        <div className="bungkusProfile">
          <div className="tumbProfile">
            <div className="fotoProfile">
              <img src={defaultFotoProfile} alt="Foto Profile" />
            </div>
            <div className="judulNamaJabatan">
              <h4>{props.biodataProfile.nama}</h4>
              <p>{props.biodataProfile.posisi}</p>
            </div>
            <i
              className="tombolGaji"
              onClick={() => {
                setLihatBiodata("gaji");
              }}
            >
              <AiFillDollarCircle />
            </i>
          </div>
          <div className="biodata">{DetailBiodata()}</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
