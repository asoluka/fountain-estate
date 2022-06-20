import styled from "styled-components";
import { HeroSlider, Navbar } from "../../organisms";

const Main = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  /* background-color: #f2f6ff;  */
  /* color: #484848; */
`;

const data = [
  {
    title: "Keep Our Clients Satisfied",
    imgUrl: "./assets/imgs/street_view_2.jpg",
    description: "",
    link: "",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/sleekcodes/image/upload/v1652667118/integrity_towers/gym_h2nqkz.jpg",
  },
  {
    title: "Our Colleagues and Collaborators Happy",
    imgUrl: "./assets/imgs/street_view.jpg",
    description: "",
    link: "",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/sleekcodes/image/upload/v1652667117/integrity_towers/perspective_3_owtyan.jpg",
  },
  {
    title: "Our Staffs Fulfilled and Motivated",
    imgUrl: "./assets/imgs/aerial_view.jpg",
    description: "",
    link: "",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/sleekcodes/image/upload/v1652667096/integrity_towers/perspective_7_a42piv.jpg",
  },
  {
    title: "Our Management Proud and Celebrated",
    imgUrl: "./assets/imgs/living_room.jpg",
    description: "",
    link: "",
  },

  {
    title: "Our Brand Competitive and Progressive",
    imgUrl: "./assets/imgs/bedroom.jpg",
    description: "",
    link: "",
  },
];

export const Home = () => {
  return (
    <Main>
      <Navbar />
      <HeroSlider data={data} />
    </Main>
  );
};
