import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../slice";
const UserList = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);
  const handleSelectedUser = (info) => {
    dispatch(setSelectedUser(info));
  };
  return (
    <>
      <h1>UserList</h1>
      {userList.map((data, index) => {
        return (
          <div className="card text-left my-3" key={index}>
            <div className="card-body">
              <h4 className="card-title">{data.name}</h4>
              <p className="card-text">{data.email}</p>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => handleSelectedUser(data)}>
                Select User
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default UserList;
