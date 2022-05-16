import React from "react";
import BulletList from "../../../../organisms/BulletList";

export const ProjectDescriptionTab = () => {
  return (
    <div>
      <div className="mt-6 mb-6">
        <h2 className="md:text-base font-semibold mb-2">
          About Integrity Towers
        </h2>
        <p className="w-full lg:w-4/6">
          To create a contemporary landmark, you must reimagine, redefine and
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
          Come join the family.
        </p>
      </div>

      <div className="mt-6 mb-6">
        <h2 className="md:text-base font-semibold mb-2">Neighbourhood</h2>
        <BulletList
          type="square"
          data={[
            "IMAX Cinema",
            "Evercare Hospital",
            "Lekki Coliseum",
            "Lekki British School",
            "Rock Montessori School",
            "Blu Atlantic Hotel",
          ]}
        />
      </div>
    </div>
  );
};
