import React from "react";

import SlingShotLanding from "../component/Hero";
import PartnerMarquee from "../component/PartnerMarquee";
import { partnerLogos } from "../utils/logos";

const Home: React.FC = () => {
  return (
    <div>
      <SlingShotLanding />
      <PartnerMarquee logos={partnerLogos} speed={30} />
    </div>
  );
};

export default Home;
