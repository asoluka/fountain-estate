import styled from "styled-components";
import { Flex, Text } from "../../atoms";
// import logo from "./assets/imgs/logo.png";

const NavWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div``;

const NavItemsWrapper = styled(Flex)``;

const NavItems = styled(Text)`
  margin-left: 32px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #013cc8;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 70px;
`;

export const MainNav = () => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <Logo src="./assets/imgs/logo.png" alt="logo" />
      </LogoWrapper>
      <NavItemsWrapper>
        <NavItems>Services</NavItems>
        <NavItems>Projects</NavItems>
        <NavItems>Partnerships</NavItems>
      </NavItemsWrapper>
    </NavWrapper>
  );
};
