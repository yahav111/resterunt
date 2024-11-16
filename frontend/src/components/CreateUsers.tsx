import React, { useState } from "react";
import { createUser } from "../services/userService";
import { User } from "../types/user";

interface CreateUserProps {
  onUserCreated: (newUser: User) => void;
}

const CreateUser: React.FC<CreateUserProps> = ({ onUserCreated }) => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(user);
      console.log("User created successfully!");

      onUserCreated(user);

      setUser({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Create user</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <label htmlFor="email">email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
