import "@/scss/style.scss";
import { Provider } from "react-redux";
import store from "@/store";

// i18next Translation
import { appWithTranslation } from "next-i18next";

// Toastify for notification
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

// PrimeProvider
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <Provider store={store}>
        <Component {...pageProps} />;
        <ToastContainer />
      </Provider>
    </PrimeReactProvider>
  );
}
