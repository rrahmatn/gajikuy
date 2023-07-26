import React, { useEffect, useState } from "react";
import "./bottombar.css";
import { Link, useLocation } from "react-router-dom";
import { HiHome, HiUserGroup } from "react-icons/hi";
import { AiFillPieChart } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import {FaUserAlt} from 'react-icons/fa';

const Bottombar = () => {
  const [activeBot, setActivebot] = useState("home");

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/lowonganwaiter" ||
      location.pathname === "/lowonganadmin" ||
      location.pathname === "/lowonganob" ||
      location.pathname === "/lowongandeveloper" ||
      location.pathname === "/lowongancashier"
    ) {
      setActivebot("home");
    }
    if (location.pathname === "/graph") {
      setActivebot("graph");
    }
    if (
      location.pathname === "/employee" ||
      location.pathname === "/detailprofile"
    ) {
      setActivebot("employee");
    }if(location.pathname === "/usermanager" || location.pathname === "/usermanager/tambahkaryawan" || location.pathname === "/usermanager/editkaryawan"){
      setActivebot('usermanager')
    }if(location.pathname === '/profile'){
      setActivebot ('profile')
    }
  }, []);

  return (
    <div className="bungkusBottombar">
      <Link
        to="/dashboard"
        id={activeBot === "home" ? "activeBot" : ""}
        onClick={() => {
          setActivebot("home");
        }}
        className="bottomNav"
      >
        <HiHome /> <p>Home</p>
      </Link>
      <Link
        to="/graph"
        id={activeBot === "graph" ? "activeBot" : ""}
        onClick={() => {
          setActivebot("graph");
        }}
        className="bottomNav"
      >
        <AiFillPieChart /> <p>Graph</p>
      </Link>
      <Link
        to="/employee"
        id={activeBot === "employee" ? "activeBot" : ""}
        onClick={() => {
          setActivebot("employee");
        }}
        className="bottomNav"
      >
        <HiUserGroup /> <p>Employees</p>
      </Link>
      <Link
      id={activeBot === "usermanager" ? "activeBot" : ""}
        to="/usermanager"
        className="bottomNav"
        onClick={() => {
          setActivebot("usermanager");
        }}
      >
        <FaUserCog /> <p>User Manager</p>
      </Link>
      <Link to="/profile" className="bottomNav"
        id={activeBot === "profile" ? "activeBot" : ""}
        style={{fontSize:'28px' }}
        onClick={() => {
          setActivebot("profile");
        }}
      >
        <FaUserAlt style={{marginTop:'4px'}}/> <p style={{marginTop:'2px'}}>Profile</p>
      </Link>
    </div>
  );
};
export default Bottombar;
