import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetchTmdbData = (url, sliceAction, options) => {
  const dispatch = useDispatch();

  const fetchTmdbData = async () => {
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      dispatch(sliceAction(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTmdbData();
  }, []);
};

export default useFetchTmdbData;
