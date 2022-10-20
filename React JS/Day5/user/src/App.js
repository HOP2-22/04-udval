import { useState } from "react";
import "./App.css";
import { UserCard, UserFeedback } from "./component/components";
import users from "./users.json";

function App() {
  // const [output, setOutput] = useState(users);
  // const searchUsers = (inputValue) => {
  //   setOutput(
  //     users.filter((user) => {
  //       return user.username.toLowerCase().includes(inputValue.toLowerCase());
  //     })
  //   );
  // };
  // const [modal, setModal] = useState(false);
  // const [modalUserData, setModalUserData] = useState(null);
  // const showUserData = (user) => {
  //   setModal(true);
  //   setModalUserData(user);
  // };
  // return (
  //   <div className="container">
  //     {modal && (
  //       <div
  //         className="modal"
  //         onClick={() => {
  //           setModal(false);
  //           setModalUserData(null);
  //         }}
  //       >
  //         <div className="modal-content">{modalUserData.username}</div>
  //       </div>
  //     )}
  //     <div>
  //       <input type={"text"} onChange={(e) => searchUsers(e.target.value)} />
  //     </div>
  //     {/* {users.map((userData, index) => {
  //       return <UserCard userData={userData} key={index} />;
  //     })} */}
  //     <div>
  //       {output.length === 0 && <div>No results found</div>}
  //       {output.map((userData, index) => {
  //         return (
  //           <UserCard
  //             showUserData={showUserData}
  //             userData={userData}
  //             key={index}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  return (
    <div className="feedbackContainer">
      <UserFeedback />
      <UserFeedback />
      <UserFeedback />
      <UserFeedback />
    </div>
  );
}

export default App;
