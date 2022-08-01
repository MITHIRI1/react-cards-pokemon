import { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };
  return [isFacingUp, flipCard];
};

const useAxios = (baseUrl, isStatic) => {
  const [data, setData] = useState([]);
  const addData = async (suffix) => {
    const url = isStatic ? baseUrl : `${baseUrl}${suffix}`
    const response = await axios.get(url);
    setData(data => [...data, { ...response.data, id: uuid() }]);
  };
  return [data, addData];
};

export { useFlip, useAxios };