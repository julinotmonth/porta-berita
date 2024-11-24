import { Col, Row } from "react-bootstrap";
import berita_1 from "../img/berita_1.jpg";
import berita_2 from "../img/berita_2.jpg";
import berita_3 from "../img/berita_3.jpg";
import berita_4 from "../img/berita_4.jpg";
import berita_5 from "../img/berita_5.jpg";
import berita_6 from "../img/berita_6.jpg";
import berita_7 from "../img/berita_7.jpg";
import berita_8 from "../img/berita_8.jpg";
import berita_9 from "../img/berita_9.jpg";
import berita_10 from "../img/berita_10.jpg";
import berita_11 from "../img/berita_11.jpg";
import berita_12 from "../img/berita_12.jpg";
import berita_13 from "../img/berita_13.jpg";
import berita_14 from "../img/berita_14.jpg";
import berita_15 from "../img/berita_15.jpg";
import berita_16 from "../img/berita_16.jpg";
import berita_17 from "../img/berita_17.jpg";
import berita_18 from "../img/berita_18.jpg";
import top_seven_1 from "../img/top_seven_1.jpg"
import top_seven_2 from "../img/top_seven_2.jpg"
import top_seven_3 from "../img/top_seven_3.jpg"
import tes from "../img/tes.jpeg"
import top_seven_5 from "../img/top_seven_5.jpg"
import top_seven_6 from "../img/top_seven_6.jpg"
import top_seven_7 from "../img/top_seven_7.jpg"
import logo_ig from "../img/logo_ig.png"
import logo_fb from "../img/logo_fb.png"
import logo_x from "../img/logo_x.png"
import logo_tiktok from "../img/logo_tiktok.png"
import logo_yt from "../img/logo_yt.png"
import foto_berita_one from "../img/foto_berita_one.jpg"
import foto_berita_two from "../img/foto_berita_two.jpg"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player/youtube'
import NextArrow from "./NextArrow";
import PreviewArrow from "./PreviewArrow";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import img_tekno_1 from "../img/img_tekno_1.jpeg"
import img_tekno_2 from "../img/img_tekno_2.jpg"
import img_tekno_3 from "../img/img_tekno_3.jpg"
import img_tekno_4 from "../img/img_tekno_4.jpg"
import img_tekno_5 from "../img/img_tekno_5.jpg"
import img_tekno_6 from "../img/img_tekno_6.jpeg"
import img_tekno_7 from "../img/img_tekno_7.jpeg"
import img_tekno_8 from "../img/img_tekno_8.jpeg"
import pertahanan_1 from "../img/pertahanan_1.jpg"
import politik_3 from "../img/politik_read_3.jpg"
import politik_1 from "../img/POLITIK10.jpeg"
import dunia_1 from "../img/dunia_1.jpeg"
import dunia_2 from "../img/dunia_2.jpeg"
import hukum_1 from "../img/hukum_1.jpg"
import hukum_2 from "../img/hukum_2.jpg"
import POLITIK3 from "../img/POLITIK3.jpg";

