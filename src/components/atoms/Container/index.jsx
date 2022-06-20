import styled from "styled-components";
import { screen } from "../../../theme";

export const Container = styled.div`
  position: relative;
  z-index: 99999999999999999999999999999999999999;
  @media only screen and (${screen.sm}) {
    width: 96%;
  }

  @media only screen and (${screen.md}) {
    width: 90%;
  }

  width: ${({ width }) => width || "85%"};
  margin: auto;
`;
