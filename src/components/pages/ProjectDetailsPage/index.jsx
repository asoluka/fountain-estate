import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { Navbar, ProjectGallery, Tab } from "../../organisms";
import { GeneralTemplate } from "../../templates";
import { screen } from "../../../theme";
import styled from "styled-components";
// import heroBackground from "../../../assets/imgs/living_room.jpg";
import { ProjectDescriptionTab } from "./ProjectDetailsTabs/ProjectDescriptionTab";
import PricingTab from "./ProjectDetailsTabs/PricingTab";
import { FaqTab } from "./ProjectDetailsTabs";
import Map from "../../organisms/Map";
import { Link, useParams } from "react-router-dom";
import Footer from "../../organisms/Footer";
import FeaturesTab from "./ProjectDetailsTabs/FeaturesTab";
import { CalendlyButton } from "../../molecules/CalendlyButton";

const Wrapper = styled.div``;

const PaddedContainer = styled.div`
  padding: 0 100px;

  @media only screen and (${screen.lg}) {
    padding: 0 50px;
  }
`;

// const HeroImageSection = styled.section`
//   background-image: url(${heroBackground});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 45vh;
// `;

const projects = [
  {
    id: "0162736862abkue",
    name: "Integrity Towers",
    description: `To create a contemporary landmark, you must reimagine, redefine and
    reenvision the basic tenents of Metropolitan Luxury. <br />
    INTEGRITY TOWER is a contemporary statement on the Lekki Skyline which
    soars uniquely in a class of its own. <br />
    <br />
    The language of the design is unmistakably modern. Geometric lines and
    curves are masterfully composed into a cutting-edge 21st-century Hotel
    residential development. <br />
    <br />
    Integrity tower offers incomparable sophisticated Living. <br />
    <br />
    Come join the family.`,
    address: "6 C & I Leasing Dr, Lekki Phase I, Lagos.",
    features: [
      {
        name: "Access Card",
        icon: GlobeAltIcon,
      },
      {
        name: "Club House",
        icon: ScaleIcon,
      },
      {
        name: "Ample Parking Space",
        icon: LightningBoltIcon,
      },
      {
        name: "Play Area",
        icon: AnnotationIcon,
      },
      {
        name: "Gym",
        icon: AnnotationIcon,
      },
    ],
    faqData: [
      {
        question: "Where is the Integrity Towers located",
        answer:
          "The Integrity Tower is located in the unique and serene area of Lekki Phase 1, off Bisola Durosimi Etti road",
      },
      {
        question: "Who is the Developer of the Integrity Towers",
        answer:
          "Fountain Havens Nig Limited; a leading player in the Nigerian real estate sector is the developer of The Integrity Tower.",
      },
      {
        question: "What Title does the Integrity Towers have?",
        answer: "Governor’s consent",
      },
      {
        question: "What form of Apartments are at the Integrity Towers?",
        answer: " Four bedroom and a bq maisonette apartment",
      },
      {
        question: "What are the facilities available at the Integrity Towers?",
        answer: [
          "CCTV & PABX",
          "24/7 Security",
          "24 hours uninterrupted power",
          "Fitted kitchen",
          "Terrace spaces",
          "Smart home technology",
          "Gym",
          "Elevator",
          "swimming pool",
          "High speed internet access",
          "Ample parking space",
        ],
      },
      {
        question: "What is the initial deposit?",
        answer: "30% of the price of the unit.",
      },
      {
        question: "What do i get after my initial deposit?",
        answer:
          "You get a Fountain Haven starter pack containing a offer letter, a receipt for the payment of the initial deposit, and the contract of sale agreement once payment has been confirmed.",
      },
      {
        question: "What do i get after completing all payments?",
        answer:
          "Once all payments due are completed, you get your receipts as well as a Provisional Letter of Allocation upon request.",
      },

      {
        question:
          "What other payments do I need to make after payment for the apartment? ",
        answer: `Legal fee: 5% of the purchase price; 
    Service charge: to be determined on handing over of unit to the owner`,
      },

      {
        question: "What is the payment structure?",
        answer:
          "See flyer for details but for more information contact info@fountainhavens.com",
      },

      {
        question:
          "What are the notable landmarks surrounding the Integrity Tower",
        answer: [
          "IMAX Cinema",
          "Evercare Hospital",
          "Lekki Coliseum",
          "Lekki British School",
          "Rock Montessori School",
          "Blu Atlantic Hotel",
        ],
      },
    ],
    galleryData: [
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667118/integrity_towers/gym_h2nqkz.jpg",
        caption: "GYM",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667117/integrity_towers/masters_bath_wuq2zu.jpg",
        caption: "Masters Bath",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667117/integrity_towers/perspective_3_owtyan.jpg",
        caption: "Perspective 3",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667115/integrity_towers/pool_2_vlclxx.jpg",
        caption: "Pool 2",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667113/integrity_towers/perspective_1_iisqp6.jpg",
        caption: "Perspective 1",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667099/integrity_towers/perspective_5_hi4ndi.jpg",
        caption: "Perspective 5",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667096/integrity_towers/perspective_4_sgxccg.jpg",
        caption: "Perspective 4",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667096/integrity_towers/perspective_7_a42piv.jpg",
        caption: "Perspective 7",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667094/integrity_towers/lobby_rgwg61.jpg",
        caption: "Lobby",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667094/integrity_towers/fence_oowzhx.jpg",
        caption: "Fence",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1652667089/integrity_towers/perspective_2_dzablf.jpg",
        caption: "Perspective 2",
      },
    ],
    neighbourhood: [
      "IMAX Cinema",
      "Evercare Hospital",
      "Lekki Coliseum",
      "Lekki British School",
      "Rock Montessori School",
      "Blu Atlantic Hotel",
    ],
  },
  {
    id: "016273sabkue09276",
    name: "Jasmine Villa",
    description: `Tucked away in the heart of Ikoyi, lagos. Jasmine Villa is located in a quiet residential
    neighborhood set for an extravagant lifestyle, with comfortable homes and the best
    of amenities. It is distinctively located close to the core center of Lagos high life - from
    prestigious shopping malls, upscale restaurants and international hotels, to an array
    of other attractions. hence why it is exclusively reserved for the reputable elites.
    <br /><br />

    The property boasts of 2 units of 4 Bedroom Semi Detached apartments and 2 units of
    4 Bedroom Fully Detached apartment. Note that each unit is accompanied with 2 BQ. <br />
    <br />

    Jasmine Villas is an Eight (8) unit Oasis development in the heart of Ikoyi, Lagos.  <br /><br />
    
    It comprises Four (4) fully detached units and Four Semi-Detached units with attached dual Servant's quarters for each unit. <br /><br />
    
    The development is packed with amenities within each unit, alongside a communal pool and deck
    `,
    address: "Ikoyi, Lagos.",
    features: [
      {
        name: "Affluent Neighbourhood",
        icon: GlobeAltIcon,
      },
      {
        name: "Good Road",
        icon: ScaleIcon,
      },
      {
        name: "Ample Parking Space",
        icon: LightningBoltIcon,
      },
      {
        name: "Private Cinema",
        icon: AnnotationIcon,
      },
    ],
    faqData: [
      {
        question: "WHERE IS JASMINE VILLA LOCATED",
        answer:
          "Jasmine Villa is located in the unique and serene area of Mcdonald’s road, Ikoyi.",
      },
      {
        question: "Who is the Developer of the Jasmine Villa",
        answer:
          "Fountain Havens Nig Limited; a leading player in the Nigerian real estate sector is the developer of The Jasmine Villa.",
      },
      {
        question: "What Title does the Jasmine Villa have?",
        answer: "Lagos State Certificate of Occupancy",
      },
      {
        question: "What form of Apartments are at the Jasmine Villa?",
        answer:
          "FIVE BEDROOM DETACHED DUPLEX with two maid quarters, Four Bedroom Semi Detached Duplex with Two Maids Quarter",
      },
      {
        question: "What are the facilities available at the Jasmine Villa?",
        answer: [
          "CCTV & PABX",
          "24/7 Security",
          "24 hours uninterrupted power",
          "Fitted kitchen",
          "Terrace spaces",
          "Smart home technology",
          "Gym",
          "In built cinema system",
          "Elevator",
          "swimming pool",
          "High speed internet access",
          "Ample parking space",
        ],
      },
      {
        question: "What is the initial deposit?",
        answer: "30% of the price of the unit.",
      },
      {
        question: "What do i get after my initial deposit?",
        answer:
          "You get a Fountain Haven starter pack containing a offer letter, a receipt for the payment of the initial deposit, and the contract of sale agreement once payment has been confirmed.",
      },
      {
        question: "What do i get after completing all payments?",
        answer:
          "Once all payments due are completed, you get your receipts as well as a Provisional Letter of Allocation upon request.",
      },

      {
        question:
          "What other payments do I need to make after payment for the apartment? ",
        answer: `Legal fee: 5% of the purchase price; 
    Service charge: to be determined on handing over of unit to the owner`,
      },

      {
        question: "What is the payment structure?",
        answer:
          "See flyer for details but for more information contact info@fountainhavens.com",
      },

      {
        question:
          "What are the notable landmarks surrounding the Integrity Tower",
        answer: [
          "Ikoyi Baptist Church",
          "4 Bourdillon",
          "Our Saviors School",
          "Corona Primary School, Ikoyi",
        ],
      },
    ],
    galleryData: [
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655691166/Jasmine%20Villa/DETACHED_-_THIRD_FLOOR_s43kpi.jpg",
        caption: "Detached - Third Floor",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655691164/Jasmine%20Villa/AERIAL_3_x65etb.jpg",
        caption: "Aerial",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655691150/Jasmine%20Villa/4_Family_Lounge_t5fjtj.jpg",
        caption: "Family Lounge 3",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655691143/Jasmine%20Villa/SEMI_DETACHED_-_GROUND_FLOOR_AXO_ft3jld.jpg",
        caption: "SEMI_DETACHED_-_GROUND_FLOOR_AXO",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655691137/Jasmine%20Villa/1_Living_hbrolj.jpg",
        caption: "Living",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655691125/Jasmine%20Villa/Terrace_mqgvoc.jpg",
        caption: "Terrace",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655691123/Jasmine%20Villa/5_Bedroom_ityjsg.jpg",
        caption: "Bedroom",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655691123/Jasmine%20Villa/2_Living_d8z60l.jpg",
        caption: "Living",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655691101/Jasmine%20Villa/SEMI-DETACHED_1_niapir.jpg",
        caption: "Semi-detached",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655691094/Jasmine%20Villa/DETACHED_1_da9veq.jpg",
        caption: "Detached",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655690979/Jasmine%20Villa/SEMI-DETACHED_UNIT_lmayrc.jpg",
        caption: "Semi-detached Unit",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655690966/Jasmine%20Villa/DETACHED_UNIT_t7hpai.jpg",
        caption: "detached Unit",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655690961/Jasmine%20Villa/12_Cinema_qqzzgf.jpg",
        caption: "Cinema",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655690959/Jasmine%20Villa/11_Gym_hgmyib.jpg",
        caption: "Gym",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655690952/Jasmine%20Villa/3_Kitchen_yc5vnb.jpg",
        caption: "Kitched",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655690947/Jasmine%20Villa/STREET_VIEW_1_mi1ucs.jpg",
        caption: "Street View 1",
      },
      {
        image:
          "https://res.cloudinary.com/sleekcodes/image/upload/v1655690947/Jasmine%20Villa/STREET_VIEW_2_zvmv03.jpg",
        caption: "Street View 2",
      },
    ],
    neighbourhood: [
      "Ikoyi Baptist Church",
      "4 Bourdillon",
      "Our Saviors School",
      "Corona Primary School, Ikoyi",
    ],
  },
];

