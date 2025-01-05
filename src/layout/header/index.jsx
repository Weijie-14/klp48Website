import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";

import useWindowWidth from "@/hook/useWindowWidth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Translations from "@/utils/Translations";

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
          <Button className="--secondary-btn">
            <Translations text="JOIN" />
          </Button>
          <Button className="--tertiary-btn">
            <Translations text="LOGIN" />
          </Button>
        </div>

        <div className="d-flex justify-content-end align-items-center gap-3">
          <Button className="--orange-burger-menu">
            <div className="d-flex flex-column align-items-center gap-1">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
