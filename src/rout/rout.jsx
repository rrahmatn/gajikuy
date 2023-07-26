import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bottombar from "../component/bottombar/bottombar";
import Navbar from "../component/navbar/navbar";
import Dashboard from "../page/dashboard/dashboard";
import DetailLowongan from "../page/detaillowongan/detaillowongan";
import LowonganAdmin from "../page/detaillowongan/lowonganadmin";
import LowonganCashier from "../page/detaillowongan/lowongancashier";
import LowonganOb from "../page/detaillowongan/lowonganob";
import LowonganWaiter from "../page/detaillowongan/lowonganwaiter";
import DetailProfile from "../page/detailprofile/detailprofile";
import Employee from "../page/employee/employee";
import Graph from "../page/graph/graph";
import Login from "../page/login/login";
import Profile from "../page/profile/profile";
import Editkaryawan from "../page/usermanager/editkaryawan";
import Tambahkaryawan from "../page/usermanager/tambahkaryawan";
import Usermanager from "../page/usermanager/usermanager";
import axios from "axios";
import { useEffect } from "react";

const Rout = () => {
  const [users, setUsers] = useState([]);
  const [structure, setStructure] = useState([]);
  const targetmakanan = 134000;
  const targetminuman = 164000;
  const tinggimakanan = structure.food / (targetmakanan / 100);
  const tinggiminuman = structure.drink / (targetminuman / 100);

  const getUsers = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:5000/user");
      setUsers(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  const getStructure = async () => {
    try {
      let response = await axios.get(
        "http://127.0.0.1:5000/structure/63a81c48d2166be1b25c5c0d"
      );
      setStructure(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getUsers();
    getStructure();
  }, []);

  const biodataProfile = {
    nama: "Rizky Rahmat Nugraha",
    posisi: "Developer",
    nip: 120705111,
    phone: "083817381943",
    email: "rizkyrahmat198@gmail.com",
    age: 19,
    gender: "Man",
    address: "North Korea",
    gaji: 7200000,
  };

  return (
    <BrowserRouter>
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Login />{" "}
          </Route>
          <Route path="/dashboard">
            <Navbar />
            <Dashboard
              tinggimakanan={tinggimakanan}
              tinggiminuman={tinggiminuman}
              structure={structure}
              targetmakanan={targetmakanan}
              targetminuman={targetminuman}
            />
            <Bottombar />
          </Route>
          <Route path="/lowongandeveloper">
            <DetailLowongan />
            <Bottombar />
          </Route>
          <Route path="/lowonganadmin">
            <LowonganAdmin />
            <Bottombar />
          </Route>
          <Route path="/lowonganwaiter">
            <LowonganWaiter />
            <Bottombar />
          </Route>
          <Route path="/lowonganob">
            <LowonganOb />
            <Bottombar />
          </Route>
          <Route path="/lowongancashier">
            <LowonganCashier />
            <Bottombar />
          </Route>
          <Route path="/graph">
            <Navbar />
            <Graph
              tinggimakanan={tinggimakanan}
              tinggiminuman={tinggiminuman}
              targetmakanan={targetmakanan}
              targetminuman= {targetminuman}
              structure={structure}

            />
            <Bottombar />
          </Route>
          <Route path="/employee">
            <Navbar />
            <Employee users={users} />
            <Bottombar />
          </Route>
          <Route path="/detailprofile/:id">
            <DetailProfile />
            <Bottombar />
          </Route>
          <Route path="/profile" exact>
            <Navbar />
            <Profile
              biodataProfile={biodataProfile}
              tinggimakanan={tinggimakanan}
              tinggiminuman={tinggiminuman}
            />
            <Bottombar />
          </Route>
          <Route path="/usermanager" exact>
            <Usermanager users={users} />
            <Bottombar />
          </Route>
          <Route path="/usermanager/tambahkaryawan">
            <Tambahkaryawan />
            <Bottombar />
          </Route>
          <Route path="/usermanager/editkaryawan/:id">
            <Editkaryawan />
            <Bottombar />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Rout;
