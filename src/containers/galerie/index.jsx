import PropTypes from "prop-types";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Link } from "react-router-dom";

const PortfolioDetailsContainer = ({ data }) => {
    const cate = data.categories.map((value, idx) => {
        return (
            <span className="d-inline" key={idx}>
                {value}
                {idx !== data.categories.length - 1 && " , "}
            </span>
        );
    });
    return (
        <div className="portfolio-area portfolio-single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content">
                            <div className="content" data-aos="fade-up">
                                <p className="category">{cate}</p>
                                <h3 className="title">{data.title}</h3>
                            </div>
                            <div className="portfolio-info">
                                <div className="row">
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                    >
                                        <div className="info-item">
                                            <span>Lieu</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.client,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <div className="info-item">
                                            <span>Date</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.date,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay="600"
                                    >
                                        <div className="info-item">
                                            <span>Boitier</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.team,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 col-md-3 col-lg-3"
                                        data-aos="fade-up"
                                        data-aos-delay="900"
                                    >
                                        <div className="info-item style-two">
                                            <span>Objectif(s)</span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: data.services,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="portfolio-content"
                                data-aos="fade-up"
                            >
                                {data.body.map((value, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="content-wrap"
                                            dangerouslySetInnerHTML={{
                                                __html: value,
                                            }}
                                        />
                                    );
                                })}
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        data.pageUrl.link
                                    }
                                >
                                    {data.pageUrl.text}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-area portfolio-default-area">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-2 portfolio-list mb-n30">
                        <LightgalleryProvider>
                            {data.gallery.map((gallery) => {
                                console.log(gallery.id);
                                return (
                                    <div
                                        key={gallery.id}
                                        // eslint-disable-next-line react/no-unknown-property
                                        group={`any`}
                                        className={"col masonry-grid mb-30"}
                                    >
                                        <div className="single-portfolio">
                                            <LightgalleryItem
                                                group="any"
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    gallery.url
                                                }
                                            >
                                                <div className="thumbnail">
                                                    <div className="overlay">
                                                        <img
                                                            src={
                                                                process.env
                                                                    .PUBLIC_URL +
                                                                gallery.url
                                                            }
                                                            alt="portfolio"
                                                        />
                                                    </div>
                                                </div>
                                            </LightgalleryItem>
                                        </div>
                                    </div>
                                );
                            })}
                        </LightgalleryProvider>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <div className="social-icons">
                            <span>Share:</span>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="social_twitter"></i>
                            </a>
                            <a
                                href="https://facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="icofont-facebook"></i>
                            </a>
                            <a
                                href="https://myaccount.google.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="icofont-google-plus"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="icofont-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PortfolioDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default PortfolioDetailsContainer;
