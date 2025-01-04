import dynamic from "next/dynamic";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useWindowWidth from "@/hook/useWindowWidth";
import { toastError, toastSuccess } from "@/utils/utils";
import Header from "./header";

function MainLayout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isMobileView, mdBreakPoint } = useWindowWidth();

  return (
    <div className="main-app">
      <Header />
      <div className="content-section">{children}</div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(MainLayout), { ssr: false });
