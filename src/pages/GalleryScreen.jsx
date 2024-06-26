import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import GalleryCard from "../components/GalleryCard";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import images from "../components/Data";

import Gallery2 from "../components/Gallery2";

const Gallery = () => {
  // const [gallery, setGallery] = useState([]);
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    const apiUrl =
      "https://api.candibrain.com/api/read-only-gallery/?page_size=100";
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data fetched successfully!", data);
        // You may want to reset the form or handle success in some way
        // setGallery(data.results);
        setImages(data.results);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container className="bordercontainer">
        <Row className="experiment">
          <Col xs={12} lg={12}>
            <Gallery2 images={images} />
          </Col>
        </Row>
      </Container>
    </>
  );

  // return (
  //   <>
  //     {/* <!-- Section: page title --> */}
  //     <PageTitle title={"Gallery"} />

  //     {/* <!-- Our Gallery --> */}
  //     <section>
  //       <div className="container pb-70">
  //         <div class="section-title">
  //           <div class="row justify-content-center">
  //             <div class="col-lg-10 col-xl-9">
  //               <div class="tm-sc-section-title section-title text-center">
  //                 <div class="title-wrapper">
  //                   <h2 class="title">
  //                     Our <span class="text-theme-colored3">Gallery</span>
  //                   </h2>
  //                   <p>
  //                     Step into the heartwarming moments and vibrant experiences
  //                     captured in the CandiBrain Preschool gallery. Our gallery
  //                     is a visual journey showcasing the joy, curiosity, and
  //                     growth of our little learners. It's a testament to the
  //                     lively community we've built, where every snapshot tells a
  //                     story of exploration, creativity, and the bonds formed in
  //                     our nurturing environment.
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="section-content">
  //           <div className="row">
  //             <div className="col-sm-12">
  //               <div className="tm-sc-gallery tm-sc-gallery-grid gallery-style1-basic">
  //                 {/* <!-- Isotope Filter --> */}
  //                 <div
  //                   className="isotope-layout-filter filter-style-3 text-center cat-filter-theme-colored1"
  //                   data-link-with="gallery-holder-743344"
  //                 >
  //                   <Link  className="active" data-filter="*">
  //                     All
  //                   </Link>
  //                   <Link
  //                     // href="#laboratory"
  //                     className=""
  //                     data-filter=".others"
  //                   >
  //                     Infra
  //                   </Link>
  //                   <Link
  //                     // href="#surgery"
  //                     className=""
  //                     data-filter=".fun-activity"
  //                   >
  //                     Activities
  //                   </Link>
  //                   <Link
  //                     // href="#orthopaedics"
  //                     className=""
  //                     data-filter=".sports"
  //                   >
  //                     Outdoor
  //                   </Link>
  //                   <Link
  //                     // href="#orthopaedics"
  //                     className=""
  //                     data-filter=".dance"
  //                   >
  //                     Dance
  //                   </Link>
  //                   <Link
  //                     // href="#orthopaedics"
  //                     className=""
  //                     data-filter=".music"
  //                   >
  //                     Music
  //                   </Link>
  //                 </div>
  //                 {/* <!-- End Isotope Filter --> */}
  //                 {/* <!-- Isotope Gallery Grid --> */}
  //                 <div
  //                   id="gallery-holder-743344"
  //                   className="isotope-layout grid-3 gutter-10 clearfix lightgallery-lightbox"
  //                 >
  //                   <div className="isotope-layout-inner">
  //                     {/* <!-- the loop --> */}
  //                     {/* <!-- Isotope Item Start --> */}
  //                     {/* <GalleryCard data={gallery[0]} /> */}
  //                     {gallery ? (
  //                       gallery.map((each) => <GalleryCard data={each} />)
  //                     ) : (
  //                       <div style={{ textAlign: "center" }}>
  //                         <h1>No Images to show!</h1>
  //                       </div>
  //                     )}
  //                     {/* <!-- Isotope Item End --> */}

  //                     {/* <!-- Isotope Item Start --> */}
  //                     {/* <div className="isotope-item surgery orthopaedics">
  //                       <div className="isotope-item-inner">
  //                         <div className="tm-gallery">
  //                           <div className="tm-gallery-inner">
  //                             <div className="thumb">
  //                               <a href="#">
  //                                 <img
  //                                   src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/2.jpg"
  //                                   className=""
  //                                   alt="images"
  //                                 />
  //                               </a>
  //                             </div>
  //                             <div className="tm-gallery-content-wrapper">
  //                               <div className="tm-gallery-content">
  //                                 <div className="tm-gallery-content-inner">
  //                                   <div className="icons-holder-inner">
  //                                     <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
  //                                       <a
  //                                         className="lightgallery-trigger styled-icons-item"
  //                                         data-exthumbimage="images/shop/portfolio-sq1.jpg"
  //                                         title="photo"
  //                                         href="images/shop/portfolio-sq1.jpg"
  //                                       >
  //                                         <i className="fa fa-plus"></i>
  //                                       </a>
  //                                     </div>
  //                                   </div>
  //                                   <div className="title-holder">
  //                                     <h5 className="title">
  //                                       <a href="#">Demo Gallery 1</a>
  //                                     </h5>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div> */}
  //                     {/* <!-- Isotope Item End --> */}

  //                     {/* <!-- Isotope Item Start --> */}
  //                     {/* <div className="isotope-item laboratory surgery">
  //                       <div className="isotope-item-inner">
  //                         <div className="tm-gallery">
  //                           <div className="tm-gallery-inner">
  //                             <div className="thumb">
  //                               <a href="#">
  //                                 <img
  //                                   src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/3.jpg"
  //                                   className=""
  //                                   alt="images"
  //                                 />
  //                               </a>
  //                             </div>
  //                             <div className="tm-gallery-content-wrapper">
  //                               <div className="tm-gallery-content">
  //                                 <div className="tm-gallery-content-inner">
  //                                   <div className="icons-holder-inner">
  //                                     <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
  //                                       <a
  //                                         className="lightgallery-trigger styled-icons-item"
  //                                         data-exthumbimage="images/shop/portfolio-sq3.jpg"
  //                                         title="photo"
  //                                         href="images/shop/portfolio-sq3.jpg"
  //                                       >
  //                                         <i className="fa fa-plus"></i>
  //                                       </a>
  //                                     </div>
  //                                   </div>
  //                                   <div className="title-holder">
  //                                     <h5 className="title">
  //                                       <a href="#">Demo Gallery 1</a>
  //                                     </h5>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div> */}
  //                     {/* <!-- Isotope Item End --> */}

  //                     {/* <!-- Isotope Item Start --> */}
  //                     {/* <div className="isotope-item laboratory surgery">
  //                       <div className="isotope-item-inner">
  //                         <div className="tm-gallery">
  //                           <div className="tm-gallery-inner">
  //                             <div className="thumb">
  //                               <a href="#">
  //                                 <img
  //                                   src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/4.jpg"
  //                                   className=""
  //                                   alt="images"
  //                                 />
  //                               </a>
  //                             </div>
  //                             <div className="tm-gallery-content-wrapper">
  //                               <div className="tm-gallery-content">
  //                                 <div className="tm-gallery-content-inner">
  //                                   <div className="icons-holder-inner">
  //                                     <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
  //                                       <a
  //                                         className="lightgallery-trigger styled-icons-item"
  //                                         data-exthumbimage="images/shop/portfolio-sq1.jpg"
  //                                         title="photo"
  //                                         href="images/shop/portfolio-sq1.jpg"
  //                                       >
  //                                         <i className="fa fa-plus"></i>
  //                                       </a>
  //                                     </div>
  //                                   </div>
  //                                   <div className="title-holder">
  //                                     <h5 className="title">
  //                                       <a href="#">Demo Gallery 1</a>
  //                                     </h5>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div> */}
  //                     {/* <!-- Isotope Item End --> */}

  //                     {/* <!-- Isotope Item Start --> */}
  //                     {/* <div className="isotope-item laboratory surgery">
  //                       <div className="isotope-item-inner">
  //                         <div className="tm-gallery">
  //                           <div className="tm-gallery-inner">
  //                             <div className="thumb">
  //                               <a href="#">
  //                                 <img
  //                                   src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/5.jpg"
  //                                   className=""
  //                                   alt="images"
  //                                 />
  //                               </a>
  //                             </div>
  //                             <div className="tm-gallery-content-wrapper">
  //                               <div className="tm-gallery-content">
  //                                 <div className="tm-gallery-content-inner">
  //                                   <div className="icons-holder-inner">
  //                                     <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
  //                                       <a
  //                                         className="lightgallery-trigger styled-icons-item"
  //                                         data-exthumbimage="images/shop/portfolio-sq3.jpg"
  //                                         title="photo"
  //                                         href="images/shop/portfolio-sq3.jpg"
  //                                       >
  //                                         <i className="fa fa-plus"></i>
  //                                       </a>
  //                                     </div>
  //                                   </div>
  //                                   <div className="title-holder">
  //                                     <h5 className="title">
  //                                       <a href="#">Demo Gallery 1</a>
  //                                     </h5>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div> */}
  //                     {/* <!-- Isotope Item End --> */}

  //                     {/* <!-- Isotope Item Start --> */}
  //                     {/* <div className="isotope-item laboratory surgery">
  //                       <div className="isotope-item-inner">
  //                         <div className="tm-gallery">
  //                           <div className="tm-gallery-inner">
  //                             <div className="thumb">
  //                               <a href="#">
  //                                 <img
  //                                   src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/6.jpg"
  //                                   className=""
  //                                   alt="images"
  //                                 />
  //                               </a>
  //                             </div>
  //                             <div className="tm-gallery-content-wrapper">
  //                               <div className="tm-gallery-content">
  //                                 <div className="tm-gallery-content-inner">
  //                                   <div className="icons-holder-inner">
  //                                     <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
  //                                       <a
  //                                         className="lightgallery-trigger styled-icons-item"
  //                                         data-exthumbimage="images/shop/portfolio-sq1.jpg"
  //                                         title="photo"
  //                                         href="images/shop/portfolio-sq1.jpg"
  //                                       >
  //                                         <i className="fa fa-plus"></i>
  //                                       </a>
  //                                     </div>
  //                                   </div>
  //                                   <div className="title-holder">
  //                                     <h5 className="title">
  //                                       <a href="#">Demo Gallery 1</a>
  //                                     </h5>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div> */}
  //                     {/* <!-- Isotope Item End --> */}
  //                     {/* <!-- end of the loop --> */}
  //                   </div>
  //                 </div>
  //                 {/* <!-- End Isotope Gallery Grid --> */}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
};

export default Gallery;
