import img from "../assets/img.png";
import dropDown from "../assets/dd.png";
import star from "../assets/star.png";
import best from "../assets/trcup.png";
import value from "../assets/dm.png";

const Service = () => {
  return (
    <main>
      <section className="service-section">
        <div className="best-choice">
          <img src={best} alt="best" />
          <p>Best Choice</p>
        </div>
        <p>1</p>
        <div className="service-container">
          <div className="img-section">
            <img src={img} alt="image" />
            <p className="img-name">Builder 1</p>
          </div>
          <div className="content">
            <p>
              <span>WixPro 72-Inch Responsive Website Builder-</span>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
            <h3>Main highlights</h3>
            <p>
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
            <div>
              <p>Show More</p>
              <img src={dropDown} alt="drop-down" />
            </div>
          </div>
          <div className="rating-section">
            <div className="ratings">
              <p>9.8</p>
              <p>Exceptional</p>
              <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
            <button>View</button>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="best-choice">
          <img src={value} alt="best" />
          <p>Best Value</p>
        </div>
        <p>2</p>
        <div className="service-container">
          <div className="img-section">
            <img src={img} alt="image" />
            <p className="img-name">Builder 1</p>
          </div>
          <div className="content">
            <p>
              <span>SiteCraft 68-Inch Ultimate Web Design Studio-</span>
              Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
              Dynamic Websites and E-commerce Platforms (Green/White)
            </p>
            <h3>Main highlights</h3>
            <p>
              [What You Get]: Gain access to the SiteCraft design studio,
              featuring a robust selection of design elements, SEO optimization
              tools, and e-commerce integrations.
            </p>
            <div>
              <p>Show More</p>
              <img src={dropDown} alt="drop-down" />
            </div>
          </div>
          <div className="rating-section">
            <div className="ratings">
              <p>9.5</p>
              <p>Exceptional</p>
              <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
            <button>View</button>
          </div>
        </div>
      </section>
      <section className="service-section">
        <p>3</p>
        <div className="service-container">
          <div className="img-section">
            <img src={img} alt="image" />
            <p className="img-name">Builder 1</p>
          </div>
          <div className="content">
            <p>
              <span>SiteCraft 68-Inch Ultimate Web Design Studio-</span>
              Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
              Dynamic Websites and E-commerce Platforms (Green/White)
            </p>
            <h3>Main highlights</h3>
            <p>
              [What You Get]: Gain access to the SiteCraft design studio,
              featuring a robust selection of design elements, SEO optimization
              tools, and e-commerce integrations.
            </p>
            <div>
              <p>Show More</p>
              <img src={dropDown} alt="drop-down" />
            </div>
          </div>
          <div className="rating-section">
            <div className="ratings">
              <p>9.3</p>
              <p>Exceptional</p>
              <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
            <button>View</button>
          </div>
        </div>
      </section>
      <section className="service-section">
        <p>4</p>
        <div className="service-container">
          <div className="img-section">
            <img src={img} alt="image" />
            <p className="img-name">Builder 1</p>
          </div>
          <div className="content">
            <p>
              <span>SiteCraft 68-Inch Ultimate Web Design Studio-</span>
              Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
              Dynamic Websites and E-commerce Platforms (Green/White)
            </p>
            <h3>Main highlights</h3>
            <p className="points">
              <div>
                <p>9.9</p>
                <p>building responsive</p>
              </div>
              <div>
                <p>8.9</p>
                <p>Cool</p>
              </div>
              <div>
                <p>8.9</p>
                <p>Docs</p>
              </div>
            </p>
            <div className="check-points">
              <p>Why we love it </p>
              <div>
                <span>&#10003;</span>
                <p>Documentation</p>
              </div>
              <div>
                <span>&#10003;</span>
                <p>Easy Use</p>
              </div>
              <div>
                <span>&#10003;</span>
                <p>Out of box</p>
              </div>
            </div>
            <div>
              <p>Show More</p>
              <img src={dropDown} alt="drop-down" />
            </div>
          </div>
          <div className="rating-section">
            <div className="ratings">
              <p>9.1</p>
              <p>Exceptional</p>
              <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
            <button>View</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
