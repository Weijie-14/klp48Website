import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";

import useWindowWidth from "@/hook/useWindowWidth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const { isMobileView } = useWindowWidth();
  const router = useRouter();
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  // const checkScroll = () => {
  //   if (window.scrollY > 0) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", checkScroll);
  //   return () => {
  //     window.removeEventListener("scroll", checkScroll);
  //   };
  // }, []);

  return (
    <header className="main-header-container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center gap-3">
          <label className="_tertiary-text --size-12">awdada</label>
          <label className="_tertiary-text --size-12">awddada</label>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3">
          <label className="_secondary-text --size-12">awdada</label>
          <label className="_secondary-text --size-12">awdada</label>
        </div>
      </div>
    </header>
  );
}
