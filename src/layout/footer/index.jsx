import Image from "next/image";
import KlpLogo from "@/assets/images/klp-logo.png";
import Facebook from "@/assets/svg/facebook.svg";
import Instagram from "@/assets/svg/instagram.svg";
import Tiktok from "@/assets/svg/tiktok.svg";
import Twitter from "@/assets/svg/x.svg";
import XiaoHongShu from "@/assets/svg/xiaohongshu.svg";
import Youtube from "@/assets/svg/youtube.svg";

import { Button, Col, Row } from "react-bootstrap";
import useWindowWidth from "@/hook/useWindowWidth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Translations from "@/utils/Translations";

export default function Footer() {
  const { isMobileView } = useWindowWidth();
  const router = useRouter();
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  const footerList = [
    {
      label: "NEWS",
      linkRedirect: "/news",
    },
    {
      label: "SCHEDULE",
      linkRedirect: "/schedule",
    },
    {
      label: "MOVIE",
      linkRedirect: "/movie",
    },
    {
      label: "MEMBER",
      linkRedirect: "/member",
    },
    {
      label: "STORE",
      linkRedirect: "/store",
    },
    {
      label: "Q&A",
      linkRedirect: "/qna",
    },
  ];

  return (
    <footer className="main-footer-container">
      <div className="d-flex justify-content-between align-items-center">
        <Image src={KlpLogo} width={100} height={140} />
        <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-end gap-3">
            <Image src={Instagram} width={21} height={21} />
            <Image src={Youtube} width={21} height={21} />
            <Image src={Facebook} width={21} height={21} />
            <Image src={Twitter} width={21} height={21} />
            <Image src={Tiktok} width={21} height={21} />
            <Image src={XiaoHongShu} width={21} height={21} />
          </div>

          <div className="d-flex gap-2">
            <Button className="--yellow-btn">
              <Translations text="JOIN" />
            </Button>
            <Button className="--yellow-btn">
              <Translations text="LOGIN" />
            </Button>
          </div>

          <ul className="footer-list">
            {footerList.map((item, index) => (
              <li
                className=""
                key={index}
                onClick={() => router.push(item.linkRedirect)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
