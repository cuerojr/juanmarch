import { gsap } from "gsap";
import { FC, useCallback, useEffect, useRef } from "react";
import Image from "next/image"
import { NavItem } from "./item";
import Link from "next/link";
import { useGlobal } from "@/lib/store";

type Props = {
  open?: boolean;
  items: any[];
};

export const Menu: FC<Props> = ({ open = false, items = [] }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useGlobal((s) => [s.isMenuOpen, s.setIsMenuOpen]);
  const toggle = useCallback(() => setOpen(!open), [setOpen, open]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const childs = gsap.utils.toArray(container.childNodes);

    let tl: gsap.core.Timeline;

    if (open) {
      tl = gsap
        .timeline()
        .to(container, {
          yPercent: 0,
          duration: 1.2,
          ease: "expo",
          overwrite: true,
          onStart: () => {
            gsap.set(container, { visibility: "visible" });
          },
        })
        .to(childs, { autoAlpha: 1, stagger: 0.1 }, "<25%")
        .from(childs, { y: -20, stagger: 0.1 }, "<");
    } else {
      tl = gsap
        .timeline()
        .to(childs, { autoAlpha: 0 })
        .to(
          container,
          {
            yPercent: -100,
            duration: 0.75,
            ease: "expo",
            overwrite: true,
            onComplete: () => {
              gsap.set(container, { visibility: "hidden" });
            },
          },
          "<"
        );
    }

    return () => {
      tl.kill();
    };
  }, [open]);

  return (
    <nav
      className="w-full h-dvh bg-primary text-primary-foreground flex flex-col gap-12 text-5xl items-center justify-center fixed top-0 left-0 invisible"
      ref={ref}
    >
      {/* {items.map((item) => (
        <NavItem key={item.id} href={`/${item.uid === 'home' ? '' : item.uid}`}>
          {item.title}
        </NavItem>
      ))} */}
      <div className="wrapper h-screen flex items-center relative">
        <div className="w-screen grid grid-cols-12 gap-2 text-slate-100">
          <button className="absolute top-[4vw] right-[6.5vw]" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x h-[1rem] w-[1rem] text-slate-100"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <ul className="images h-[30vw] overflow-hidden hidden sm:block col-start-3 col-end-6">
            <li className="image-item">
              <Image
                src="/city.webp"
                width="1228"
                height="1736"
                alt="exo ape contact 2"
                loading="lazy"
                sizes="(max-width: 1024px) 440px, (max-width: 1280px) 600px, 1000px"
                className="image h-[100%]"
              />
            </li>
            <li className="image-item">
              <img
                src="https://a.storyblok.com/f/133769/1228x1736/04269767aa/contact-1.jpg/m/1000x1414/filters:quality(90)"
                width="1228"
                height="1736"
                alt="ronald gijezen exo ape digital designer"
                loading="lazy"
                sizes="(max-width: 1024px) 440px, (max-width: 1280px) 600px, 1000px"
                className="image hidden"
              />
            </li>
            <li className="image-item">
              <img
                src="https://a.storyblok.com/f/133769/1228x1736/c65fc16fc9/contact-3.jpg/m/1000x1414/filters:quality(90)"
                width="1228"
                height="1736"
                alt="awwwards exo ape news"
                loading="lazy"
                sizes="(max-width: 1024px) 440px, (max-width: 1280px) 600px, 1000px"
                className="image hidden"
              />
            </li>
            <li className="image-item">
              <Image
                src="/dancer.webp"
                width="1228"
                height="1736"
                alt="rob smittenaar exo ape contact"
                loading="lazy"
                sizes="(max-width: 1024px) 440px, (max-width: 1280px) 600px, 1000px"
                className="image hidden"
              />
            </li>
          </ul>
          <ul className="main col-start-2 col-end-11 mx-auto sm:col-start-7 sm:col-end-11 sm:text-4xl text-[15vw] italic sm:not-italic">
            <li className="main-link">
              <Link href="/" className="main-line">
                Home
              </Link>
            </li>
            <li className="main-link">
              <Link href="/works" className="main-line">
                Works
              </Link>
            </li>
            <li className="main-link">
              <Link href="/contact" className="main-line is-current is-active">
                Contact
              </Link>
            </li>
            <li className="main-link">
              <Link href="/studio" className="main-line is-current is-active">
                Studio
              </Link>
            </li>
            <div className="current">
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-star h-[.8vw] w-[.8vw]"
              >
                <path
                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </ul>
          <a
            href="mailto:info@studiocristal.com"
            target="_blank"
            className="link absolute bottom-[5vw] right-[5vw] text-xs"
          >
            <div className="wrap flex items-center">
              <div className="circle">
                <div className="circle-fill"></div>
                <svg
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="circle-outline h-[.8vw] w-[.8vw]"
                >
                  <circle cx="25" cy="25" r="23"></circle>
                </svg>
                <div className="circle-icon">
                  <svg
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-arrow h-[.8vw] w-[.8vw]"
                  >
                    <path
                      d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="label">
                Now Hiring!
                <div className="border"></div>
              </div>
            </div>
          </a>
          <ul className="social col-start-2 col-end-11 sm:col-start-8 sm:col-end-11 hidden">
            <li className="social-link">
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noreferrer"
                className="link-item"
              >
                Behance
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noreferrer"
                className="link-item"
              >
                Dribbble
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="link-item"
              >
                Twitter
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="link-item"
              >
                Instagram
              </a>
            </li>
          </ul>
          <ul className="sub absolute bottom-[5vw] left-[5vw] text-xs">
            <li className="sub-link">
              <button className="link-item is-reel">Play Reel</button>
            </li>
            <li className="sub-link">
              <a href="/story" className="link-item">
                Our Story
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
