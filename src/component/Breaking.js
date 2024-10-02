import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PreviewArrow from "./PreviewArrow";
import { IoLogoApple } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTikTok } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";


function Breaking () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PreviewArrow />,
        appendDots: dots => (
            <div style={{display: 'none'}}> 
                
            </div>
        )
    };

    return (
        <div className="wadah_breaking">
            <div className="margin_kanankiri">
                <div className="wadah_content_breaking">
                    <Row>
                        <Col xl={9} lg={9} md={9}>
                            <div className="wadah_content_breaking_2">
                                <Row>
                                    <Col xl={3} lg={3} md={3}>
                                        <div className="button_breaking_news">Breaking Newss:</div>
                                    </Col>
                                    <Col xl={9} lg={9} md={9}>
                                        <Slider {...settings}>
                                            <div className="breaking-news-item">               
                                                <Link to="#" className="link_breaking_news">
                                                    <span className="content_breaking_news">Politikus Demokrat Ingin Walikota Jakarta Dipilih Lewat Pilkada</span>
                                                </Link>
                                            </div>
                                            <div className="breaking-news-item">               
                                                <Link to="#" className="link_breaking_news">
                                                    <span className="content_breaking_news">Bambang Pacul Soroti Kasus Pembunuhan Haniyah di Batang</span>
                                                </Link>
                                            </div>
                                            <div className="breaking-news-item">               
                                                <Link to="#" className="link_breaking_news">
                                                    <span className="content_breaking_news">Judol Masih Marak Selama Tak Ada Kesepahaman  Penanganan</span>
                                                </Link>
                                            </div>
                                        </Slider>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3}>
                            <p className="date_now">Selasa, 06 Agustus 2024</p>
                            <div className="wadah_icon_medsos">
                                <Link to="#" className="icon_medos">
                                    <IoLogoFacebook />
                                </Link>
                                <Link to="#" className="icon_medos">
                                    <AiOutlineTikTok className="margin_medsos" />
                                </Link>
                                <Link to="#" className="icon_medos">
                                    <IoLogoInstagram />
                                </Link>
                                <Link to="#" className="icon_medos">
                                    <FaYoutube className="margin_medsos" />
                                </Link>
                                <Link to="#" className="icon_medos">
                                    <IoLogoLinkedin  />
                                </Link>
                                <Link to="#" className="icon_medos">
                                    <IoLogoAndroid className="margin_medsos" />   
                                </Link>
                                <Link to="#" className="icon_medos">
                                    <IoLogoApple />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Breaking;