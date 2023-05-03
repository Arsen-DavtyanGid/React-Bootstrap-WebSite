function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-content">
              <div className="footer-content-text1">
                Get started with Cornelia today
              </div>
              <div className="footer-sections">
                <div className="footer-section1">
                  <div className="footer-section1-icon">
                    <img src={props.figma} alt="figma" />
                  </div>
                  <div className="footer-section1-text">Download for Figma</div>
                </div>
                <div className="footer-section2">
                  <div className="footer-section2-icon">
                    <img src={props.diamond} alt="diamond" />
                  </div>
                  <div className="footer-section1-text">
                    Download for Sketch
                  </div>
                </div>
              </div>
              <div className="footer-content-text2">Cornelia</div>
              <div className="footer-content-text3">Design & Development</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
