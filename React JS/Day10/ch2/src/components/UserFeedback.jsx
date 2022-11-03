export const UserFeedback = (props) => {
  const { starNumber, comment, avatar, name } = props;
  const star = ["⭐️", "⭐️", "⭐️", "⭐️", "⭐️"];
  star.length = starNumber;
  // ★☆]
  return (
    <div className="fbContainer">
      <div className="starContainer">
        {/* {star.map((element, index) => (
            <div key={index}>{element}</div>
          ))} */}
        {new Array(5).fill(0).map((_, index) => (
          <div key={index}>{starNumber >= index + 1 ? "★" : "☆"}</div>
        ))}
      </div>
      <div className="commentContainer">{comment}</div>
      <div className="userprofileContainer">
        <img alt="profileImage" className="profileImage" src={avatar} />
        <div className="userFullName">{name}</div>
      </div>
    </div>
  );
};
