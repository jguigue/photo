import PropTypes from "prop-types";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Link } from "react-router-dom";
import useMasonry from "../../hooks/use-masonry-gallery";
import GalerieItem from "../../components/portfolio/galerie-item";

const PortfolioDetailsContainer = ({ data }) => {
    const cate = data.categories.map((value, idx) => {
        return (
            <span className="d-inline" key={idx}>
                {value}
                {idx !== data.categories.length - 1 && " , "}
            </span>
        );
    });

    const GalleryData = data.gallery;
    console.log(GalleryData);
    const { categories } = useMasonry(
        GalleryData,
        ".portfolio-list",
        ".masonry-grid",
        ".messonry-button",
        ".messonry-button button"
    );

    return (
        <div className="portfolio-area portfolio-single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content">
                            <div className="content" data-aos="fade-up">
                                <p className="category">{cate}</p>
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
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3 portfolio-list mb-n30">
                        <LightgalleryProvider>
                            <div className="col resizer"></div>

                            {GalleryData.map((data) => {
                                return (
                                    <div
                                        key={data.id}
                                        // eslint-disable-next-line react/no-unknown-property
                                        group={`any`}
                                        className={"col masonry-grid mb-30"}
                                    >
                                        <GalerieItem data={data} />
                                    </div>
                                );
                            })}
                        </LightgalleryProvider>
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
