import React, { useRef, useState } from "react";
// import { IoIosMenu } from "react-icons/io";
import { Container, Flex } from "../../atoms";
import styled from "styled-components";
import colors from "../../../utils/colors";
import { NavLink, useNavigate } from "react-router-dom";
import { screen } from "../../../theme";
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick";
import { Icon } from "../../atoms";
import logo from "../../../assets/imgs/logo.png";
import { MenuIcon } from "@heroicons/react/outline";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 999999999999999999999999999px;

  @media only screen and (${screen.md}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 999999999999999999999999999px;
  }
`;

const NavIconsArea = styled(Flex)`
  justify-content: space-between;
  align-items: center;

  @media only screen and (${screen.md}) {
    width: 100%;
  }
`;

const HamburgerIcon = styled(MenuIcon)`
  display: none;
  width: 40px;
  height: 40px;
  color: black;
  /*background-color: black; */

  @media only screen and (${screen.md}) {
    display: block;
  }
`;

const NavItemsSection = styled(Flex)`
  width: 67%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  @media only screen and (${screen.lg}) {
    width: 95%;
  }

  @media only screen and (${screen.md}) {
    height: 94vh;
    display: ${({ display }) => display};
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: white;

  @media only screen and (${screen.md}) {
    justify-content: flex-start;
    padding: 0;
  }
`;

const NavItems = styled(Flex)`
  @media only screen and (${screen.md}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1rem;
  }
`;

const NavActions = styled(Flex)``;

const StyledSubNavLink = styled(NavLink)`
  display: block;
  padding: 10px 0;
`;

const DropDownMenu = styled.div`
  position: relative;
`;

const Dropdown = styled(Flex)`
  background-color: white;
  width: ${({ width }) => width || "fit-content"};
  min-width: ${({ minWidth }) => minWidth};
  border-radius: 10px;
  padding: 10px 0;
  position: absolute;
  top: 50px;
  left: 0;
  height: fit-content;
  min-width: 150px;

  -webkit-box-shadow: 0px 0px 4px 1px rgba(203, 203, 203, 0.22);
  -moz-box-shadow: 0px 0px 4px 1px rgba(203, 203, 203, 0.22);
  box-shadow: 0px 0px 4px 1px rgba(203, 203, 203, 0.22);
`;

const DropdownColumn = styled.div`
  font-size: 0.8rem;
  padding: 0 20px;

  &:not(:last-child) {
    border-right: 1px solid #cbcbcb;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 50px;
`;

export const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownRef = useRef(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  let navigate = useNavigate();
  const goto = (link) => {
    mobileMenuVisible(false);
    navigate(link, { replace: true });
  };
  useDetectOutsideClick(dropdownRef, () => setDropdownActive(false));

  return (
    <Container width="95%">
      <Wrapper>
        <NavIconsArea>
          <Logo
            alt="checkin-logo"
            // className="w-8 xl:w-10 object-contain"
            src={logo}
          />
          <div onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
            <HamburgerIcon color={colors?.THEME} size={30} />
          </div>
        </NavIconsArea>
        <NavItemsSection display={mobileMenuVisible ? "flex" : "none"}>
          <NavItems>
            <StyledNavLink to="/about" onClick={() => goto("/about")}>
              About Us
            </StyledNavLink>
            <StyledNavLink
              to="/schedule-inspection"
              onClick={() => goto("/schedule-inspection")}
            >
              Schedule Inspection
            </StyledNavLink>
            <StyledNavLink
              ref={dropdownRef}
              to="#"
              onClick={() => setDropdownActive(!dropdownActive)}
              id="exploreMenu"
            >
              <DropDownMenu>Projects</DropDownMenu>
              {dropdownActive && (
                <Dropdown>
                  <DropdownColumn>
                    <StyledSubNavLink
                      // onClick={() => goto("/projects/0162736862abkue")}
                      to="/projects/0162736862abkue"
                    >
                      Integrity Towers
                    </StyledSubNavLink>
                    <StyledSubNavLink
                      // onClick={() => goto("/projects/016273sabkue09276")}
                      to="/projects/016273sabkue09276"
                    >
                      Jasmine Villa
                    </StyledSubNavLink>
                  </DropdownColumn>
                </Dropdown>
              )}
            </StyledNavLink>
          </NavItems>
          <NavActions>
            <a
              href="tel: +2347025050012"
              className="text-base whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium hover:text-white text-white bg-blue-900 hover:bg-blue-700"
            >
              <Icon type="phone" className="w-4 mr-2" fill="white" />{" "}
              07025050012
            </a>
          </NavActions>
        </NavItemsSection>
      </Wrapper>
    </Container>
  );
};
