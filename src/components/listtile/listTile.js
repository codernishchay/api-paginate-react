import React from "react";
import "./list.css";
export default function ListTile(props) {
  return (
    <div>
      {props && (
        <div>
          <li className="profile-list--item">
            <header className="profile-details">
              <span>
                <img src={props.image} />
                <h3 className="profile-name">{props.name}</h3>
              </span>
            </header>
            <blockquote className="profile-quote">
              <p>{props.phone}</p>
            </blockquote>
          </li>
        </div>
      )}
    </div>
  );
}
