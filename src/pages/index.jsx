import Image from "next/image";
import KlpBanner from "@/assets/images/klp-banner.png";

// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "@/layout";

const Home = () => {
  return (
    <MainLayout>
      <Image src={KlpBanner} className="klp-banner-img" />
    </MainLayout>
  );
};

export default Home;
