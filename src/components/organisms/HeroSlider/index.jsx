import { useEffect, useState } from "react";
import styled from "styled-components";
import { screen } from "../../../theme";
import { Flex, Section, Text } from "../../atoms";
import { ActionButtons } from "..";
import { Link } from "react-router-dom";
// import { CallButton } from "../CallButton";

const HeroWrapper = styled(Flex)`
  min-height: 92.2vh;

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
    min-height: 100vh;
    width: 100%;
  }
`;

const SliderContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 50px;
  width: 55%;

  @media only screen and (${screen.lg}) {
    color: white;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 20px 10px;
    z-index: 999999;
    // min-height: 40vh;
    width: 100%;
  }
`;

const CaptionText = styled(Section)`
  width: 60%;
  margin: -80px 0 0 0;
  line-height: 2rem;

  @media only screen and (${screen.lg}) {
    width: 70%;
  }

  @media only screen and (${screen.lg}) {
    width: 80%;
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
    display: none;
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
  const { imgUrl } = data[currentSlide];

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
          {/* <MainNav background="transparent" /> */}
          <CaptionText>
            <SliderText type="p">Commited To:</SliderText>
            <p className="mt-2 text-4xl md:text-5xl font-extrabold sm:text-4xl mb-8">
              Offering a change to the luxury living landscape.
            </p>
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700"
              >
                Learn More
              </Link>
            </div>
            {/* <SliderText type="p">{description}</SliderText> */}
          </CaptionText>
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
