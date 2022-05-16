import React from "react";
import styled from "styled-components";
import { screen } from "../../../theme";
import { Icon } from "../../atoms";

const Wrapper = styled.div`
  width: fit-content;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #0000ff;
  padding: 10px;
  z-index: 99999999999999999;

  @media only screen and (${screen.lg}) {
    right: 10px;
    width: 55px;
    height: 55px;
  }
`;
export const InstantMessageFloatingAction = () => {
  return (
    <Wrapper>
      <a
        href="https://web.whatsapp.com/send?phone=2348167231071&text="
        target="_blank"
        rel="noreferrer"
      >
        <Icon type="whatsapp" fill="white" />
      </a>
    </Wrapper>
  );
};
