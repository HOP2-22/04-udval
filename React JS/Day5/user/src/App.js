// import { useState } from "react";
import "./App.css";
// import { SecondOne, UserFeedback } from "./component/components";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AllUser from "./component/AllUser";
import FindOne from "./component/FindOne";

function App() {
  // const [modal, setModal] = useState(false);
  // const [modalUserData, setModalUserData] = useState(null);
  // const showUserData = (user) => {
  //   setModal(true);
  //   setModalUserData(user);
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUser />} />
        <Route path="/:username" element={<FindOne />} />
      </Routes>
    </BrowserRouter>
  );
  // const cardData = [
  //   {
  //     star: 5,
  //     comment:
  //       "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
  //     avatar:
  //       "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
  //     name: "Amy Klassen",
  //   },
  //   {
  //     star: 4,
  //     comment:
  //       "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
  //     avatar:
  //       "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
  //     name: "Amy Klassen",
  //   },
  //   {
  //     star: 3,
  //     comment:
  //       "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
  //     avatar:
  //       "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
  //     name: "Amy Klassen",
  //   },
  //   {
  //     star: 5,
  //     comment:
  //       "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
  //     avatar:
  //       "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
  //     name: "Amy Klassen",
  //   },
  // ];
  // const secondData = [
  //   {
  //     contentPicture:
  //       "https://i1.wp.com/hr-gazette.com/wp-content/uploads/2018/10/bigstock-196164373.jpg?fit=1600%2C928&ssl=1",
  //     header: "Data-Driven Design is Killing Our Instincts",
  //     content:
  //       "Our latest updates and blogs about managing your team. Our latest updates and blogs about managing your team",
  //     profilePicture:
  //       "https://img.freepik.com/free-photo/half-profile-image-beautiful-young-woman-with-bob-hairdo-posing-gazing-with-eyes-full-reproach-suspicion-human-facial-expressions-emotions-reaction-feelings_343059-4660.jpg?w=2000",
  //     username: "Jane Cooper",
  //     date: "2nd January, 2022",
  //   },
  // ];
  // return (
  //   <div className="container">
  //     <div className="feedbackContainer">
  //       {cardData.map((data) => {
  //         return (
  //           <UserFeedback
  //             name={data.name}
  //             starNumber={data.star}
  //             comment={data.comment}
  //             avatar={data.avatar}
  //           />
  //         );
  //       })}
  //     </div>
  //     <div>
  //       {secondData.map((data) => {
  //         return (
  //           <SecondOne
  //             contentPicture={data.contentPicture}
  //             header={data.header}
  //             content={data.content}
  //             username={data.username}
  //             date={data.date}
  //             profilepicture={data.profilePicture}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
}

export default App;
