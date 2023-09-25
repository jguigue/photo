import FooterLogo from "../../components/footer-logo";

const Footer = () => {
    return (
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="footer-content">
                            <div className="widget-item col">
                                <div className="widget-footer-nav">
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="https://louisguigue.com">
                                                    Mon portfolio
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="widget-item text-center col">
                                <div className="about-widget">
                                    <FooterLogo
                                        image={`${process.env.PUBLIC_URL}/img/LogoPhoto_blanc.svg`}
                                    />
                                </div>
                                <div className="widget-copyright">
                                    <p>
                                        {" "}
                                        © 2023 <span>Louis Julien Guigue</span>.
                                        Made with{" "}
                                        <i className="icofont-heart-alt"></i>{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="widget-item col text-right">
                                <ul className="widget-social">
                                    <li className="social-text">
                                        <span>me suivre</span>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/julien-guigue-92976615b/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
