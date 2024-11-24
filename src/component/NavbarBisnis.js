import { Link } from "react-router-dom";
import rmolindeks from "../img/rmol_indeks.png"
import { GoSearch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";

function NavbarBisnis () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <div className="wadah_navbar">
            <div className="margin_kanankiri">
                <div className="wadah_content_navbar">
                        <div className="wadah_content_navandham">
                            <Row>
                                <Col xl={11} lg={11} md={11} sm={11} xs={11}>
                                    <Link>
                                        <img src={rmolindeks} className="logo_navbar_img" />
                                    </Link>
                                </Col>
                                <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                    <GiHamburgerMenu className="icon_hamburger_navbar" onClick={toggleMenu} />
                                </Col>
                            </Row>
                        </div>
                    <div className="wadah_menu_navbar">
                        <div className={`wadah_menu_navbar_2 ${isMenuOpen ? 'wadah_menu_navbar_2_open' : ''}`}>
                            <div className="link_close">
                                <span onClick={closeMenu}>CLOSE</span>
                            </div>
                            <Link to="/" className="menu_link_navbar margin_right_menu">HOME</Link>
                            <Link to="/politik" className="menu_link_navbar margin_right_menu">POLITIK</Link>
                            <Link to="/bisnis" className="menu_link_navbar margin_right_menu menu_link_navbar_indeks">BISNIS</Link>
                            <Link to="/tekno" className="menu_link_navbar margin_right_menu">TEKNO</Link>
                            <Link to="/nusantara" className="menu_link_navbar margin_right_menu">NUSANTARA</Link>
                            <Link to="/dunia" className="menu_link_navbar margin_right_menu">DUNIA</Link>
                            <Link to="/hukum" className="menu_link_navbar margin_right_menu">HUKUM</Link>
                            <Link to="/bawaslu" className="menu_link_navbar margin_right_menu">BAWASLU</Link>
                            <Link to="/publika" className="menu_link_navbar margin_right_menu">PUBLIKA</Link>
                            <Link to="/olahraga" className="menu_link_navbar margin_right_menu">OLAHRAGA</Link>
                            <Link to="/pertahanan" className="menu_link_navbar margin_right_menu">PERTAHANAN</Link>
                        </div>
                    </div>
                    <div className="wadah_iklan_navbar">
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                                <div className="wadah_content_iklan margin_right_iklan margin_top_iklan">
                                    <span>IKLAN DI SINI</span>
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} s={12}>
                                <div className="wadah_content_iklan margin_left_iklan">
                                    <span>IKLAN DI SINI</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarBisnis;