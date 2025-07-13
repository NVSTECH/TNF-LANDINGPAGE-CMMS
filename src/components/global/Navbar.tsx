import Logo from "@/assets/logo.png";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { type AppProps } from "@/types";
import { IconMenu2 } from "@tabler/icons-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

function NavLink(props: AppProps & { href: string }) {
  const { children, href } = props;
  return (
    <li className={cn("py-4", "lg:py-0")}>
      <a
        href={href}
        className={cn(
          "text-lg text-black-light hover:text-black-dark",
          "lg:text-base"
        )}
      >
        {children}
      </a>
    </li>
  );
}

export default function Navbar() {
  const navRef = React.useRef<HTMLElement | null>(null);
  const listNavRef = React.useRef<HTMLUListElement | null>(null);

  const toggleNavBar = () => {
    const listNav = listNavRef.current;
    listNav?.classList.toggle("!translate-y-0");
    document.body.classList.toggle("overflow-y-hidden");
  };

  return (
    <nav
      ref={navRef}
      className="sticky left-0 top-0 z-10 flex h-16 place-items-center border border-b-gray-light bg-white/80 px-4 py-2 filter backdrop-blur-sm md:h-20 md:px-10 md:py-6"
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={Logo as StaticImageData} 
                alt="Logo" 
                width={120} 
                height={35}
                className="h-8 w-auto md:h-10"
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
          <ul
            ref={listNavRef}
            className={cn(
              "fixed left-0 top-16 z-10 h-auto w-full -translate-y-[120%] bg-white p-4 shadow-sm duration-200 md:top-20",
              "lg:relative lg:left-0 lg:top-0 lg:flex lg:w-auto lg:translate-y-0 lg:items-center lg:justify-between lg:gap-8 lg:bg-transparent lg:shadow-none"
            )}
          >
            <NavLink href="#">Technicians</NavLink>
            <NavLink href="#">Facility Managers</NavLink>
            <NavLink href="#">Guide</NavLink>
            <NavLink href="#">Docs</NavLink>
            <NavLink href="#">Contact Us</NavLink>
          </ul>
          <div className="z-10 lg:hidden">
            <button aria-label="Toggle navbar button" onClick={toggleNavBar}>
              <IconMenu2 stroke={1.5} />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}