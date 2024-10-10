import "./style.css";
import { useState } from "react";
import MusicPageMenu from "./pages/music/page";
import MainPageMenu from "./pages/main/page";
const Menu = ({openHaneler,isopen}) => {
  const [isMuiscPage, setIsMusicPage] = useState(true);
  const muiscHandele = () => {
    setIsMusicPage(!isMuiscPage);
  };
  return (
    <>
      <div onClick={openHaneler} className={`full-page-menu ${isopen ? "close-full-page" : null}`}></div>
      <div className={`menu-full ${isopen?"close-menu":null}`}>
        <div className="head-menu">
          <span className="material-symbols-outlined">account_circle</span>
          <h2>Hello, sign in</h2>
        </div>
        {isMuiscPage ? (
          <MainPageMenu
            muiscHandele={muiscHandele}
          />
        ) : (
          <MusicPageMenu changeHandele={()=>setIsMusicPage(!isMuiscPage)} />
        )}
      </div>
    </>
  );
};
export default Menu;
