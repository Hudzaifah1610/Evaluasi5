import React from "react";
import {} from "react-bootstrap";
import "./content.css";

const Profil = props => {
  return (
    <div className="profil" id="profile">
      <div className="header2">
        <h4>My Profile</h4>
      </div>
      <img
        src="https://t3.ftcdn.net/jpg/01/83/55/76/500_F_183557656_DRcvOesmfDl5BIyhPKrcWANFKy2964i9.jpg"
        alt="logo"
      ></img>
      <div className="text">
        <p>Name: Hudzaifah</p>
        <p>Class: Front-end Division</p>
        <p>Job: Student</p>
        <p>Hobby: Read the story</p>
        <p>Adress: Wirokerten,Banguntapan,Bantul, DIY</p>
      </div>
    </div>
  );
};
export default Profil;
