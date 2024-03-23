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
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
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
