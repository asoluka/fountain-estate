import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { screen } from "../../../theme";
import { useWindowSize } from "../../../utils/useCustomHooks";
import { Icon } from "../../atoms";

const Wrapper = styled.div`
  width: fit-content;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #1e3a8a;
  padding: 10px;
  z-index: 99999999999999999;

  @media only screen and (${screen.lg}) {
    right: 10px;
    width: 55px;
    height: 55px;
  }
`;

export const InstantMessageFloatingAction = () => {
  const { width } = useWindowSize();
  const [url, setURL] = useState(
    "https://web.whatsapp.com/send?phone=2348143019660&text="
  );

  useEffect(() => {
    setWhatsappURL();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const setWhatsappURL = () => {
    if (width <= parseInt(screen.sm.substring(11, 14))) {
      setURL("https://api.whatsapp.com/send?phone=2348143019660");
    } else {
      setURL("https://web.whatsapp.com/send?phone=2348143019660&text=");
    }
  };

  return (
    <Wrapper>
      <a href={url} target="_blank" rel="noreferrer">
        <Icon type="whatsapp" fill="white" />
      </a>
    </Wrapper>
  );
};
