import React from "react";

interface DeleteUserProps {
  userId: string;
  onUserDeleted: (userId: string) => void;
}

const DeleteUser: React.FC<DeleteUserProps> = ({ userId, onUserDeleted }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm( // YALI: Great!
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        onUserDeleted(userId);
        console.log("User deleted successfully!");
      } catch (error) {
        console.error("Failed to delete user", error);
      }
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteUser;
