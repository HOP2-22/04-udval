import React from "react";
import { Link } from "react-router-dom";
// import Star from "../pics/star.png";
export const UserCard = ({ userData, index, showUserData }) => {
  return (
    <div className="userContainer" onClick={() => showUserData(userData)}>
      <img className="avatar" src={userData.avatar} alt={index} />
      <div>
        <Link to={userData.username} key={index}>
          Name: {userData.username}
        </Link>
        <p key={index}>E-Mail: {userData.email}</p>
        <p key={index}>Date of Birth: {userData.date_of_birth}</p>
      </div>
    </div>
  );
};
// export const UserFeedback = (props) => {
//   const { starNumber, comment, avatar, name } = props;
//   const star = ["⭐️", "⭐️", "⭐️", "⭐️", "⭐️"];
//   star.length = starNumber;
//   // ★☆
//   return (
//     <div className="fbContainer">
//       <div className="starContainer">
//         {/* {star.map((element, index) => (
//           <div key={index}>{element}</div>
//         ))} */}
//         {new Array(5).fill(0).map((_, index) => (
//           <div key={index}>{starNumber >= index + 1 ? "★" : "☆"}</div>
//         ))}
//       </div>
//       <div className="commentContainer">{comment}</div>
//       <div className="userprofileContainer">
//         <img alt="profileImage" className="profileImage" src={avatar} />
//         <div className="userFullName">{name}</div>
//       </div>
//     </div>
//   );
// };
// export const SecondOne = (props) => {
//   const { contentPicture, header, content, username, date, profilepicture } =
//     props;
//   return (
//     <div className="secondOneContainer">
//       <div className="contentHeaderPicContainer">
//         <img
//           src={contentPicture}
//           alt={contentPicture}
//           className="contentHeaderPic"
//         />
//       </div>
//       <div className="mdkuee">
//         <div className="header">{header}</div>
//         <div className="content">{content}</div>
//         <div className="bottomPartContainer">
//           <div>
//             <img
//               className="profilepicture"
//               src={profilepicture}
//               alt={profilepicture}
//             />
//           </div>
//           <div className="usernameS">{username}</div>
//           <div className="usernameS">{date}</div>
//         </div>
//       </div>
//     </div>
//   );
// };
