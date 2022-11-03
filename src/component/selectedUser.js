import React from "react";
import { useSelector } from "react-redux";
const SelectedUser = () => {
  const selectedUser = useSelector((state) => state.user.selectedUser);
  return (
    <>
      <h1>Selected User</h1>
      {selectedUser && (
        <div class="card text-left">
          <div class="card-body">
            <h4 class="card-title">{selectedUser.name}</h4>
            <p class="card-text">{selectedUser.email}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedUser;
