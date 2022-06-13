import React from "react";
import BulletList from "../../../../organisms/BulletList";
import parse from "html-react-parser";

export const ProjectDescriptionTab = ({ name, description, neighbourhood }) => {
  return (
    <div>
      <div className="mt-6 mb-6">
        <h2 className="md:text-base font-semibold mb-2">{name}</h2>
        <p className="w-full lg:w-4/6">{parse(description)}</p>
      </div>

      <div className="mt-6 mb-6">
        <h2 className="md:text-base font-semibold mb-2">Neighbourhood</h2>
        <BulletList type="square" data={neighbourhood} />
      </div>
    </div>
  );
};
