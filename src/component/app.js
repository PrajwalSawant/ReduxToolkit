import React from "react";
import SelectedUser from "./selectedUser";
import UserList from "./userList";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <UserList />
          </div>
          <div className="col-md-6">
            <SelectedUser />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
