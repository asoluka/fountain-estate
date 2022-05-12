import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;
const Header = styled.header``;
const Footer = styled.footer``;
const Section = styled.section`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const GeneralTemplate = ({
  header,
  children,
  footer,
  backgroundColor,
}) => (
  <Wrapper>
    {header && <Header>{header}</Header>}
    <Section backgroundColor={backgroundColor}>{children}</Section>
    {footer && <Footer>{footer}</Footer>}
  </Wrapper>
);

GeneralTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  backgroundColor: PropTypes.string,
  children: PropTypes.any.isRequired,
};
