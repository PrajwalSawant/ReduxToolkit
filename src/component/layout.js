import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUserList } from "../slice";
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const fetchUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(setUserList(res.data));
  };

  useEffect(() => {
    if (user.userList.length < 1) {
      fetchUser();
    }
  }, []);

  return <>{children}</>;
};

export default Layout;
