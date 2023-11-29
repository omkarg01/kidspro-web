import React from "react";
import PageTitle from "../components/PageTitle";

const VisionScreen = () => {
  return (
    <>
      <PageTitle title={"Vision"} />

      {/* <!-- Section: About Us --> */}
      <section>
        <div className="container" data-tm-padding-bottom="220px">
          <div className="section-content">
            <div className="row">
              <div className="col-lg-6 col-xl-8">
                <div className="about-box-contents">
                  <div className="destails">
                    <h3 className="text-theme-colored2">
                      Welcome To CandiBrain Preschool
                    </h3>
                    <h4 className="text-theme-colored3 line-bottom">
                      World Best Education In Our Kindergarten
                    </h4>
                    <p>
                      At Candibrain Preschool, our vision is to be at the
                      forefront of early childhood education, recognized for
                      excellence and innovation. We envision a community where
                      children are not just educated but inspired, instilling in
                      them a profound sense of curiosity, resilience, and a
                      passion for discovery.
                    </p>
                    <p>
                      We aspire to create an immersive learning environment that
                      goes beyond traditional boundaries, fostering critical
                      thinking, creativity, and a deep appreciation for
                      diversity.
                    </p>
                    <p>
                      Our vision extends to shaping young minds into confident,
                      compassionate individuals who embrace learning as a
                      lifelong journey, well-prepared to face the challenges of
                      an ever-evolving world. We aim to be a beacon of
                      educational leadership, contributing positively to the
                      growth and development of each child, and leaving an
                      indelible mark on the landscape of early childhood
                      education.
                    </p>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-sm-6">
                    <div className="tm-sc-icon-box icon-box icon-left text-center text-lg-start iconbox-centered-in-responsive iconbox-theme-colored3 animate-icon-on-hover animate-icon-rotate-y mb-30">
                      <div className="icon-box-wrapper">
                        <div className="icon-wrapper">
                          {" "}
                          <a className="icon icon-sm icon-dark icon-circled">
                            {" "}
                            <i className="pe-7s-scissors"></i>{" "}
                          </a>
                        </div>
                        <div className="icon-text">
                          <h5 className="icon-box-title mb-0">
                            Active Learning
                          </h5>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur ipsum
                              dolor sit amet.
                            </p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tm-sc-icon-box icon-box icon-left text-center text-lg-start iconbox-centered-in-responsive iconbox-theme-colored2 animate-icon-on-hover animate-icon-rotate-y mb-30">
                      <div className="icon-box-wrapper">
                        <div className="icon-wrapper">
                          {" "}
                          <a className="icon icon-sm icon-dark icon-circled">
                            {" "}
                            <i className="pe-7s-pen"></i>{" "}
                          </a>
                        </div>
                        <div className="icon-text">
                          <h5 className="icon-box-title mb-0">
                            Funny and Happy
                          </h5>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur ipsum
                              dolor sit amet.
                            </p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tm-sc-icon-box icon-box icon-left text-center text-lg-start iconbox-centered-in-responsive iconbox-theme-colored4 animate-icon-on-hover animate-icon-rotate-y mb-30">
                      <div className="icon-box-wrapper">
                        <div className="icon-wrapper">
                          {" "}
                          <a className="icon icon-sm icon-dark icon-circled">
                            {" "}
                            <i className="pe-7s-phone"></i>{" "}
                          </a>
                        </div>
                        <div className="icon-text">
                          <h5 className="icon-box-title mb-0">
                            Fulfill With Love
                          </h5>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur ipsum
                              dolor sit amet.
                            </p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tm-sc-icon-box icon-box icon-left text-center text-lg-start iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate-y mb-30">
                      <div className="icon-box-wrapper">
                        <div className="icon-wrapper">
                          {" "}
                          <a className="icon icon-sm icon-dark icon-circled">
                            {" "}
                            <i className="pe-7s-light"></i>{" "}
                          </a>
                        </div>
                        <div className="icon-text">
                          <h5 className="icon-box-title mb-0">
                            Expert Teachers
                          </h5>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur ipsum
                              dolor sit amet.
                            </p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="text-center">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="https://html.kodesolution.com/2017/kidspro-html-b5/images/about/6.png"
                      alt="a1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tm-floating-objects">
          <span
            className="z-index-1 bg-img-cover"
            data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/f2.png"
            data-tm-width="100%"
            data-tm-height="143"
            data-tm-top="auto"
            data-tm-bottom="0"
            data-tm-left="0"
            data-tm-right="0"
            data-tm-opacity="-100px"
          ></span>
        </div>
      </section>
    </>
  );
};

export default VisionScreen;
