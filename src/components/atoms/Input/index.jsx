import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { primaryFont, defaultTheme } from "../../../theme";
import { ifProp } from "styled-tools";
import { checkinColors } from "../../../theme/colors";

const styles = css`
  font-family: ${primaryFont};
  display: block;
  width: 100%;
  flex-grow: ${(grow) => grow}
  margin: ${({ margin }) => margin};
  box-sizing: border-box;
  font-size: 14px;
  background: ${({ background }) => background};
  padding: ${({ padding }) =>
    !padding
      ? ifProp({ type: "textarea" }, "0.4444444444em", "0 0.4444444444em")
      : padding};
  outline: none;
  height: ${ifProp({ type: "textarea" }, "auto", "40px")};
  min-height: ${({ minHeight }) => minHeight}
  width: ${({ width }) => width};
  border: ${({ border }) =>
    !border
      ? `1px solid ${ifProp(
          "error",
          defaultTheme.status.errorColor,
          defaultTheme.disabled
        )}`
      : border};
  cursor: ${ifProp("disabled", "not-allowed", "auto")};
  border-radius: 25px;
  border-left: ${(borderLeft) => borderLeft} &[type= 'checkbox' ],
    &[type= 'radio' ] {
    display: inline-block;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }

  &:focus {
    ${({ border }) =>
      !border
        ? `1px solid ${ifProp(
            "error",
            defaultTheme.status.errorColor,
            defaultTheme.disabled
          )}`
        : "none"};
  }
`;

const ErrorMessage = styled.p`
  color: ${defaultTheme.status.errorColor};
  font-size: 12px;
`;

export const StyledTextarea = styled.textarea`
  ${styles}
`;
export const StyledSelect = styled.select`
  ${styles}
`;
export const StyledInput = styled.input`
  ${styles}
`;

export const Input = (props) => {
  const { type, error } = props;
  if (type === "textarea") {
    return (
      <div>
        <StyledTextarea {...props} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
  if (type === "select") {
    return (
      <div>
        <StyledSelect {...props} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
  return (
    <div>
      <StyledInput {...props} novalidate />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  margin: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  error: PropTypes.string,
  background: PropTypes.any,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  border: PropTypes.string,
  borderLeft: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  height: 40,
  background: "transparent",
  border: `1px solid ${checkinColors.border[200]}`,
  margin: "0",
};
