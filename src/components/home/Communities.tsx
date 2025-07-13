import UserAvatar1 from "@/assets/user-1-avatar.png";
import TNF3 from "@/assets/TNF3.png";
import UserAvatar2 from "@/assets/user-2-avatar.png";
import TNF10 from "@/assets/la2.png";
import Starbucks from "@/assets/starbucks.png";
import User3 from "@/assets/la3.png";
import UserAvatar4 from "@/assets/user-4-avatar.png";
import User4 from "@/assets/la4.png";
import UserAvatar5 from "@/assets/user-5-avatar.png";
import User5 from "@/assets/la1.png";
import { poppinsBold } from "@/fonts";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import React, { useState } from "react";
import { useParallax } from "react-scroll-parallax";
import SectionWrapper from "../global/SectionWrapper";

import FeatureImage1 from "@/assets/newUi/calendar2.png"; 
import FeatureImage2 from "@/assets/newUi/vendorassign.png"; 
import FeatureImage3 from "@/assets/newUi/vendorphoto1.png";

// Modal component for displaying enlarged images
function ImageModal(props: {
  image: StaticImageData;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { image, alt, isOpen, onClose } = props;

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div className="relative">
        <Image
          src={image}
          alt={alt}
          className="max-h-[70vh] max-w-[70vw] rounded-lg object-contain"
          onClick={(e) => e.stopPropagation()}
          style={{ width: 'auto', height: 'auto' }}
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 rounded-full bg-white bg-opacity-90 p-2 text-gray-600 hover:text-gray-800 hover:bg-opacity-100 shadow-lg transition-all duration-200"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}


// New component for the feature sections
function FeatureSection(props: {
  image: StaticImageData;
  title: string;
  description: string;
  imageOnLeft?: boolean;
}) {
  const { image, title, description, imageOnLeft = true } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center gap-8 md:gap-12",
          imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        <div className="w-full md:w-4/6">
          <div
            className="cursor-zoom-in transition-transform duration-300 hover:scale-105"
            onClick={handleImageClick}
          >
            <Image
              src={image}
              alt={title}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className={cn("text-3xl text-black-dark", poppinsBold.className)}>
            {title}
          </h2>
          <p className={cn("mt-4 text-base text-gray-600")}>
            {description}
          </p>
        </div>
      </div>
      <ImageModal
        image={image}
        alt={title}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default function Communities() {
  return (
    <SectionWrapper className="bg-white" noContainer>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          <FeatureSection
            image={FeatureImage3}
            title="Your Time, Your Trade, Your Way"
            description="Claim jobs on your own schedule and make the most of your trade. Whether you're filling gaps in your calendar or managing a full workload, TNF helps you do what you love and succeed your way."
            imageOnLeft={true}
          />
          <FeatureSection
            image={FeatureImage1}
            title="Streamline Your Workflow"
            description="Our AI-powered CMMS goes beyond standard tools by automating your entire workflow. From an intelligent CRM to live tracking and automated invoicing, our platform handles the administrative overhead so you can boost productivity and focus purely on your trade."
            imageOnLeft={false}
          />
        <FeatureSection
            image={FeatureImage2}
            title="Your Experts, On the Map"
            description="As a vetted member of our network, you are showcased on the live map for clients to see. This visibility makes you a primary candidate for every job posted nearby, creating a constant stream of local work."
            imageOnLeft={true}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

