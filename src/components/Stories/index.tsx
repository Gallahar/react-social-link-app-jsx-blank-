import "./index.scss";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/selectors";

const stories = [
  {
    id: 1,
    userName: "John Doe",
    imgUrl:
      "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 2,
    userName: "John Doe",
    imgUrl:
      "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 3,
    userName: "John Doe",
    imgUrl:
      "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
];

export const Stories = () => {
  const { user } = useSelector(selectAuth);

  return (
    <div className={"stories"}>
      <div className={"story"}>
        <img src={user ? user.imgUrl : ""} alt={"story"} />
        <span>{user ? user.userName : ""}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div key={story.id} className={"story"}>
          <img src={story.imgUrl} alt={"story"} />
          <span>{story.userName}</span>
        </div>
      ))}
    </div>
  );
};
