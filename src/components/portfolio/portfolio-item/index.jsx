import PropTypes from "prop-types";
import { LightgalleryItem } from "react-lightgallery";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="single-portfolio">
            <Link to={process.env.PUBLIC_URL + `/galerie/${portfolio.id}`}>
                <LightgalleryItem
                    group="any"
                    src={process.env.PUBLIC_URL + `/galerie/${portfolio.id}`}
                >
                    <div className="thumbnail">
                        <div className="overlay">
                            <img
                                src={
                                    process.env.PUBLIC_URL + portfolio.homeImage
                                }
                                alt="portfolio"
                            />
                        </div>
                    </div>
                </LightgalleryItem>
            </Link>
            <div className="content">
                <h3 className="title">
                    <Link
                        to={process.env.PUBLIC_URL + `/galerie/${portfolio.id}`}
                    >
                        {portfolio.title}
                    </Link>
                </h3>
                <p className="desc">{portfolio.excerpt}</p>
            </div>
        </div>
    );
};

PortfolioItem.propTypes = {
    portfolio: PropTypes.object,
};

export default PortfolioItem;
