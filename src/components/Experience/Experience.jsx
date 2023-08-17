import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./Experience.scss";
import Card from "../Card/Card";
const Experience = () => {
  return (
    <div>
      <ContentWrapper>
        <div>Employement History </div>
        <div className="empHistory">
          <Card
            year={"2022"}
            month={"Nov"}
            company={"Infocodec Solutions Pvt. Ltd."}
            Project={"Property Insights"}
          />
          <Card
            year={"2021"}
            month={"Sept"}
            company={"Cognizant Technology Solutions Pvt. Ltd."}
            Project={"Life Science Web Developement"}
          />
          <Card
            year={"2021"}
            month={"Feb"}
            company={"Cognizant Technology Solutions Pvt. Ltd."}
            Project={"Resource Mangement"}
          />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Experience;
