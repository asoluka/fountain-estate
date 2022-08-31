import { useState } from "react";
import { PopupModal } from "react-calendly";

export const CalendlyButton = ({
  text,
  className,
  url,
  utm,
  prefill,
  pageSettings,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <button
        style={{ display: "block", margin: "0 auto" }}
        onClick={() => setIsOpen(true)}
      >
        {text}
      </button>
      <PopupModal
        url={url}
        pageSettings={pageSettings}
        utm={utm}
        prefill={prefill}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};
