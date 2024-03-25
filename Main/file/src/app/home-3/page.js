import AboutSectionThree from "@/components/AboutSectionThree";
import BlogSectionThree from "@/components/BlogSectionThree";
import CounterSectionThree from "@/components/CounterSectionThree";
import FAQSectionThree from "@/components/FAQSectionThree";
import FooterSectionThree from "@/components/FooterSectionThree";
import HeaderThree from "@/components/HeaderThree";
import NewsSectionTwo from "@/components/NewsSectionTwo";
import PriceSectionTwo from "@/components/PriceSectionTwo";
import ProjectSectionThree from "@/components/ProjectSectionThree";
import ServiceSectionThree from "@/components/ServiceSectionThree";
import SliderThree from "@/components/SliderThree";
import TeamSectionTwo from "@/components/TeamSectionTwo";
import TestimonialSectionThree from "@/components/TestimonialSectionThree";
import Animation from "@/elements/Animation";
import Preloader from "@/elements/Preloader";
import { Fragment } from "react";

export const metadata = {
  title: "Home || FaconTech - IT Technology and IT Solutions React Template",
  description:
    "FaconTech is an awesome IT Technology and IT Solutions HTML Template. This template was made with the latest Bootstrap and Sass.",
};

export default function Page() {
  return (
    <Fragment>
      {/* Preloader */}
      <Preloader />

      {/* Animation init */}
      <Animation />
      {/* Header Three */}
      <HeaderThree />
      {/* Slider Three */}
      <SliderThree />
      {/* About Section Three */}
      <AboutSectionThree />
      {/* Service Section Three */}
      <ServiceSectionThree />
      {/* FAQ Section Three */}
      <FAQSectionThree />
      {/* Project Section Three */}
      <ProjectSectionThree />
      {/* Counter Section Three */}
      <CounterSectionThree />
      {/* Testimonial Section Three */}
      <TestimonialSectionThree />
      {/* Price Section Two */}
      <PriceSectionTwo />
      {/* Team Section Two */}
      <TeamSectionTwo />
      {/* Blog Section Three */}
      <BlogSectionThree />
      {/* News Section Two */}
      <NewsSectionTwo />
      {/* Footer Section Three */}
      <FooterSectionThree />
    </Fragment>
  );
}
