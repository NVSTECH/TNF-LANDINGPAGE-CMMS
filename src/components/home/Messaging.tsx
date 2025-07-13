import Avatar1 from "@/assets/message-user-1.jpg";
import Avatar2 from "@/assets/message-user-2.jpg";
import Avatar3 from "@/assets/message-user-3.jpg";
import TNF9 from "@/assets/newUi/3.jpg";
import MobileWireFrame from "@/assets/mobile-wireframe-thick.png";
import { poppinsBold } from "@/fonts";
import { cn } from "@/lib/utils";
import { type AppProps } from "@/types";
import Image, { type StaticImageData } from "next/image";
import { Fade } from "react-reveal";
import SectionTitle from "../global/SectionTitle";
import SectionWrapper from "../global/SectionWrapper";

function CardWrapper(props: AppProps & { className: string }) {
  const { children, className } = props;
  return (
    <div
      className={cn(
        className,
        "rounded-[20px] p-8 shadow-[0_20px_40px_rgba(116,202,255,.2)]"
      )}
    >
      {children}
    </div>
  );
}

function LeftCard() {
  return (
    <CardWrapper className="flex w-full flex-col gap-11">
      <Fade>
        <h2
          className={cn(
            "mx-auto text-3xl leading-[1.3em] md:mx-0 md:text-5xl",
            poppinsBold.className
          )}
        >
          Downtime isn&apos;t an
          <br />
          option.
        </h2>
      </Fade>
      <div className="relative mx-auto h-[650px] w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-auto z-[2] h-[30%] bg-[linear-gradient(rgba(29,30,30,0),#fff)]" />
        <div className="relative w-full">
          <Image
            src={MobileWireFrame}
            className="w-full"
            alt="Mobile wire frame"
          />
          <div className="absolute bottom-[2.3%] left-[4.9%] right-[4.9%] top-[2.3%] -z-[1] overflow-hidden ">
            <Image
              src={TNF9}
              alt="Starter image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* Full stars */}
      {Array(fullStars).fill(0).map((_, index) => (
        <svg
          key={`full-${index}`}
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      
      {/* Half star */}
      {hasHalfStar && (
        <svg
          className="w-4 h-4 text-yellow-400"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-star)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
          <path
            fill="rgb(156, 163, 175)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}
      
      {/* Empty stars */}
      {Array(emptyStars).fill(0).map((_, index) => (
        <svg
          key={`empty-${index}`}
          className="w-4 h-4 text-gray-300 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

type Message = {
  name: string;
  title: string;
  text: string;
  rating: number;
  jobsCompleted: number;
  avatar: StaticImageData;
};

const messages: Message[] = [
  {
    name: "Alex Martinez",
    title: "Network Engineer",
    text: "Senior Network Engineer specializing in enterprise infrastructure and cybersecurity protocols. Experienced in managing complex network architectures and implementing secure communication systems.",
    rating: 5,
    jobsCompleted: 8,
    avatar: Avatar1,
  },
  {
    name: "Sarah Chen",
    title: "Frontend Developer",
    text: "Frontend Developer with expertise in React, TypeScript, and modern web technologies. Passionate about creating responsive user interfaces and optimizing web performance.",
    rating: 4.5,
    jobsCompleted: 7,
    avatar: Avatar2,
  },
  {
    name: "Mike Johnson",
    title: "DevOps Engineer",
    text: "DevOps Engineer focused on cloud architecture and automated deployment pipelines. Skilled in containerization, CI/CD processes, and infrastructure as code.",
    rating: 4,
    jobsCompleted: 6,
    avatar: Avatar3,
  },
  {
    name: "Lisa Thompson",
    title: "UX/UI Designer",
    text: "UX/UI Designer creating intuitive user experiences and responsive design systems. Specialized in user research, prototyping, and accessibility-focused design solutions.",
    rating: 5,
    jobsCompleted: 7,
    avatar: Avatar1,
  },
];

function SingleMessage(props: { message: Message }) {
  const { message } = props;
  return (
    <Fade>
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="h-[50px] w-[50px] overflow-hidden rounded-full flex-shrink-0">
            <Image
              src={message.avatar.src}
              width={message.avatar.width}
              height={message.avatar.height}
              alt={message.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className={cn("text-lg font-semibold text-gray-900", poppinsBold.className)}>
                {message.name}
              </h3>
              <span className="text-sm text-gray-500 font-medium">
                {message.title}
              </span>
            </div>
            
            <div className="flex items-center gap-3 mb-3">
              <StarRating rating={message.rating} />
              <span className="text-sm text-gray-600 font-medium">
                {message.jobsCompleted}+ jobs completed
              </span>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {message.text}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

function RightCard() {
  return (
    <CardWrapper className="flex w-full flex-col gap-6 md:max-w-[530px]">
      <Fade>
        <h2 className={cn("text-5xl", poppinsBold.className)}>
         Feature List
        </h2>
      </Fade>
      <div className="relative flex flex-col gap-3">
        {messages.map((message, index) => (
          <SingleMessage key={index} message={message} />
        ))}
        <div className="absolute bottom-0 left-0 right-0 top-auto z-[2] h-[30%]" />
      </div>
    </CardWrapper>
  );
}

export default function Messaging() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-14">
        <SectionTitle
          title="24/7 Automated Dispatch to Vetted Technicians"
          gradient="bg-gradient-to-b from-blue-light to-blue-dark"
        />
        <div className="flex flex-col items-stretch justify-center gap-[36px] md:flex-row">
          <LeftCard />
          <RightCard />
        </div>
      </div>
    </SectionWrapper>
  );
}

