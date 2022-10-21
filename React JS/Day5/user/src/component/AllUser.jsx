import React, { useState } from "react";
import users from "../users.json";
import { UserCard } from "./components";
const AllUser = () => {
  const [output, setOutput] = useState(users);
  const searchUsers = (inputValue) => {
    setOutput(
      users.filter((user) => {
        return user.username.toLowerCase().includes(inputValue.toLowerCase());
      })
    );
  };
  return (
    <div className="container">
      {/* {modal && (
      <div
        className="modal"
        onClick={() => {
          setModal(false);
          setModalUserData(null);
        }}
      >
        <div className="modal-content">{modalUserData.username}</div>
      </div>
    )} */}
      <div>
        <input type={"text"} onChange={(e) => searchUsers(e.target.value)} />
      </div>
      {/* {users.map((userData, index) => {
      return <UserCard userData={userData} key={index} />;
    })} */}
      <div>
        {output.length === 0 && <div>No results found</div>}
        {output.map((userData, index) => {
          return (
            <div>
              <UserCard
                // showUserData={showUserData}
                userData={userData}
                key={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllUser;
