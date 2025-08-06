"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: React.ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 50,
      delay: 0,
    });
  }, []);

  return <>{children}</>;
}
