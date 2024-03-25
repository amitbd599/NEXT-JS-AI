import AboutSectionOne from "@/components/AboutSectionOne";
import BlogSectionOne from "@/components/BlogSectionOne";
import CounterSectionOne from "@/components/CounterSectionOne";
import FAQSectionOne from "@/components/FAQSectionOne";
import FooterSectionOne from "@/components/FooterSectionOne";
import HeaderOne from "@/components/HeaderOne";
import NewsSectionOne from "@/components/NewsSectionOne";
import PriceSectionOne from "@/components/PriceSectionOne";
import ProjectSectionOne from "@/components/ProjectSectionOne";
import ServiceSectionOne from "@/components/ServiceSectionOne";
import SliderOne from "@/components/SliderOne";
import TeamSectionOne from "@/components/TeamSectionOne";
import TestimonialSectionOne from "@/components/TestimonialSectionOne";
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
      {/* Header one */}
      <HeaderOne />
      {/* slider One */}
      <SliderOne />
      {/* About Section One */}
      <AboutSectionOne />
      {/* Service Section One */}
      <ServiceSectionOne />
      {/* FAQ Section One */}
      <FAQSectionOne />
      {/* Project Section One */}
      <ProjectSectionOne />
      {/* Team Section One */}
      <TeamSectionOne />
      {/* Counter Section One */}
      <CounterSectionOne />
      {/* Price Section One */}
      <PriceSectionOne />
      {/* Testimonial Section One */}
      <TestimonialSectionOne />
      {/* Blog Section One */}
      <BlogSectionOne />
      {/* News Section One */}
      <NewsSectionOne />
      {/* Footer Section One */}
      <FooterSectionOne />
    </Fragment>
  );
}
