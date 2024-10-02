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

function Tekno2 () {
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
                                            <Link to="/politik/read/1">
                                                <img src={berita_1} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">08 Agustus 2024 18:07</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Setelah Pilates, Zita Anjani Ajak Ibu-Ibu Bikin Brownies Rendah Gula</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_2} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">08 Agustus 2024 21:45</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Ini Alasan Golkar Belum Resmi Umumkan Ridwan Kamil untuk Pilkada Jakarta</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_3} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:20</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Diduga Lakukan Safari Politik Berbungkus Kegiatan Agama, Sutrisno Pangaribuan: Copot Agus Fatoni</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_4} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:14</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Jokowi dan Airlangga Bertemu Empat Mata, Ini yang Dibahas</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                
                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_5} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:11</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Mardiana: Keputusan Maju Pilkada Lampung Tengah Karena Masyarakat</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_6} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:09</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Jarnas '98 Minta Polisi Proses Benny Rhamdani</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_7} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 19:55</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Program Prabowo-Gibran Diakomodir RAPBN 2025 Jadi Tradisi Baik</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_8} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 19:43</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Soal Dugaan Penjegalan Anies, PDIP Cuma Basa-basi Politik ke PKS</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_9} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 19:24</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Setelah Banten, PKB Siap Bersama Gerindra di Jakarta</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_10} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:03</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Muktamar PKB Dipercepat, Cak Imin Kembali jadi Ketum?</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_11} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:03</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Sopir Dicekoki Miras, Truk di SPBU Dibawa Kabur</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_12} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:03</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Bey Optimistis Jabar Cetak Hattrick di PON XXI</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_13} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:03</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Bidik Kursi Wagub Lampung, Jihan Nurlela akan Mundur dari DPD RI</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_14} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:03</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Karpet Merah di Jakarta Bukan untuk Ridwan Kamil</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_15} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:03</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Ratusan Narapidana di Jabar Bebas di Hari Kemerdekaan</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_16} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:03</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Pengelola Kawasan Wajib Beri Akses Masyarakat ke Area Umum</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_17} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:03</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Golkar Perintahkan Kader Beringin RT/RW Sosialisasikan Ridwan Kamil</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_keluar margin_bottom_content_politik margin_right_wadah_politik">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={3} xs={3}>
                                            <Link to="/politik/read/1">
                                                <img src={berita_18} className="img_berita_politik" />
                                            </Link>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_link_tanggal">
                                                <span className="tanggal_berita_keluar">09 Agustus 2024 20:03</span>
                                                <Link to="/politik/read/1" className="link_berita_politik">Zaki Ikhlas Ridwan Kamil Rebut Tiket Pilkada Jakarta</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col xl={8} className=" display_none">
                                <div className="wadah_pagination margin_bottom_pagi">
                                    <Link to="/bisnis" className="link_arrow_left margin_right_pagination">
                                        <div className="wadah_arrow_left_pagi"><BiSolidLeftArrow className="arrow_left_pagi" /></div>
                                    </Link>
                                    <Link to="/bisnis" className="link_angka_paginat margin_right_pagination">
                                        <div className="wadah_angka_paginat_non">1</div>
                                    </Link>
                                    <Link to="/bisnis/2" className="link_angka_paginat margin_right_pagination">
                                        <div className="wadah_angka_paginat">2</div>
                                    </Link>
                                    <Link to="/bisnis/3" className="link_angka_paginat margin_right_pagination">
                                        <div className="wadah_angka_paginat_non">3</div>
                                    </Link>
                                    <Link to="/bisnis/3" className="link_arrow_left">
                                        <div className="wadah_arrow_left_pagi"><BiSolidRightArrow  className="arrow_left_pagi" /></div>
                                    </Link>
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
                                                <Link>
                                                    <img src={top_seven_1} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">1</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Anies Ungkap Alasan Tak Maju Lewat Jalur Independen</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_2} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">2</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Mendadak Mundur, Airlangga Diduga dalam Tekanan</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_3} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">3</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Arief Poyuono: Isu Airlangga Mundur untuk Jatuhkan Jokowi</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={tes} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">4</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Kakorlantas Cek Kesiapan Satgas Pamwalrolakir Jelang Upacara Kemerdekaan</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_5} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">5</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Burung dan Benalu di Dahan Beringin Tua</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_6} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">6</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Mardani Ali Sera: Kecil Peluang PKS Dukung Anies</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_7} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">7</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Ini Sosok S yang Digadang-gadang Bakal Dampingi RK</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
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
                                    <ReactPlayer width="100%" url="https://www.youtube.com/watch?v=8UFusPdd44w" />
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
                                <div className="wadah_trending_tag margin_bottom_trending_tag">
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

                            <Col xl={8} className="display_none_2">
                                <div className="wadah_pagination margin_bottom_pagi">
                                    <Link to="/bisnis" className="link_arrow_left margin_right_pagination">
                                        <div className="wadah_arrow_left_pagi"><BiSolidLeftArrow className="arrow_left_pagi" /></div>
                                    </Link>
                                    <Link to="/bisnis" className="link_angka_paginat margin_right_pagination">
                                        <div className="wadah_angka_paginat_non">1</div>
                                    </Link>
                                    <Link to="/bisnis/2" className="link_angka_paginat margin_right_pagination">
                                        <div className="wadah_angka_paginat">2</div>
                                    </Link>
                                    <Link to="/bisnis/3" className="link_angka_paginat margin_right_pagination">
                                        <div className="wadah_angka_paginat_non">3</div>
                                    </Link>
                                    <Link to="/bisnis/3" className="link_arrow_left">
                                        <div className="wadah_arrow_left_pagi"><BiSolidRightArrow  className="arrow_left_pagi" /></div>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tekno2;