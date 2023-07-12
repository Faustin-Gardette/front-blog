import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="" alt="" />
        <div className="user">
          <img src="" alt="" />
          <div className="info">
            <span>Jhon</span>
            <p>Poste y a 2 jours</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          voluptates enim voluptatibus labore porro quo veritatis quisquam illo
          ducimus, suscipit ullam! Obcaecati iure nemo rerum voluptatibus
          aliquid veniam harum temporibus.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
