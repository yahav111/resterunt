import React, { useState } from "react";
import { User } from "../types/user";

interface UpdateUserProps {
  user: User;
  onUserUpdated: (updatedUser: User) => void;
}

const UpdateUser: React.FC<UpdateUserProps> = ({ user, onUserUpdated }) => {
  const [updatedUser, setUpdatedUser] = useState<User>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // פה תוכל להוסיף קריאת API לעדכון המשתמש בשרת
      onUserUpdated(updatedUser);
      console.log("User updated successfully!");
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };

  return (
    <form onSubmit={handleUpdateSubmit}>
      <input
        type="text"
        name="username"
        value={updatedUser.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={updatedUser.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={updatedUser.password}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateUser;
