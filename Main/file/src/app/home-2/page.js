import AboutSectionTwo from "@/components/AboutSectionTwo";
import BlogSectionTwo from "@/components/BlogSectionTwo";
import CounterSectionTwo from "@/components/CounterSectionTwo";
import FAQSectionTwo from "@/components/FAQSectionTwo";
import FooterSectionTwo from "@/components/FooterSectionTwo";
import HeaderTwo from "@/components/HeaderTwo";
import ProjectSectionTwo from "@/components/ProjectSectionTwo";
import ServiceSectionTwo from "@/components/ServiceSectionTwo";
import SliderTwo from "@/components/SliderTwo";
import TestimonialSectionTwo from "@/components/TestimonialSectionTwo";
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
      <HeaderTwo />
      {/* Slider Two */}
      <SliderTwo />
      {/* About Section Two */}
      <AboutSectionTwo />
      {/* Service Section Two */}
      <ServiceSectionTwo />
      {/* Counter Section Two */}
      <CounterSectionTwo />
      {/* FAQ Section Two */}
      <FAQSectionTwo />
      {/* Testimonial Section Two */}
      <TestimonialSectionTwo />
      {/* Project Section Two */}
      <ProjectSectionTwo />
      {/* Blog Section Two */}
      <BlogSectionTwo />
      {/* Footer Section Two */}
      <FooterSectionTwo />
    </Fragment>
  );
}
