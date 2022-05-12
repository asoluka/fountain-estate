import React from "react";
import styled from "styled-components";
import { Text } from "../../atoms";

const Wrapper = styled.div`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  border: 2px solid white;
  padding: 5px 20px;
  color: white;
  /* font-weight: bold; */
  border-radius: 5px;
  background: ${({ background }) => background || "rgba(0, 0, 0, .4)"};

  width: fit-content;
`;

const LinkText = styled.a`
  text-decoration: none;
  color: white;
`;

export const CallButton = ({
  position,
  top,
  bottom,
  right,
  left,
  background,
}) => {
  return (
    <Wrapper
      position={position}
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      background={background}
    >
      <LinkText href="tel:+4733378901">
        <Text>081 3456 8736</Text>
      </LinkText>
    </Wrapper>
  );
};
