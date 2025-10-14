import FunctionalComponent from "./FunctionalComponent";
import UserData from "./UserData";
import UserInfo from "./UserInfo";

const User = () => {
  return (
    <div>
      <UserInfo name="alex" age={20} isStudent={true} />
      <UserData>
        <p>User Data is here</p>
      </UserData>
      <FunctionalComponent name="juniorcoderr" age={22} isStudent={true} />
    </div>
  );
};

export default User;
