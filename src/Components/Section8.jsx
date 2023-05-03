function Section8(props) {
  return (
    <section className="Section8">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section8-content">
              <div className="section8-content-icon">
                <img src={props.appstore} alt="appstore" />
              </div>
              <div className="section8-content-text1">Unicorns exist</div>
              <div className="section8-content-text2">
                Download our appliaction on the AppStore or the 3D model of
                Cornelia and meet your new mascot ! Take some cool pictures of
                her and share it on Instagram, Twitter and Facebook with
                #CorneliaTheUnicorn !
              </div>
              <div className="section8-content-btn">
                <button>Meet Cornelia in VR</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section8-content-img"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section8;
