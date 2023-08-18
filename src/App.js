import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { useState } from "react";

function App() {
  function getInitialLocale() {
    // Getting stored items
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  const handleLocaleChange = (e) => {
    setCurrentLocale(e.target.value);
    // Store local  in the local storage
    localStorage.setItem("locale", e.target.value);
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className="App">
        <Header
          currentLocale={currentLocale}
          handleLocaleChange={handleLocaleChange}
        />
        <Content />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
