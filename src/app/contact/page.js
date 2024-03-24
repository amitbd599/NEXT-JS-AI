import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import FooterSectionOne from "@/components/FooterSectionOne";
import HeaderOne from "@/components/HeaderOne";
import NewsSectionOne from "@/components/NewsSectionOne";
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
      <Breadcrumb data={"Contact"} />
      {/* Contact Section */}
      <ContactSection />
      {/* News Section One */}
      <NewsSectionOne />
      {/* Footer Section */}
      <FooterSectionOne />
    </Fragment>
  );
}