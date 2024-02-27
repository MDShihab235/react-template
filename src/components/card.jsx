import img from "../assets/img.png";

const Cards = () => {
  return (
    <div className="cards-section">
      <h2>Related deals you might like for</h2>
      <div className="cards">
        <div className="service-card">
          <img src={img} alt="service" />
          <div>
            <p className="off">20% Off</p>
            <p className="off">Limited time </p>
          </div>
          <h3>Webbuilder 1</h3>
          <p>Computer Modern clasic with wix support</p>
          <div className="price">
            <p>$39.96</p>
            <p>$49.96</p>
            <p>(20% Off)</p>
          </div>
          <button>View Deal</button>
        </div>
        <div className="service-card">
          <img src={img} alt="service" />
          <div>
            <p className="off">20% Off</p>
            <p className="off">Limited time </p>
          </div>
          <h3>Webbuilder 1</h3>
          <p>Computer Modern clasic with wix support</p>
          <div className="price">
            <p>$39.96</p>
            <p>$49.96</p>
            <p>(20% Off)</p>
          </div>
          <button>View Deal</button>
        </div>
        <div className="service-card">
          <img src={img} alt="service" />
          <div>
            <p className="off">20% Off</p>
            <p className="off">Limited time </p>
          </div>
          <h3>Webbuilder 1</h3>
          <p>Computer Modern clasic with wix support</p>
          <div className="price">
            <p>$39.96</p>
            <p>$49.96</p>
            <p>(20% Off)</p>
          </div>
          <button>View Deal</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
