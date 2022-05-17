import React from "react";

const FeaturesTab = ({ data }) => {
  return (
    <div className="mt-10 flex gap-4 lg:justify-between mb-12">
      {data.map((feature) => (
        <div
          key={feature.name}
          className="w-1/3 md:w-1/6 flex flex-col items-center"
        >
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
            <feature.icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="md:text-lg text-center leading-6 font-medium text-gray-900">
            {feature.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesTab;