export const ProjectDetailsPage = () => {
  const { id } = useParams();
  const getProjectByID = () => {
    return projects.find((project) => project.id === id);
  };
  const project = getProjectByID();
  const {
    name,
    description,
    address,
    features,
    faqData,
    galleryData,
    neighbourhood,
  } = project;

  return (
    <GeneralTemplate
      header={
        <PaddedContainer>
          <Navbar />
        </PaddedContainer>
      }
      footer={<Footer />}
    >
      <Wrapper>
        {/* <div
          className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
          style={{ paddingTop: "42.857143%" }}
        >
          <iframe
            title="havens"
            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
            allowfullscreen=""
            data-gtm-yt-inspected-2340190_699="true"
            id="240632615"
          ></iframe>
        </div> */}
        {/* <video className="w-full shadow-lg" autoplay loop muted>
          <source
            src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
            type="video/mp4"
          />
        </video> */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to invest?</span>
              <span className="block text-blue-900">
                Contact Us or Schedule an Inspection.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                {/* <a
                  href="tel: +2347025050012"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700"
                >
                  Instant Call
                </a> */}
                <CalendlyButton
                  text="Schedule a Call"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700"
                  url="https://calendly.com/realruona/15min"
                />
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  to="/schedule-inspection"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50"
                >
                  Schedule Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase">
                Project Details
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {name}
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {address}
              </p>
            </div>
          </div>
        </div>

        <div className="pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectGallery data={galleryData} />
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tab
              data={[
                {
                  title: "Description",
                  content: (
                    <ProjectDescriptionTab
                      name={name}
                      description={description}
                      neighbourhood={neighbourhood}
                    />
                  ),
                },
                {
                  title: "Features",
                  content: <FeaturesTab data={features} />,
                },
                { title: "Pricing", content: <PricingTab /> },
                { title: "Location", content: <Map /> },

                {
                  title: "FAQ",
                  content: <FaqTab data={faqData} />,
                },
              ]}
            />
          </div>
        </div>
      </Wrapper>
    </GeneralTemplate>
  );
};
