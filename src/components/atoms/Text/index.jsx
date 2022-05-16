import React from "react";
import PropTypes from "prop-types";
import Styled, { css } from "styled-components";
import { primaryFont } from "../../../theme/theme-utils";

const styles = css`
  font-family: ${primaryFont};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ lineHeight }) => lineHeight};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  cursor: ${({ cursor }) => cursor};
`;

const StyledText = Styled.span`
    ${styles}
`;

const StyledParagraph = Styled.p`
    ${styles}
`;

const StyledH1 = Styled.h1`
    ${styles}
`;

const StyledH2 = Styled.h2`
    ${styles}
`;

const StyledH3 = Styled.h3`
    ${styles}
`;

export const Text = ({
  children,
  color,
  fontSize,
  cursor,
  type,
  width,
  height,
  textDecoration,
  lineHeight,
  padding,
  margin,
  fontWeight,
  textAlign,
  className,
}) => {
  if (type === "h1") {
    return (
      <StyledH1
        color={color}
        fontSize={fontSize}
        width={width}
        cursor={cursor}
        height={height}
        fontWeight={fontWeight}
        padding={padding}
        margin={margin}
        textAlign={textAlign}
        textDecoration={textDecoration}
        className={className}
      >
        {children}
      </StyledH1>
    );
  }

  if (type === "p") {
    return (
      <StyledParagraph
        color={color}
        fontSize={fontSize || "0.9rem"}
        cursor={cursor}
        width={width}
        height={height}
        fontWeight={fontWeight}
        padding={padding}
        textDecoration={textDecoration}
        margin={margin}
        textAlign={textAlign}
        className={className}
      >
        {children}
      </StyledParagraph>
    );
  }

  if (type === "h2") {
    return (
      <StyledH2
        color={color}
        fontSize={fontSize}
        cursor={cursor}
        textDecoration={textDecoration}
        width={width}
        height={height}
        fontWeight={fontWeight}
        padding={padding}
        margin={margin}
        textAlign={textAlign}
        className={className}
      >
        {children}
      </StyledH2>
    );
  }

  if (type === "h3") {
    return (
      <StyledH3
        color={color}
        fontSize={fontSize}
        cursor={cursor}
        width={width}
        height={height}
        textDecoration={textDecoration}
        fontWeight={fontWeight}
        padding={padding}
        margin={margin}
        textAlign={textAlign}
        className={className}
      >
        {children}
      </StyledH3>
    );
  }

  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      cursor={cursor}
      width={width}
      height={height}
      textDecoration={textDecoration}
      lineHeight={lineHeight}
      padding={padding}
      margin={margin}
      fontWeight={fontWeight}
      textAlign={textAlign}
      className={className}
    >
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  lineHeight: "30px",
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.any,
  fontSize: PropTypes.string,
  header: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  lineHeight: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string,
  className: PropTypes.string,
};
