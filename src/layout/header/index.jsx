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

  return <header className="header-container"></header>;
}
