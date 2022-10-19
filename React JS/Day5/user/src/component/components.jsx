import React from "react";
import "../styles/compStyle.css";
import Star from "../pics/star.png";
export const UserCard = ({ userData, index, showUserData }) => {
  return (
    <div className="userContainer" onClick={() => showUserData(userData)}>
      <img className="avatar" src={userData.avatar} alt={index} />
      <div>
        <p key={index}>Name: {userData.username}</p>
        <p key={index}>E-Mail: {userData.email}</p>
        <p key={index}>Date of Birth: {userData.date_of_birth}</p>
      </div>
    </div>
  );
};
export const UserFeedback = () => {
  return (
    <div className="fbContainer">
      <div>
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
      </div>
      <div className="commentContainer">
        Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </div>
      <div className="userprofileContainer">
        <img
          alt="profileImage"
          className="profileImage"
          src={"https://robohash.org/autatdoloribus.png?size=300x300&set=set1"}
        />
        <div className="userFullName">Amy Klassen</div>
      </div>
    </div>
  );
};
