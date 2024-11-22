import React, { useState } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUsers";
import { User } from "./types/user";
import DeleteUser from "./components/DeleteUser";
import UpdateUser from "./components/UpdateUser";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleUserCreated = (newUser: User) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleUserDeleted = (userId: string) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id?.toString() !== userId)
    );
  };

  const handleUserUpdated = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user)) // YALI: Great!
    );
  };

  return (
    <div>
      <h1>User Management App</h1>
      <CreateUser onUserCreated={handleUserCreated} />
      <UserList users={users} />
      {users.map((user) => ( 
                                        // YALI: Shouldn't this be a part of UserList aswell?
        <div key={user.id?.toString()}> 
          {" "}
          <DeleteUser
            userId={user.id?.toString() || ""}
            onUserDeleted={handleUserDeleted}
          />
          <UpdateUser user={user} onUserUpdated={handleUserUpdated} />
        </div>
      ))}
    </div>
  );
};
export default App;

// YALI: Please learn css, your website looks like shit!!!!