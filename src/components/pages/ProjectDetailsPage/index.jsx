import React from "react";
import { Text } from "../../atoms";
import { MainNav } from "../../organisms";
import { GeneralTemplate } from "../../templates";

export const ProjectDetailsPage = () => {
  return (
    <GeneralTemplate header={<MainNav />} footer={<></>}>
      <Text>Project Details Page</Text>
    </GeneralTemplate>
  );
};
