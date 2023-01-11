import React from "react";
import styled from "styled-components";

const Title = styled.div`
  height: 100px;
  width: 100%;
  background-color: #ffffff;
  /* background-color: var(--gray-color); */
  /* background-color: var(--secondary); */
  display: flex;
  padding: 30px 0;
  .header-container {
    text-align: center;
    width: 100%;
    margin: auto 0;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--gray-color);
  }
  p {
    font-size: 22px;
    font-weight: 500;
    margin: 16px 0 0;
    color: var(--primary);
  }
`;

export default function Header() {
  return (
    <Title>
      <div className="header-container">
        <h1>Welcome JJUNNY shop!!!</h1>
        <p>react 연습용 prototype-shop입니다.</p>
      </div>
    </Title>
  );
}
