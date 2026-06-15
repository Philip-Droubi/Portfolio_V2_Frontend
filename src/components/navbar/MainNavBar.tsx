import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import PLogo from "@/assets/images/Logo/p_logo.png";
import { getDir } from "@/utils/functions";
import { t } from "i18next";
import MobileNavMenu from "./MobileNavMenu";
import MobileMenuButton from "./MobileMenuButton";
import { useCursor } from "@/context/CursorContext";

export default function MainNavbar() {
  const ref = useRef<HTMLDivElement>(null);
  const { registerZone, unregisterZone } = useCursor();

  useEffect(() => {
    registerZone(ref.current);
    return () => unregisterZone(ref.current);
  }, [registerZone, unregisterZone]);

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: t("aboutMe"),
      href: "#about",
    },
    {
      label: t("education"),
      href: "#education-skills",
    },
    {
      label: t("projects"),
      href: "#projects",
    },
    {
      label: t("contact"),
      href: "#contact",
    },
  ];

  return (
    <header
      ref={ref}
      dir={getDir()}
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        bg-mobile-navbar/90
        border-b border-white/10
      "
    >
      <div
        className="
          max-w-330 mx-auto
          h-18
          px-5 md:px-8
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <NavLink to="/" end>
          <div className="group flex items-center gap-3 cursor-pointer">
            <div
              className="
                border-3 border-primary
                rounded-xl
                p-1
                transition-all duration-300
                group-hover:shadow-[0_0_10px_var(--color-secondary)]
              "
            >
              <img
                src={PLogo}
                alt="Philip Droubi"
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="">
              <h1
                className="text-title font-bold text-lg tracking-wide">
                Philip Droubi
              </h1>

              <p className="text-xs text-description">Software Engineer</p>
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                relative
                py-2

                text-text
                font-medium

                transition-all duration-300

                hover:text-secondary

                after:absolute
                after:left-1/2
                after:-translate-x-1/2
                after:bottom-0

                after:h-0.5
                after:w-0

                after:bg-secondary

                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Mobile Navigation */}
      <MobileNavMenu isOpen={isOpen} navItems={navItems} setIsOpen={setIsOpen} />
    </header>
  );
}