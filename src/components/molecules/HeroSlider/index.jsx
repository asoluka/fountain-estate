import { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex, Section, Text } from "../../atoms";
import { ActionButtons, MainNav } from "../../organisms";

const HeroWrapper = styled(Flex)`
  min-height: inherit;
`;

const SliderImage = styled.div`
  position: relative;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 45%;
  transition: all 1s;
`;

const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 100px;
  width: 55%;
`;

const SliderText = styled(Text)`
  transition: all 1.5s;
`;

const SliderButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: -50px;
`;

const SliderButton = styled.button`
  background-color: black;
  border: 1px solid #f2f6ff;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const HeroSlider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { title, description, imgUrl } = data[currentSlide];

  useEffect(() => {
    let timerID = setInterval(nextSlide, 10000);

    return () => {
      clearInterval(timerID);
    };
  });

  const nextSlide = () => {
    if (currentSlide < data.length - 1) setCurrentSlide(currentSlide + 1);
    if (currentSlide === data.length - 1) setCurrentSlide(0);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    if (currentSlide === 0) setCurrentSlide(data.length - 1);
  };

  return (
    <HeroWrapper>
      <SliderContent>
        <MainNav />
        <Section border="1p solid black" width="80%">
          <SliderText type="p">We exist to keep:</SliderText>
          <SliderText type="h1" fontSize="3.5rem" margin="0 0 50px 0">
            {title}
          </SliderText>
          <SliderText type="p">{description}</SliderText>
        </Section>
        <div></div>
      </SliderContent>
      <SliderImage backgroundImage={imgUrl}>
        <ActionButtons />
        <SliderButtonWrapper>
          <SliderButton onClick={prevSlide}>&#129168;</SliderButton>
          <SliderButton onClick={nextSlide}>&#129170;</SliderButton>
        </SliderButtonWrapper>
      </SliderImage>
    </HeroWrapper>
  );
};
