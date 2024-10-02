import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player/youtube'
import NextArrow from "./NextArrow";
import PreviewArrow from "./PreviewArrow";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import foto_berita_one from "../img/foto_berita_one.jpg"
import foto_berita_two from "../img/foto_berita_two.jpg"
import galery_rmol from "../img/galery_rmol.jpg"
import img_foto_1 from "../img/img_foto_1.jpg"
import img_foto_2 from "../img/img_foto_2.jpg"
import img_foto_3 from "../img/img_foto_3.jpeg"
import img_foto_4 from "../img/img_foto_4.jpeg"

function FotoDark () {
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
        <div className="wadah_foto_dark">
            <div className="margin_kanankiri">
                <div className="wadah_button_and_content_img">
                    <div className="wadah_content_img">
                    <div className="wadah_foto_slide_berita">
                                    <div className="title_foto_slide_berita">
                                        <span>FOTO</span>
                                    </div>
                                    <div className="margin_right_wadah_foto_berita_one_foto">
                                    <Slider {...settings}>
                                        <div className="wadah_foto_berita_one_foto">
                                            <Row>
                                                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                                            <div className="wadah_all_content_foto">
                                                                <div className="wadah_foto_berita_two">
                                                                    <img src={foto_berita_one} className="foto_berita_two" />
                                                                </div>
                                                                <div className="wadah_tanggal_foto_berita_two">
                                                                    <Link className="link_foto_berita_Two_color_foto_link">
                                                                        <span>FOTO</span>
                                                                    </Link>
                                                                    <Link className="link_tanggal_berita_Two_foto">
                                                                        <span>13 Agustus 2024 11:08</span>
                                                                    </Link>
                                                                </div>
                                                                <Link to="/politik/read/1"   className="link_title_berita_two_foto">
                                                                    <span>Warga Betawi Dukung Anies</span>
                                                                </Link>
                                                            </div>
                                                    </Col>

                                                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                                            <div className="wadah_all_content_foto_two">
                                                                <div className="wadah_foto_berita_two">
                                                                    <img src={foto_berita_two} className="foto_berita_two" />
                                                                </div>
                                                                <div className="wadah_tanggal_foto_berita_two">
                                                                    <Link className="link_foto_berita_Two_color_foto_link">
                                                                        <span>FOTO</span>
                                                                    </Link>
                                                                    <Link className="link_tanggal_berita_Two_foto">
                                                                        <span>12 Agustus 2024 03:59</span>
                                                                    </Link>
                                                                </div>
                                                                <Link to="/politik/read/1" className="link_title_berita_two_foto ">
                                                                    <span>Sindiran Warga Kaligawe</span>
                                                                </Link>
                                                            </div>
                                                    </Col>
                                            </Row>
                                        </div>

                                        <div className="wadah_foto_berita_one_foto">
                                            <Row>
                                                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                                            <div className="wadah_all_content_foto">
                                                                <div className="wadah_foto_berita_two">
                                                                    <img src={foto_berita_one} className="foto_berita_two" />
                                                                </div>
                                                                <div className="wadah_tanggal_foto_berita_two">
                                                                    <Link className="link_foto_berita_Two_color_foto_link">
                                                                        <span>FOTO</span>
                                                                    </Link>
                                                                    <Link className="link_tanggal_berita_Two_foto">
                                                                        <span>13 Agustus 2024 11:08</span>
                                                                    </Link>
                                                                </div>
                                                                <Link to="/politik/read/1" className="link_title_berita_two_foto">
                                                                    <span>Warga Betawi Dukung Anies</span>
                                                                </Link>
                                                            </div>
                                                    </Col>

                                                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                                            <div className="wadah_all_content_foto_two">
                                                                <div className="wadah_foto_berita_two">
                                                                    <img src={foto_berita_two} className="foto_berita_two" />
                                                                </div>
                                                                <div className="wadah_tanggal_foto_berita_two">
                                                                    <Link className="link_foto_berita_Two_color_foto_link">
                                                                        <span>FOTO</span>
                                                                    </Link>
                                                                    <Link className="link_tanggal_berita_Two_foto">
                                                                        <span>12 Agustus 2024 03:59</span>
                                                                    </Link>
                                                                </div>
                                                                <Link to="/politik/read/1" className="link_title_berita_two_foto">
                                                                    <span>Sindiran Warga Kaligawe</span>
                                                                </Link>
                                                            </div>
                                                    </Col>
                                            </Row>
                                        </div>
                                    </Slider>
                                    </div>
                                </div>
                    </div>
                    <div className="wadah_berita_foto_and_galery">
                        <Row>
                            <Col xl={8}>
                                <div className="wadah_poster_galery">
                                    <img src={galery_rmol} className="foto_poster_galery" />
                                </div>
                                <div className="wadah_foto_foto">
                                    <Row>
                                        <Col xl={6}>
                                            <div className="wadah_foto_foto_2 padding_foto_foto_2">
                                                <img src={img_foto_1} className="img_foto_foto" />
                                                <div className="tanggal_hari_waktu">
                                                    <span>Sabtu, 31 Agustus 2024, 15:10 WIB</span>
                                                </div>
                                                <Link className="link_judul_foto_foto">Menjaga Harmonisasi Umat</Link>
                                                <span className="span_foto_foto">Sosialisasi sekaligus diskusi menyorot kewaspadaan terhadap ancaman keretakan umat dalam Pilkada Tengerang Selatan 2024. Acara digelar di Su..</span>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <div className="wadah_foto_foto_2 padding_foto_foto_2">
                                                <img src={img_foto_2} className="img_foto_foto" />
                                                <div className="tanggal_hari_waktu">
                                                    <span>Sabtu, 31 Agustus 2024, 14:06 WIB</span>
                                                </div>
                                                <Link className="link_judul_foto_foto">Apel Persiapan HLF MSP dan IAF</Link>
                                                <span className="span_foto_foto">Satuan Tugas Pengamanan VVIP High-Level Forum on Multi Stakeholder Partnership (HLF MSP) dan Forum Tingkat Tinggi (FTT) Indonesia Africa For..</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <span>tes</span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FotoDark;