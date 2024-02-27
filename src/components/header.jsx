import correctImg from "../assets/correct.png";
import info from "../assets/info.png";
import dropDown from "../assets/dd.png";

const Header = () => {
  return (
    <header className="header">
      <h1>Best Website builders in the US</h1>
      <div className="header-info">
        <div className="info">
          <div>
            <img src={correctImg} alt="correct" />
            <p>Last Updated - February 22, 2020</p>
          </div>
          <div>
            <img src={info} alt="info" />
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div className="top-relevant">
          <p>Top Relevant</p>
          <img src={dropDown} alt="drop-down" />
        </div>
      </div>
      <div className="tools">
        <ul>
          <li>Tools</li>
          <li>AWS Builder</li>
          <li>Start Build</li>
          <li>Build Supplies</li>
          <li>Tooling</li>
          <li>BlueHosting</li>
        </ul>
      </div>
      <div className="hosting">
        <p>Home</p>
        <span className="greater-than">&gt;</span>
        <p>Hosting for all</p>
        <span className="greater-than">&gt;</span>
        <p>Hosting</p>
        <span className="greater-than">&gt;</span>
        <p>Hosting6</p>
        <span className="greater-than">&gt;</span>
        <p>Hosting5</p>
      </div>
    </header>
  );
};

export default Header;
