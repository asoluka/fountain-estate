import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { screen } from "../../../theme";
import { MainNav } from "../../organisms";
import Footer from "../../organisms/Footer";
import { GeneralTemplate } from "../../templates";

const PaddedContainer = styled.div`
  padding: 0 80px;

  @media only screen and (${screen.lg}) {
    padding: 0 50px;
  }
`;

const ScheduleInspectionPage = () => {
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(false);
  const [error, setError] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rsy1twm",
        "template_3ek2lzg",
        form.current,
        "sAmiHIwYK25nl4Ui8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmissionStatus(true);
        },
        (error) => {
          setError(error.text);
        }
      );
  };

  return (
    <GeneralTemplate
      header={
        <PaddedContainer>
          <MainNav padding="20px 0" showCallButton={true} />
        </PaddedContainer>
      }
      footer={<Footer />}
    >
      <div className="flex justify-center my-12 max-w-7xl mx-auto mb-20 text-gray-700">
        <div className="w-6/6 md:w-3/6 block p-6 rounded-lg lg:shadow-md bg-white py-6 lg:py-12">
          <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Schedule An Inspection
            </h3>
            {formSubmissionStatus && (
              <p className="text-sm text-green-700 pb-6">
                Thank you for your interest in our offer. <br /> A
                representative will be in touch.
              </p>
            )}

            {error && <p className="text-sm text-red-700 pb-6">{error}</p>}
          </div>
          {!formSubmissionStatus && (
            <form className="w-full" ref={form} onSubmit={sendEmail}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="tel"
                  className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="telephone"
                  name="telephone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-900 text-white font-medium text-base leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Create Schedule
              </button>
            </form>
          )}
        </div>
      </div>
    </GeneralTemplate>
  );
};

export default ScheduleInspectionPage;