function Tekno () {
    return (
        <div className="wadah_politik">
            <div className="margin_kanankiri">
                <div className="wadah_content_politik">
                    <div className="wadah_berita_politik">
                        <Row>
                            <Col xl={8} lg={12} md={12} sm={12} xs={12} className="padding_bottom_column">
                                <h1 className="content_politik">Tekno</h1>
                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="read/1">
                                                <img src={img_tekno_1} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">15 November 2024 15:02
                                                </span>
                                                <Link to="read/1" className="link_berita_politik">Amazon Kembangkan Kacamata GPS untuk Kurir</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="read/2">
                                                <img src={img_tekno_2} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">15 November 2024 14:40
                                                </span>
                                                <Link to="read/2" className="link_berita_politik">Tiga Bulan Cuti, Greg Brockman Akhirnya Kembali ke OpenAI</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="read/3">
                                                <img src={img_tekno_3} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">14 November 2024 02:06</span>
                                                <Link to="read/3" className="link_berita_politik">AI Makin Diminati untuk Bikin Konten</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="read/4">
                                                <img src={img_tekno_4} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">11 November 2024 14:30
                                                </span>
                                                <Link to="read/4" className="link_berita_politik">Perubahan Besar, Apple akan Gunakan Lensa Aperture Variabel di iPhone 18</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                
                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="read/5">
                                                <img src={img_tekno_5} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">10 November 2024 07:16
                                                </span>
                                                <Link to="read/5" className="link_berita_politik">Badai Garam Peretas Tiongkok Akses Data Seluler Jutaan Warga AS
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="read/6">
                                                <img src={img_tekno_6} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 November 2024 13:59
                                                </span>
                                                <Link to="read/6" className="link_berita_politik">Google akan Rilis Android 16 untuk TV pada 2026</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="read/7">
                                                <img src={img_tekno_7} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">07 November 2024 15:44
                                                </span>
                                                <Link to="read/7" className="link_berita_politik">WhatsApp Siapkan Fitur Baru untuk Cek Keaslian Foto dalam Pesan</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="read/8">
                                                <img src={img_tekno_8} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">07 November 2024 09:32
                                                </span>
                                                <Link to="read/8" className="link_berita_politik">Infinix Zero 40 5G Dirilis, Lebih Kencang dengan Chipset Dimensity 8200 Ultimate</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col xl={4} lg={12} md={12} sm={12} xs={12}>
                                <Link>
                                    <div className="wadah_button_seven">
                                        <span>TOP SEVEN</span>
                                    </div>
                                </Link>
                                <div className="wadah_berita_top_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link to="/pertahanan/read/1">
                                                    <img src={pertahanan_1} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">1</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link to="/pertahanan/read/1" className="link_content_berita_top_seven">
                                                    <span>Perwira TNI AL Raih Predikat Outstanding dalam Kursus Long ASW di India</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Pertahanan</span>
                                                    <span className="tanggal_politik_span_top_seven">24 November 2024 02:59 </span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link to="/politik/read/3">
                                                    <img src={POLITIK3} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">2</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link to="/politik/read/3" className="link_content_berita_top_seven">
                                                    <span>Diingatkan Megawati, Aparatur Negara Tak Netral di Pilkada Bisa Dipidana
                                                    </span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 20:20
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link to="/politik/read/1">
                                                    <img src={politik_1} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">3</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link to="/politik/read/1" className="link_content_berita_top_seven">
                                                    <span>PDIP Dikabarkan Usung Anies di Pilkada Jabar, Begini Respons Puan
                                                    </span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">08 Agustus 2024 18:07
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link to="/dunia/read/1">
                                                    <img src={dunia_1} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">4</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link to="/dunia/read/1" className="link_content_berita_top_seven">
                                                    <span>Indonesia dan Purdue University Siapkan Tim Pengembangan Semikonduktor
                                                    </span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Dunia</span>
                                                    <span className="tanggal_politik_span_top_seven">23 November 2024, 10:29 WIB</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link to="/dunia/read/2">
                                                    <img src={dunia_2} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">5</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link to="/dunia/read/2" className="link_content_berita_top_seven">
                                                    <span>Terbukti Lakukan Penganiayaan, Petarung UFC McGregor Didenda Rp1,4 Miliar
                                                    </span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Dunia</span>
                                                    <span className="tanggal_politik_span_top_seven">23 November 2024, 09:52 WIB</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link to="/hukum/read/1">
                                                    <img src={hukum_1} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">6</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link to="/hukum/read/1" className="link_content_berita_top_seven">
                                                    <span>OTT KPK: Rohidin Mersyah Pungut Dana dari ASN untuk Pilkada
                                                    </span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Hukum</span>
                                                    <span className="tanggal_politik_span_top_seven">24 November 2024, 12:35 WIB</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link to="/hukum/read/2">
                                                    <img src={hukum_2} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">7</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link to="/hukum/read/2" className="link_content_berita_top_seven">
                                                    <span>Terjaring OTT KPK, Gubernur Bengkulu Rohidin Punya Harta Rp4,1 Miliar
                                                    </span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Hukum</span>
                                                    <span className="tanggal_politik_span_top_seven">24 November 2024, 12:03 WIB</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_iklan_top_seven margin_top_iklan_seven">
                                    <span>IKLAN DI SINI</span>
                                </div>

                                <div className="wadah_iklan_top_seven margin_top_iklan_seven">
                                    <span>IKLAN DI SINI</span>
                                </div>

                                <div className="wadah_video_iklan_top_seven margin_top_iklan_seven">
                                    <ReactPlayer width="100%" url="https://www.youtube.com/watch?v=xdk3OlmyhzU&pp=ygUVcHJhbW9lZHlhIGFuYW50YSB0b2Vy" />
                                    <div className="wadah_deskrip_link_top_seven">
                                        <Link className="wadah_logo_link_ig_top_seven margin_right_logo_ig_top_seven">
                                            <img src={logo_ig} className="logo_ig_top_seven" />
                                        </Link>
                                        <Link className="wadah_logo_link_ig_top_seven">
                                            <span>rmol.id</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="wadah_trending_tag">
                                    <div className="button_trending_tag">
                                        <span>TRENDING TAG</span>
                                    </div>
                                    <div className="wadah_tagar_top_seven">
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#AGUS GUMIWANG KARTASASMITA</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#AIRLANGGA HARTARTO</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#ANWAR USMAN</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#BMKG</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#BPIP</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#GIBRAN RAKABUMING RAKA</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#JOKO WIDODO</span>
                                            </Link>
                                        </div>
                                    </div> 
                                </div>
                                <div className="wadah_trending_tag margin_bottom_trending_tag margin_bottom_20px">
                                    <div className="button_trending_tag">
                                        <span>FOLLOW US</span>
                                    </div>
                                    <div className="wadah_logo_medsos_top_seven">
                                        <Link>
                                            <img src={logo_fb} className="logo_medos margin_right_logo_medsos" />
                                        </Link>

                                        <Link>
                                            <img src={logo_x} className="logo_medos margin_right_logo_medsos" />
                                        </Link>

                                        <Link>
                                            <img src={logo_ig} className="logo_medos margin_right_logo_medsos" />
                                        </Link>

                                        <Link>
                                            <img src={logo_tiktok} className="logo_medos margin_right_logo_medsos" />
                                        </Link>

                                        <Link>
                                            <img src={logo_yt} className="logo_medos" />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tekno;