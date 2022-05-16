import { useEffect, useState } from "react";
import styled from "styled-components";
import { screen } from "../../../theme";
import { Flex, Section, Text } from "../../atoms";
import { ActionButtons, MainNav } from "../../organisms";
// import { CallButton } from "../CallButton";

const HeroWrapper = styled(Flex)`
  min-height: 100vh;

  @media only screen and (${screen.lg}) {
    flex-direction: column;
  }
`;

const SliderImage = styled.div`
  position: relative;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 45%;
  transition: all 1s;

  @media only screen and (${screen.lg}) {
    min-height: 60vh;
    width: 100%;
  }
`;

const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 50px;
  width: 55%;

  @media only screen and (${screen.lg}) {
    padding: 20px 10px;
    min-height: 40vh;
    width: 100%;
  }
`;

const SliderText = styled(Text)`
  transition: all 1.5s;
`;

const SliderButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: -50px;

  @media only screen and (${screen.lg}) {
    bottom: 0;
    left: 0;
  }
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
    <div>
      <HeroWrapper>
        <SliderContent>
          <MainNav />
          <Section border="1p solid black" width="80%">
            <SliderText type="p">We exist to keep:</SliderText>
            <p className="mt-2 text-3xl md:text-5xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8">
              {title}
            </p>
            <SliderText type="p">{description}</SliderText>
          </Section>
          <div></div>
        </SliderContent>
        <SliderImage backgroundImage={imgUrl}>
          {/* <CallButton position="absolute" top="35px" right="20px" /> */}
          <ActionButtons />
          <SliderButtonWrapper>
            <SliderButton onClick={prevSlide}>&#129168;</SliderButton>
            <SliderButton onClick={nextSlide}>&#129170;</SliderButton>
          </SliderButtonWrapper>
        </SliderImage>
      </HeroWrapper>
    </div>
  );
};
