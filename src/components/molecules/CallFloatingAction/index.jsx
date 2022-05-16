import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { screen } from "../../../theme";
import { Icon } from "../../atoms";

const Wrapper = styled.div`
  width: fit-content;
  position: fixed;
  bottom: 20px;
  left: 40px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #0000ff;
  padding: 16px;
  z-index: 9999999999999;

  @media only screen and (${screen.lg}) {
    padding: 12px;
    left: 10px;
    width: 50px;
    height: 50px;
  }
`;
const CallFloatingAction = () => {
  return (
    <Wrapper>
      <a href="tel: +2348143019660">
        <Icon type="phone" fill="white" />
      </a>
    </Wrapper>
  );
};

export default CallFloatingAction;
