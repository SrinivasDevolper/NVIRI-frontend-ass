import React from "react";
import { useEffect, useState } from "react";
import { URL } from "../url.js";
import axios from "axios";

function useApiFecthing(url) {
  const [states, setStates] = useState([]);
  const [errState, setErrState] = useState("");
  const handleStates = async () => {
    try {
      const response = await axios.get(`${URL}/${url}`);
      console.log(response, "response");
      setStates(response.data);
    } catch (e) {
      setErrState(e.message || "Data Not Found");
    }
  };
  useEffect(() => {
    handleStates();
  }, []);
  return [states, errState];
}

export default useApiFecthing;
