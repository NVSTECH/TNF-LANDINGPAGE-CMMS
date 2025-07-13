import TNF6 from "@/assets/newUi/3.jpg";
import TNF5 from "@/assets/newUi/4.jpg";
import TNF7 from "@/assets/newUi/1.jpg";
import TNF8 from "@/assets/newUi/2.jpg";
import MobileWireFrame from "@/assets/mobile-wireframe-thin.png";
import Image, { type StaticImageData } from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import { useParallax } from "react-scroll-parallax";
import SectionTitle from "../global/SectionTitle";
import SectionWrapper from "../global/SectionWrapper";
import { Container } from "../layout/Container";

type CardProps = {
  starterImage: StaticImageData;
  endImage: StaticImageData;
  description: string;
};

function Card(props: CardProps) {
  const { description, endImage, starterImage } = props;
  const [opacity, setOpacity] = React.useState(1);
  const { ref } = useParallax<HTMLImageElement>({
    onProgressChange(progress) {
      if (progress >= 0.4) setOpacity(0);
      else setOpacity(1);
    },
  });
  return (
    <Fade bottom distance="30px">
      <div className="flex w-full max-w-lg flex-col gap-12 rounded-[20px] p-8 shadow-[0_20px_40px_rgba(0,0,0,.05)]">
        <div className="relative mx-auto h-[640px] w-full max-w-md overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 top-auto z-[2] h-[30%] bg-[linear-gradient(rgba(29,30,30,0),#fff)]" />
          <div className="relative w-full">
            <Image
              src={MobileWireFrame}
              className="w-full"
              alt="Mobile wire frame"
            />
            <div className="absolute bottom-[35px] left-[36px] right-[36px] top-[35px] -z-[1] overflow-hidden">
              <div style={{ opacity }} className="duration-200">
                <Image
                  src={starterImage}
                  alt="Starter image"
                  ref={ref}
                  className="absolute -z-10 !h-full w-full overflow-hidden rounded-[40px] object-cover"
                />
              </div>
              <Image
                src={endImage}
                alt="End image"
                className="absolute -z-20 h-full w-full overflow-hidden rounded-[40px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-gray-dark">{description}</h2>
        </div>
      </div>
    </Fade>
  );
}

export default function Payment() {
  return (
    <SectionWrapper className="bg-white" noContainer>
      <div className="flex flex-col">
        <SectionTitle
          title="Your Facility Command Center"
          description="Seamlessly upload your work orders and let our system handle the rest."
          gradient="bg-gradient-to-r from-blue-light to-blue-dark"
        />
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <Card
              description="For urgent needs, let our system instantly assign the best-vetted technician for the job, ensuring the fastest possible response and resolution."
              starterImage={TNF6}
              endImage={TNF5}
            />
            <Card
              description="For more control, open your job to our marketplace. Compare competitive bids and profiles to select the perfect expert for your needs and budget."
              starterImage={TNF7}
              endImage={TNF8}
            />
          </div>
        </Container>
      </div>
    </SectionWrapper>
  );
}
