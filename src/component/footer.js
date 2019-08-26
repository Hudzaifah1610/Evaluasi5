import React from "react";
import {} from "react-bootstrap";
import "./content.css";
import fb from "./fb.png";
import ig from "./ig.png";
import yt from "./yt.png";
import tele from "./tele.png";

const Footer = props => {
  return (
    <div className="footer" id="about">
      <div className="header3">
        <h4>Description</h4>
      </div>
      <h5>
        Here I majored in front-end because I believe that is my talent. Even
        though I am very beginner studying in this IT hut, but I am still
        determined to be a great programmer. May I include you who read to be a
        great programmer. Amiiin
      </h5>
      <a href="https://www.facebook.com/elhoedzay.hoedzay">
        <img className="a" src={fb} alt="logo"></img>
      </a>
      <a href="https://www.instagram.com/hdzfh_1610/?hl=id">
        <img src={ig} alt="logo"></img>
      </a>
      <a href="https://www.youtube.com/channel/UCO3Y2tF4-ZeDmeoVXPOOkJA?view_as=subscriber">
        <img src={yt} alt="logo"></img>
      </a>
      <a href="https://web.telegram.org/#/im?p=u927529190_11401904521028744177">
        <img src={tele} alt="logo"></img>
      </a>
      <p>Copyright @ 2019 code-codean.com, All right reserved </p>
    </div>
  );
};
export default Footer;
