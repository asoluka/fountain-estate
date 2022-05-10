// import PropTypes from "prop-types";
import styled from "styled-components";
import { CustomScrollBar } from "../CustomScrollBar";

export const Section = styled.div`
  display: ${({ display }) => display || "block"};
  font-size: ${({ fontSize }) => fontSize};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  overflow-y: ${({ overflowY }) => overflowY};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  border-right: ${({ borderRight }) => borderRight};
  border-left: ${({ borderLeft }) => borderLeft};
  border-top: ${({ borderTop }) => borderTop};
  border-bottom: ${({ borderBottom }) => borderBottom};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};

  ${CustomScrollBar}
`;

Section.propTypes = {};
