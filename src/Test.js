import React from 'react';

// Thành phần con (child component) sử dụng props
function Greet(props) {
  return <div>Hello, {props.name}!</div>;
}

// Thành phần cha (parent component) truyền dữ liệu qua props
function Test() {
  return (
    <div>
      <Greet name="Alice" />
      <Greet name="Bob" />
      <Greet name="Charlie" />
    </div>
  );
}

export default Test;
