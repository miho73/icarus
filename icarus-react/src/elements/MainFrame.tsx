import React from "react";
import Header from "./frame/header/Header";
import Preflight from "./preflight/Preflight";

function MainFrame() {
  const [currentTab, setCurrentTab] = React.useState<number>(0);

  return (
    <>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      <main>
        {currentTab === 0 &&
          <Preflight/>
        }
      </main>
    </>
  )
}

export default MainFrame;
