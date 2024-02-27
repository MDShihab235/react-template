import more from "../assets/drop.png";

const Footer = () => {
  return (
    <footer>
      <div className="category">
        <h4>CATEGORIES</h4>
        <ul>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>
      <div className="contact">
        <h4>CONTACT</h4>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li> Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div className="countries">
        <p>United States</p>
        <img src={more} alt="more" />
      </div>
    </footer>
  );
};

export default Footer;
