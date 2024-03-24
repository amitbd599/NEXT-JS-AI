import AboutSectionOne from "@/components/AboutSectionOne";
import Breadcrumb from "@/components/Breadcrumb";
import CounterSectionOne from "@/components/CounterSectionOne";
import FooterSectionOne from "@/components/FooterSectionOne";
import HeaderOne from "@/components/HeaderOne";
import NewsSectionOne from "@/components/NewsSectionOne";
import TestimonialSectionOne from "@/components/TestimonialSectionOne";
import { Fragment } from "react";

export const metadata = {
  title: "About || FaconTech - IT Technology and IT Solutions React Template",
  description:
    "FaconTech is an awesome IT Technology and IT Solutions HTML Template. This template was made with the latest Bootstrap and Sass.",
};

export default function Page() {
  return (
    <Fragment>
      {/* Header one */}
      <HeaderOne />
      {/* Breadcrumb */}
      <Breadcrumb data={"About us"} />
      {/* About Section One */}
      <AboutSectionOne />
      {/* Counter Section One */}
      <CounterSectionOne />
      {/* Testimonial Section One */}
      <TestimonialSectionOne />
      {/* News Section One */}
      <NewsSectionOne />
      {/* Footer Section */}
      <FooterSectionOne />
    </Fragment>
  );
}
