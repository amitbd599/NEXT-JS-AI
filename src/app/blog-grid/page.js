import BlogGridSection from "@/components/BlogGridSection";
import Breadcrumb from "@/components/Breadcrumb";
import FooterSectionOne from "@/components/FooterSectionOne";
import HeaderOne from "@/components/HeaderOne";
import NewsSectionOne from "@/components/NewsSectionOne";
import Animation from "@/elements/Animation";
import Preloader from "@/elements/Preloader";
import { Fragment } from "react";

export const metadata = {
  title:
    "Blog Grid || FaconTech - IT Technology and IT Solutions React Template",
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
      {/* Breadcrumb */}
      <Breadcrumb data={"Blog Grid"} />
      {/* Blog Grid */}
      <BlogGridSection />
      {/* News Section One */}
      <NewsSectionOne />
      {/* Footer Section */}
      <FooterSectionOne />
    </Fragment>
  );
}
