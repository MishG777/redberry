import React, { useState, useEffect } from "react";
import SecondPage from "./SecondPage/SecondPage";
import Firstpage from "./StartingPage/Firstpage";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    const storedInfoPage = localStorage.getItem("stayOnPage");

    if (storedInfoPage === "1") {
      setData(true);
    }
  }, []);

  const nextPage = () => {
    localStorage.setItem("stayOnPage", "1");
    setData(true);
  };

  const PreviousPage = () => {
    setData(false);
  };

  return (
    <React.Fragment>
      {!data && <Firstpage getNextPageData={nextPage} />}
      {data && <SecondPage prevPageData={PreviousPage} data={data} />}
    </React.Fragment>
  );
}

export default App;
