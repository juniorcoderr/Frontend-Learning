const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Alice",
      age: 30,
    },
    {
      id: 2,
      name: "Bob",
      age: 25,
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
    },
  ];
  return (
    <div>
      {users.map(({ id, name, age }) => (
        <ul key={id}>
          <li>UserName: {name}</li>
          <li>UserAge: {age}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
