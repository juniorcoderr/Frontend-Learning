// Method - 1 -> Only defining types
// const UserInfo = (props: { name: string; age: number; isStudent: boolean }) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.age}</h2>
//       <h2>{props.isStudent}</h2>
//     </div>
//   );
// };

// export default UserInfo;

// Method - 2 -> Destructuring + types defining
// const UserInfo = ({
//   name,
//   age,
//   isStudent,
// }: {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <h2>{age}</h2>
//       <h2>{isStudent}</h2>
//     </div>
//   );
// };

// export default UserInfo;

// Method 3 - providing type into separate shape ->
// 1) using type keyword
// type UserShape = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// 2) using interface
interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
}

const UserInfo = ({ name, age, isStudent }: UserShape) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent}</h2>
    </div>
  );
};

export default UserInfo;
