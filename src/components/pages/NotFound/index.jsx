import React from "react";
import { Text } from "../../atoms";
import { MainNav } from "../../organisms";
import { GeneralTemplate } from "../../templates";

export const NotFound = () => {
  return (
    <GeneralTemplate header={<MainNav />} footer={<></>}>
      <Text>Error 404</Text>
    </GeneralTemplate>
  );
};
