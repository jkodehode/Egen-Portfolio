import RunBtn from "./images/RunBtn.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerBox">
          <div className="rightSide">
            <div className="rightTop">
              <div className="longRed">LONG RED</div>
              <button className="RunBtn">
                <img src={RunBtn} alt="" />
              </button>
            </div>

            <div className="rightBottom">RIGHT</div>
          </div>

          <div className="leftSide">
            <nav>
              <button>KONTAKT</button>
            </nav>
          </div>
        </div>
      </div>

      <ThemeSwitcher />
    </>
  );
}

function ThemeSwitcher() {
  return (
    <>
      <div className="switchBox">
        <div className="colorSwitch">colorswitch</div>
      </div>
    </>
  );
}

export default Header;
