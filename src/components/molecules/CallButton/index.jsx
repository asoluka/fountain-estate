import React from "react";
import styled from "styled-components";
import { Text } from "../../atoms";

const Wrapper = styled.div`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  border: 2px solid ${({ borderColor }) => borderColor || "white"};
  padding: 4px 16px;
  color: ${({ color }) => color || "white"};
  /* font-weight: bold; */
  border-radius: 5px;
  background: ${({ background }) => background || "rgba(0, 0, 0, .4)"};

  width: fit-content;
`;

const LinkText = styled.a`
  text-decoration: none;
  color: ${({ color }) => color || "white"};
`;

export const CallButton = ({
  position,
  top,
  bottom,
  right,
  left,
  background,
  color,
  borderColor,
}) => {
  return (
    <Wrapper
      position={position}
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      background={background}
      color={color}
      borderColor={borderColor}
    >
      <LinkText href="tel:+2347025050012" color={color}>
        <Text>07025050012</Text>
      </LinkText>
    </Wrapper>
  );
};
