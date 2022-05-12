import styled from "styled-components";
import { Icon } from "../../atoms/Icon";
import { screen } from "../../../theme";

const Wrapper = styled.div`
  position: absolute;
  width: fit-content;
  right: 20px;
  bottom: 20px;
  /* transform: translate(-50%, 50%); */
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50px;

  @media only screen and (${screen.lg}) {
    bottom: 0;
    right: 0;
    border-radius: 50px 50px 0;
  }
`;

const ButtonWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: "transparent";
  border: 2px solid #fcfdff;
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s;
    background-color: ${({ backgroundColor }) =>
      backgroundColor || "transparent"};
  }
`;

export const ActionButtons = () => {
  return (
    <Wrapper>
      <ButtonWrapper backgroundColor="#FD1D1D">
        <Icon type="instagram" fill="white" />
      </ButtonWrapper>

      <ButtonWrapper backgroundColor="#25D366">
        <Icon type="whatsapp" fill="white" />
      </ButtonWrapper>

      <ButtonWrapper backgroundColor="#4267B2">
        <Icon type="facebook" fill="white" />
      </ButtonWrapper>

      <ButtonWrapper backgroundColor="#1DA1F2">
        <Icon type="twitter" fill="white" />
      </ButtonWrapper>
    </Wrapper>
  );
};
