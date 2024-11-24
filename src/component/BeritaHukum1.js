import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo_wa from "../img/logo_wa.png"
import logo_fb from "../img/logo_fb.png"
import logo_x from "../img/logo_x.png"
import logo_ig from "../img/logo_ig.png"
import logo_tiktok from "../img/logo_tiktok.png"
import profile_report_1 from "../img/profile_report_1.jpg"
import content_berita_1 from "../img/content_berita_1.jpg"
import republik_merdeka from "../img/republik_merdeka.png"
import poster_rmol_id from "../img/poster_rmol_id.jpg"
import img_berita_rmol_1 from "../img/img_berita_rmol_1.jpg"
import img_berita_rmol_2 from "../img/img_berita_rmol_2.jpg"
import img_berita_rmol_3 from "../img/img_berita_rmol_3.jpg"
import img_berita_rmol_4 from "../img/img_berita_rmol_4.jpg"
import img_berita_rmol_5 from "../img/img_berita_rmol_5.jpg"
import poster_app_store from "../img/poster_app_store.jpg"
import play_store from "../img/play_store.png"
import app_store from "../img/app_store.png"
import ReactPlayer from "react-player";
import top_seven_1 from "../img/top_seven_1.jpg"
import top_seven_2 from "../img/top_seven_2.jpg"
import top_seven_3 from "../img/top_seven_3.jpg"
import tes from "../img/tes.jpeg"
import top_seven_5 from "../img/top_seven_5.jpg"
import top_seven_6 from "../img/top_seven_6.jpg"
import top_seven_7 from "../img/top_seven_7.jpg"
import logo_yt from "../img/logo_yt.png"
import img_article_1 from "../img/img_article_1.jpg"
import img_article_2 from "../img/img_article_2.jpg"
import img_article_3 from "../img/img_article_3.jpg"
import img_article_4 from "../img/img_article_4.jpg"
import img_article_5 from "../img/img_article_5.jpg"
import img_article_6 from "../img/img_article_6.jpg"
import alifia from "../img/alifia.jpg";
import img_bisnis_1 from "../img/img_bisnis_1.jpeg"
import bisnis_terkait_1 from "../img/bisnis_terkait_1.jpg"
import bisnis_terkait_2 from "../img/bisnis_terkait_2.jpeg"
import bisnis_terkait_3 from "../img/bisnis_terkait_3.jpeg"
import bisnis_terkait_4 from "../img/bisnis_terkait_4.jpeg"
import bisnis_other_1 from "../img/bisnis_other_1.jpeg"
import bisnis_other_2 from "../img/bisnis_other_2.jpeg"
import bisnis_other_3 from "../img/bisnis_other_3.jpeg"
import bisnis_other_4 from "../img/bisnis_other_4.jpeg"
import bisnis_other_5 from "../img/bisnis_other_5.jpeg"
import bisnis_other_6 from "../img/bisnis_other_6.jpg"
import img_dunia_1 from "../img/img_dunia_1.jpeg"
import img_dunia_2 from "../img/img_dunia_2.jpeg"
import img_dunia_3 from "../img/img_dunia_3.jpeg"
import img_dunia_4 from "../img/img_dunia_4.jpg"
import img_dunia_5 from "../img/img_dunia_5.jpg"
import img_dunia_6 from "../img/img_dunia_6.jpg"
import img_dunia_7 from "../img/img_dunia_7.jpg"
import img_dunia_8 from "../img/img_dunia_8.jpg"
import img_dunia_9 from "../img/img_dunia_9.jpg"
import diki from "../img/diki.jpg"
import reni from "../img/reni.jpg"
import jonris from "../img/jonris.jpg"
import hani from "../img/hani.jpg"
import terkait_dunia_1 from "../img/terkait_dunia_1.jpeg"
import terkait_dunia_2 from "../img/terkait_dunia_2.jpeg"
import terkait_dunia_3 from "../img/terkait_dunia_3.jpeg"
import terkait_dunia_4 from "../img/terkait_dunia_4.jpg"
import other_dunia_1 from "../img/other_dunia_1.jpg"
import other_dunia_2 from "../img/other_dunia_2.jpeg"
import other_dunia_3 from "../img/other_dunia_3.jpeg"
import other_dunia_4 from "../img/other_dunia_4.jpeg"
import other_dunia_5 from "../img/other_dunia_5.jpeg"
import other_dunia_6 from "../img/other_dunia_6.jpeg"
import img_hukum_1 from "../img/img_hukum_1.jpg"
import img_hukum_2 from "../img/img_hukum_2.jpg"
import img_hukum_3 from "../img/img_hukum_3.jpg"
import img_hukum_4 from "../img/img_hukum_4.jpeg"
import img_hukum_5 from "../img/img_hukum_5.jpg"
import img_hukum_6 from "../img/img_hukum_6.jpg"
import img_hukum_7 from "../img/img_hukum_7.jpg"
import img_hukum_8 from "../img/img_hukum_8.jpeg"
import akmal from "../img/akmal.jpg"
import widodo from "../img/widodo.jpg"
import adit from "../img/aditya.jpg"
import terkait_hukumu_1 from "../img/terkait_hukum_1.jpeg"
import terkait_hukumu_2 from "../img/terkait_hukum_2.jpg"
import terkait_hukumu_3 from "../img/terkait_hukum_3.jpg"
import terkait_hukumu_4 from "../img/terkait_hukum_4.jpg"
import other_hukum_1 from "../img/other_hukum_1.jpeg"
import other_hukum_2 from "../img/other_hukum_2.jpg"
import other_hukum_3 from "../img/other_hukum_3.jpeg"
import other_hukum_4 from "../img/other_hukum_4.jpg"
import other_hukum_5 from "../img/other_hukum_5.jpg"
import other_hukum_6 from "../img/other_hukum_6.jpeg"

