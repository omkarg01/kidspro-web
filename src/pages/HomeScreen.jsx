import FeatureDivider from "../components/FeatureDivider";
import Features from "../components/Features";
import SectionDivider from "../components/SectionDivider";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import ProgramScreen from "./ProgramScreen";
import ActivityListScreen from "./ActivityListScreen";
import Gallery2 from "../components/Gallery2";

import GalleryScreen from "./GalleryScreen"

const HomeScreen = () => {
  // const [refresh, setRefresh] = useState(true);

  // useEffect(() => {
  //   if (refresh) {
  //     // Perform any logic or data fetching needed before the refresh
  //     window.location.reload()

  //     // Reset the refresh state to prevent further refreshes
  //     setRefresh(false);
  //   }
  // }, [refresh]);
  return (
    <>
      <Slider></Slider>
      {/* <FeatureDivider></FeatureDivider> */}
      {/* <SectionDivider></SectionDivider> */}
      {/* <ProgramScreeen></ProgramScreeen> */}
      <ProgramScreen></ProgramScreen>
      <ActivityListScreen></ActivityListScreen>
      <GalleryScreen></GalleryScreen>
      <Features></Features>
      <Testimonials></Testimonials>
    </>
  );
};

export default HomeScreen;
