import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); 
  };

  const decrement = () => {
    setCount(count - 1); 
  };

  return (
    <div>
      <h2>숫자 카운터</h2>
      <p>현재 숫자: {count}</p>
      <button onClick={increment}>증가</button> {/* 증가 버튼 */}
      <button onClick={decrement}>감소</button> {/* 감소 버튼 */}
    </div>
  );
};

export default Counter;