function BeritaHukum1 () {
    return (
        <div className="wadah_berita_politik">
            <div className="margin_kanankiri">
                <div className="content_berita_politik">
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <div className="wadah_content_berita_politik_all">
                                <div className="button_politik">
                                    <Link to="/politik" className="link_button_politik_1">Hukum</Link>
                                </div>
                                <div className="wadah_judul_berita_politik_1">
                                    <h1 className="judul_berita_politik_1">OTT KPK: Rohidin Mersyah Pungut Dana dari ASN untuk Pilkada
                                    </h1>
                                </div>
                                <div className="wadah_icon_medsos_politik_1">
                                    <Link className="link_icon_medsos_politik_1">
                                        <img src={logo_wa} className="icon_medsos_politik" />
                                    </Link>
                                    <Link className="link_icon_medsos_politik_1">
                                        <img src={logo_fb} className="icon_medsos_politik" />
                                    </Link>
                                    <Link className="link_icon_medsos_politik_1">
                                        <img src={logo_x} className="icon_medsos_politik" />
                                    </Link>
                                    <Link className="link_icon_medsos_politik_1">
                                        <img src={logo_ig} className="icon_medsos_politik" />
                                    </Link>
                                    <Link>
                                        <img src={logo_tiktok} className="icon_medsos_politik" />
                                    </Link>
                                </div>
                                <div className="wadah_profil_report">
                                    <Row>
                                        <Col xl={1} lg={1} md={1} sm={1} xs={2}>
                                            <div className="wadah_profil_report_2">
                                                <img src={akmal} className="content_img_profil_report" />
                                            </div>
                                        </Col>
                                        <Col xl={11} lg={11} md={11} sm={11} xs={10}>
                                            <div className="wadah_name_reporter">
                                                <span className="content_name_reporter">REPORT : </span>
                                                <span className="content_name_reporter content_name_reporter_bold">JAMALUDIN AKMAL</span>
                                            </div>
                                            <div className="wadah_date_reporter_post">
                                                <span className="date_reporter_post">Minggu, 24 November 2024, 12:35 WIB
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_img_post_berita">
                                    <img src={img_hukum_1} className="content_img_post_berita" />
                                </div>
                                <div className="wadah_span_img_post">
                                    <span className="content_span_img_post">Foto ilustrasi rilis tersangka KPK
                                    </span>
                                </div>
                                <div className="wadah_deskripsi_post_1">
                                    <img src={republik_merdeka} className="img_deskripsi_post_1" />
                                    <span className="span_deskripsi_post_1">Diantara terduga tindak pidana korupsi yang diperiksa Komisi Pemberantasan Korupsi (KPK) usai operasi tangkap tangan di Bengkulu adalah gubernur yang juga calon petahana Rohidin Mersyah.</span>
                                </div>
                                <div className="wadah_poster_rmol_berita_terkait">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={2}>
                                            <div className="wadah_poster_rmol_id">
                                                <img src={poster_rmol_id} className="poster_rmol_id" />
                                            </div>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={10} xs={12}>
                                            <div className="wadah_berita_terkait_rmol">
                                                <h3 className="heading_berita_terkait_rmol">BERITA TERKAIT : </h3>
                                                <Row>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/hukum/read/2024/11/24/645996/ini-fakta-gubernur-bengkulu-yang-diperiksa-kpk-dalam-kasus-ott">
                                                                <img src={terkait_hukumu_1} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/hukum/read/2024/11/24/645996/ini-fakta-gubernur-bengkulu-yang-diperiksa-kpk-dalam-kasus-ott" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">Ini Fakta Gubernur Bengkulu yang Diperiksa KPK dalam Kasus OTT</span>
                                                        </Link>
                                                    </Col>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/hukum/read/2024/11/24/645991/kpk-amankan-uang-saat-ott-7-orang-di-bengkulu">
                                                                <img src={terkait_hukumu_2} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/hukum/read/2024/11/24/645991/kpk-amankan-uang-saat-ott-7-orang-di-bengkulu" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">KPK Amankan Uang saat OTT 7 Orang di Bengkulu</span>
                                                        </Link>
                                                    </Col>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/hukum/read/2024/11/24/645986/hasil-ott-di-bengkulu-dipaparkan-ke-pimpinan-kpk-sore-ini">
                                                                <img src={terkait_hukumu_3} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/hukum/read/2024/11/24/645986/hasil-ott-di-bengkulu-dipaparkan-ke-pimpinan-kpk-sore-ini" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">Hasil OTT di Bengkulu Dipaparkan ke Pimpinan KPK Sore Ini</span>
                                                        </Link>
                                                    </Col>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/hukum/read/2024/11/24/645980/kpk-benarkan-amankan-7-orang-dalam-ott-di-bengkulu">
                                                                <img src={terkait_hukumu_4} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/hukum/read/2024/11/24/645980/kpk-benarkan-amankan-7-orang-dalam-ott-di-bengkulu" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">KPK Benarkan Amankan 7 Orang dalam OTT di Bengkulu</span>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                                <div className="wadah_paragraf_berita_rmol">
                                                    <p className="content_paragraf_berita_rmol">Dipastikan tindak pidana korupsi yang terjadi berupa pungutan ke pegawai Aparatur Sipil Negara (ASN) di lingkungan Pemprov Bengkulu.
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">"Pungutan ke pegawai untuk pendanaan pilkada sepertinya," kata Wakil Ketua KPK, Alexander Marwata, kepada wartawan Minggu siang, 24 November 2024.
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Operasi senyap dilakukan KPK tadi malam. Tujuh pejabat yang diamankan langsung menjalani pemeriksaan awal di Mapolres dan Mapolda Bengkulu. Gubernur Bengkulu Rohidin Mersyah dilaporkan ikut diperiksa KPK.
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">"Benar, KPK melakukan kegiatan tangkap tangan di lingkungan Pemerintah Provinsi Bengkulu. Ada sekitar tujuh orang yang diamankan,"kata Jurubicara KPK, Tessa Mahardhika Sugiarto.  
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Selain itu, penyidik antirasuah turut mengamankan sejumlah uang dalam OTT kali ini yang jumlahnya masih dihiung.
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">"Untuk lengkapnya akan disampaikan secara resmi oleh lembaga sore atau malam ini," kata Tessa.
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Rohidin Mersyah saat ini terdaftar sebagai calon gubernur Bengkulu. Rohidin merupakan politisi lokal yang juga menjabat ketua DPD Golkar Bengkulu periode 2020-2025.rmol news logo article
                                                    </p>
                                                </div>
                                                <div className="wadah_name_editor_org">
                                                    <span className="name_editor_org">EDITOR : </span>
                                                    <span className="name_editor_org bold_editor">ADE MULYANA</span>
                                                </div>
                                                <div className="wadah_icon_medsos_politik_1">
                                                    <Link className="link_icon_medsos_politik_1">
                                                        <img src={logo_wa} className="icon_medsos_politik" />
                                                    </Link>
                                                    <Link className="link_icon_medsos_politik_1">
                                                        <img src={logo_fb} className="icon_medsos_politik" />
                                                    </Link>
                                                    <Link className="link_icon_medsos_politik_1">
                                                        <img src={logo_x} className="icon_medsos_politik" />
                                                    </Link>
                                                    <Link className="link_icon_medsos_politik_1">
                                                        <img src={logo_ig} className="icon_medsos_politik" />
                                                    </Link>
                                                    <Link>
                                                        <img src={logo_tiktok} className="icon_medsos_politik" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={12}>
                                            <div className="wadah_other_articles">
                                                <div className="wadah_button_other_articles">
                                                    <span>OTHER ARTICLES</span>
                                                </div>
                                                <Row>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article margin_bottom_article_other">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/hukum/read/2024/11/24/645979/kpk-tanpa-ott-ibarat-polisi-tanpa-pistol-dan-borgol">
                                                                        <img src={other_hukum_1} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article padding_right_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Hukum</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/hukum/read/2024/11/24/645979/kpk-tanpa-ott-ibarat-polisi-tanpa-pistol-dan-borgol" className="link_deskrip_political">
                                                                                <span>KPK Tanpa OTT Ibarat Polisi Tanpa Pistol dan Borgol</span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article_left margin_bottom_article_other">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/hukum/read/2024/11/23/645913/hakim-harus-panggil-jokowi-demi-mengusut-korupsi-impor-gula">
                                                                        <img src={other_hukum_2} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Hukum</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/hukum/read/2024/11/23/645913/hakim-harus-panggil-jokowi-demi-mengusut-korupsi-impor-gula" className="link_deskrip_political">
                                                                                <span>Hakim Harus Panggil Jokowi demi Mengusut Korupsi Impor Gula</span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article margin_bottom_article_other">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/hukum/read/2024/11/22/645844/kejati-jatim-dikabarkan-perpanjang-penahanan-mantan-notaris-wahyudi-suyanto">
                                                                        <img src={other_hukum_3} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article padding_right_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Hukum</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/hukum/read/2024/11/22/645844/kejati-jatim-dikabarkan-perpanjang-penahanan-mantan-notaris-wahyudi-suyanto" className="link_deskrip_political">
                                                                                <span>Kejati Jatim Dikabarkan Perpanjang Penahanan Mantan Notaris Wahyudi Suyanto
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article_left margin_bottom_article_other">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/hukum/read/2024/11/24/645961/tujuh-kadis-pemprov-bengkulu-diduga-terjaring-ott-kpk">
                                                                        <img src={other_hukum_4} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Hukum</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/hukum/read/2024/11/24/645961/tujuh-kadis-pemprov-bengkulu-diduga-terjaring-ott-kpk" className="link_deskrip_political">
                                                                                <span>Tujuh Kadis Pemprov Bengkulu Diduga Terjaring OTT KPK
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article margin_bottom_article_other_3">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/hukum/read/2024/11/22/645853/kejagung-diminta-kawal-kasus-dugaan-korupsi-suami-airin">
                                                                        <img src={other_hukum_5} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article padding_right_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Hukum</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/hukum/read/2024/11/22/645853/kejagung-diminta-kawal-kasus-dugaan-korupsi-suami-airin" className="link_deskrip_political">
                                                                                <span>Kejagung Diminta Kawal Kasus Dugaan Korupsi Suami Airin</span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article_left">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/dunia/read/2024/11/23/645896/terbukti-lakukan-penganiayaan-petarung-ufc-mcgregor-didenda-rp1-4-miliar">
                                                                        <img src={other_hukum_6} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Hukum</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/dunia/read/2024/11/23/645896/terbukti-lakukan-penganiayaan-petarung-ufc-mcgregor-didenda-rp1-4-miliar" className="link_deskrip_political">
                                                                                <span>Terbukti Lakukan Penganiayaan, Petarung UFC McGregor Didenda Rp1,4 Miliar
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={12} sm={12}>
                            <div className="wadah_content_sidebar_react margin_top_20px">
                                <div className="wadah_react_video_sidebar">
                                    <ReactPlayer width="100%" height="622px" url="https://www.youtube.com/watch?v=oQoZx9BMFEg&pp=ygUZa2FzdXMga29ydXBzaSAyNzEgdHJpbGl1bg%3D%3D" />
                                </div>
                                <div className="wadah_poster_app">
                                    <Link>
                                        <img src={poster_app_store} className="content_poster_app" />
                                    </Link>
                                </div>
                                <div className="wadah_logo_poster_app">
                                    <img src={app_store} className="logo_poster_app" />
                                    <img src={play_store} className="logo_poster_app" />
                                </div>
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
                                <div className="wadah_video_iklan_top_seven margin_top_iklan_seven background_color_content_berita">
                                    <ReactPlayer width="100%" url="https://www.youtube.com/watch?v=CkuliOc0skM&pp=ygUOamVzc2ljYSB3b25nc28%3D" />
                                    <div className="wadah_deskrip_link_top_seven">
                                        <Link className="wadah_logo_link_ig_top_seven margin_right_logo_ig_top_seven">
                                            <img src={logo_ig} className="logo_ig_top_seven" />
                                        </Link>
                                        <Link className="wadah_logo_link_ig_top_seven">
                                            <span>rmol.id</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="wadah_trending_tag background_color_content_berita">
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
                                <div className="wadah_trending_tag margin_bottom_trending_tag background_color_content_berita margin_bottom_follow_us">
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
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default BeritaHukum1;