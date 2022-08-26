import React, { useState } from "react";
import SecondPage from "./SecondPage/SecondPage";
import Firstpage from "./StartingPage/Firstpage";

function App() {
  const [data, setData] = useState(false);

  const nextPage = () => {
    setData(true);
  };

  const PreviousPage = () => {
    setData(false);
  };

  return (
    <React.Fragment>
      {!data && <Firstpage getNextPageData={nextPage} />}
      {data && <SecondPage prevPageData={PreviousPage} />}
    </React.Fragment>
  );
}

export default App;
