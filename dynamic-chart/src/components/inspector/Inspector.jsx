import React, { useState } from "react";
import {useSelector} from 'react-redux'

const Inspector = () => {
  const [inputValue, setInputValue] = useState();
  const {chartData} = useSelector((state) => state.chartReducer)
  console.log(chartData);
  
  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Inspector;
