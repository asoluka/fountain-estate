import React from "react";
import styled from "styled-components";
import { GeneralTemplate } from "../../templates";
import { screen } from "../../../theme";
import { MainNav } from "../../organisms";
import Footer from "../../organisms/Footer";
import heroBackground from "../../../assets/imgs/aerial_view.jpg";

const PaddedContainer = styled.div`
  padding: 0 80px;

  @media only screen and (${screen.lg}) {
    padding: 0 10px;
  }
`;

const HeroImageSection = styled.section`
  background-image: url(${heroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 45vh;
`;

export const AboutPage = () => {
  return (
    <GeneralTemplate
      header={
        <PaddedContainer>
          <MainNav padding="20px 0" showCallButton={true} />
        </PaddedContainer>
      }
      footer={<Footer />}
    >
      <HeroImageSection />

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase">
              About
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Fountain Havens
            </p>
            <p className="mt-4 max-w-2xl text-l text-gray-500 lg:mx-auto">
              Fountain Havens Limited is an independent real estate brand
              committed to offering a change to the luxury living landscape by
              creating diversity through our ultra-modern house types designed
              and executed by insightful professionals who place emphasis on
              stability, functionality, aesthetics, buildability, quality, time
              and cost in a bid to satisfying the needs of our customers.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="max-w-7xl mx-auto mb-20 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
            <div className="mb-6 lg:col-start-2 lg:col-end-4 shadow-2xl">
              <img
                className="h-full"
                src="../../../assets/imgs/street_view_2.jpg"
                alt="Construction"
              />
            </div>
            <div className="lg:col-start-4 lg:col-end-7">
              <p className="pb-6">
                At the Fountain Havens great care is placed on the longevity of
                our construction which we ensure with the use of quality
                materials, skilled artisans, as well as cutting edge techniques
                in achieving unparalleled detail and finesse in our Finish!
              </p>

              <p>
                Our projects have a reputation for setting standards for success
                in their respective markets and product types. Over and above
                financial returns, they improve cities and pioneer new
                sustainable practices. Combining insights from local teams,
                decades of experience and a commitment to long-term value
                creation, we craft sophisticated structures designed by the best
                of industry professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="px-4">
        <section className="max-w-7xl mx-auto mb-20 text-gray-700">
          <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
            <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase">
              Meet
            </h2>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Team</h3>
            <p className="mb-6 pb-2 md:mb-12 md:pb-0">
              We believe in what people believe of homes they want to own: A
              place of abode where connectedness and rapport with family are
              guaranteed through harmony and the related function of its spaces
              in delivering satisfaction, wellness, happiness, joy and
              fulfilment. The level of our involvement makes us different, Come
              Join the Family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[1, 2, 3].map((elem) => {
              return (
                <div>
                  <div className="block rounded-lg shadow-lg bg-white">
                    <div
                      className="overflow-hidden rounded-t-lg h-28"
                      style={{ backgroundColor: "#030f51" }}
                    ></div>
                    <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                        alt=""
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-2xl font-semibold mb-4">John Doe</h4>
                      <p className="mt-4">Head of Sales</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div> */}

      <div className="px-4">
        <section className="max-w-7xl mx-auto mb-20 text-gray-700">
          <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
            <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase">
              Hear
            </h2>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              What our Clients have to Say
            </h3>
            <p className="mb-6 pb-2 md:mb-12 md:pb-0">
              See messages from our satisfied clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[1, 2, 3].map((elem) => {
              return (
                <div>
                  <div className="block rounded-lg shadow-lg bg-white">
                    <div className="p-6">
                      <p className="mt-4">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="quote-left"
                          className="w-6 pr-2 inline-block"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                          ></path>
                        </svg>
                        Lorem ipsum dolor sit amet eos adipisci, consectetur
                        adipisicing elit.
                      </p>
                      <h5 className="text-2xl mb-4 pt-6">John Doe</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </GeneralTemplate>
  );
};
