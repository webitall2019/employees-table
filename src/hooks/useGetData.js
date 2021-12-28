import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

export const useGetData = (url) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const users = await axios.get(url);
      dispatch({ type: "init", payload: users.data });
    };
    fetchData();
  }, [url, dispatch]);
};
