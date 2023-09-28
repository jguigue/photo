import PropTypes from "prop-types";
import { LightgalleryItem } from "react-lightgallery";

const GalleryItem = ({ data }) => {
    return (
        <div className="single-portfolio">
            <LightgalleryItem
                group="any"
                src={process.env.PUBLIC_URL + data.url}
            >
                <div className="thumbnail">
                    <div className="overlay">
                        <img
                            src={process.env.PUBLIC_URL + data.url}
                            alt="data"
                        />
                    </div>
                </div>
            </LightgalleryItem>
        </div>
    );
};

GalleryItem.propTypes = {
    data: PropTypes.object,
};

export default GalleryItem;
