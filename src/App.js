import styled from "styled-components";
import { HeroSlider } from "./components";
import { screen } from "./theme/theme-utils";

const Main = styled.div`
  min-height: 100vh;
  background-color: #fcfdff;
  /* background-color: #f2f6ff; */
  /* color: #484848; */

  @media only screen and (${screen.lg}) {
    display: none;
  }
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

function App() {
  return (
    <Main>
      <HeroSlider data={data} />
    </Main>
  );
}

export default App;
