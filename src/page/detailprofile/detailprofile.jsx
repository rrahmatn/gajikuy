import React , {useState , useEffect} from "react";
import "./detailprofile.css";
import defaultprofile from "../../harta/img/defaultprofile.jpg";
import { Link , useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import axios from "axios";

const DetailProfile = () => {
  const [nip, setNip] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState("");
  const [age, setAge] = useState("");
  const { id } = useParams();
  

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
  };

  return (
    <>
      <div className="bungkusDetailProfile">
        <div className="navDetailProfile">
          <Link to="/employee" className="backDetail">
            <FaAngleLeft />
          </Link>
        </div>
        <div className="tumbDetailProfile">
          <img src={defaultprofile} alt="Foto" />
          <div className="namaJabatan">
            <h3>{name}</h3>
            <p>{position}</p>
          </div>
        </div>
        <div className="isiDetailProfile">
          <table>
            <tbody>
              <tr>
                <td>NIP</td>
                <td>:</td>
                <td>{nip}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td> {email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>:</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>:</td>
                <td>{gender}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td>{address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DetailProfile;
