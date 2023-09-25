import AOS from "aos";
import "aos/dist/aos.css";
import "lightgallery.js/dist/css/lightgallery.css";
import { useEffect } from "react";
import "react-modal-video/scss/modal-video.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
// CSS File Here
import "./assets/css/elegantIcons.css";
import "./assets/css/icofont.css";
import "./assets/scss/style.scss";
import NavScrollTop from "./components/nav-scroll-top";
import HomePage from "./pages/index";
import Portfolio from "./pages/portfolio";
import VideoGallery from "./pages/video-gallery";
import PortfolioDetails from "./templates/galerie";

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: "ease",
        });
        AOS.refresh();
    }, []);
    return (
        <Router>
            <NavScrollTop>
                <Switch>
                    <Route
                        path={`${process.env.PUBLIC_URL + "/"}`}
                        exact
                        component={HomePage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/portfolio"}`}
                        component={Portfolio}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/video-gallery"}`}
                        component={VideoGallery}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/galerie/:id"}`}
                        component={PortfolioDetails}
                    />
                </Switch>
            </NavScrollTop>
        </Router>
    );
};

export default App;
