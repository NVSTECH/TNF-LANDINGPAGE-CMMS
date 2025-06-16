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
import React from "react";
import { useParallax } from "react-scroll-parallax";
import SectionTitle from "../global/SectionTitle";
import SectionWrapper from "../global/SectionWrapper";

type UserData = {
  name: string;
  background: StaticImageData;
  avatar?: StaticImageData;
};

const usersData: UserData[] = [
  { name: "", background: TNF3 },
  { name: "Intuitive CRM", background: TNF10 },
  { name: "Live Tracking", background: User3 },
  { name: "Invoice Handling", background: User4 },
  { name: "Analytics dashbord", background: User5 },
  { name: "Live Tracking", background: User3 },
];

function reverseArray<IData>(array: IData[]): IData[] {
  const result: IData[] = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = array[array.length - 1 - i] as IData;
  }
  return result;
}

function UserCard(props: { user: UserData }) {
  const { user } = props;
  return (
    <div
      className={cn(
        "flex h-[250px] w-[250px] flex-col items-center rounded-[31px] p-10 relative overflow-hidden",
        "sm:h-[350px] sm:w-[350px]",
        "lg:h-[400px] lg:w-[500px]",
        user.avatar ? "justify-center" : "justify-end"
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={user.background}
          alt={user.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 250px, (max-width: 1024px) 350px, 500px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20" />
      </div>
      {user.avatar ? (
        <div className="flex flex-col place-items-center relative z-10">
          <Image src={user.avatar} alt={user.name} width={120} />
          <h2
            className={cn(
              "text-center text-xl bg-gradient-to-b from-blue-light to-blue-dark bg-clip-text text-transparent",
              poppinsBold.className
            )}
          >
            {user.name}
          </h2>
        </div>
      ) : (
        <h2
          className={cn(
            "text-center text-xl bg-gradient-to-b from-blue-light to-blue-dark bg-clip-text text-transparent relative z-10",
            poppinsBold.className
          )}
        >
          {user.name}
        </h2>
      )}
    </div>
  );
}

function Row1() {
  const { ref } = useParallax({
    translateX: ["-50%", "0"],
  });
  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className="grid transform grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-4"
    >
      {usersData.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}

function Row2() {
  const { ref } = useParallax({
    translateX: ["0", "-50%"],
  });
  const reversedArray = reverseArray<UserData>(usersData);
  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className="grid transform grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-4"
    >
      {reversedArray.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}

export default function Communities() {
  return (
    <SectionWrapper className="bg-white" noContainer>
      <div className="flex flex-col gap-28 overflow-hidden">
        <SectionTitle
          title="Join your favorite creators and communities"
          description="Start conversations and engage in discussion threads that feel personal and contextual."
          gradient="bg-gradient-to-b from-blue-light to-blue-dark"
        />
        <div className="flex rotate-6 transform flex-col gap-4 py-24">
          <Row1 />
          <Row2 />
        </div>
      </div>
    </SectionWrapper>
  );
}
