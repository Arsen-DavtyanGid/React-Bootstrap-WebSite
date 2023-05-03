function Section3(props) {
  return (
    <section className="Section3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section3-img"></div>
          </div>
          <div className="col-lg-6">
            <div className="section3-content">
              <div className="section3-content-text1">Always Go futher</div>
              <div className="section3-content-text2">
                Decline Cornelia as you wish! Black, dark grey, white, light
                grey, prussian blue ... Choose your colour, size and
                characteristics! And if that's not enough, personalise it to
                make it unique, in your own image. So open up the field of
                possibilities, the world is yours !
              </div>
              <div className="section3-content-mouse-flex">
                <div className="section3-content-icon">
                  <img src={props.mouse} alt="mouse" />
                </div>
                <div className="section3-content-icon-text">
                  SCROLL TO KNOW MORE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section3;
