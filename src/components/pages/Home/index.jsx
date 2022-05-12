import styled from "styled-components";
import { HeroSlider } from "../../molecules";
// import { HeroSlider } from "./components";

const Main = styled.div`
  min-height: 100vh;
  background-color: #f2f6ff;
  /* background-color: #fcfdff; */
  /* color: #484848; */
`;

const data = [
  {
    title: "Keep Our Clients Satisfied",
    imgUrl: "./assets/imgs/street_view_2.jpg",
    description:
      "lorem ipsum lorem ipsum, placeholder text used here lorem ipsum lorem ipsum, placeholder text used here...",
    link: "",
  },
  {
    title: "Our Colleagues and Collaborators Happy",
    imgUrl: "./assets/imgs/street_view.jpg",
    description:
      "lorem ipsum lorem ipsum, placeholder text used here lorem ipsum lorem ipsum, placeholder text used here...",
    link: "",
  },
  {
    title: "Our Staffs Fulfilled and Motivated",
    imgUrl: "./assets/imgs/aerial_view.jpg",
    description:
      "lorem ipsum lorem ipsum, placeholder text used here lorem ipsum lorem ipsum...",
    link: "",
  },
  {
    title: "Our Management Proud and Celebrated",
    imgUrl: "./assets/imgs/living_room.jpg",
    description:
      "lorem ipsum lorem ipsum, placeholder text used here lorem ipsum lorem ipsum, placeholder...",
    link: "",
  },

  {
    title: "Our Brand Competitive and Progressive",
    imgUrl: "./assets/imgs/bedroom.jpg",
    description:
      "lorem ipsum lorem ipsum, placeholder text used here lorem ipsum lorem ipsum, placeholder text used here...",
    link: "",
  },
];

export const Home = () => {
  return (
    <Main>
      <HeroSlider data={data} />
    </Main>
  );
};
