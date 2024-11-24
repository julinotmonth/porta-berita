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
import diki from "../img/diki.jpg"
import img_politik_5 from "../img/img_politik_5.jpg"

function BeritaPolitik5 () {
    return (
        <div className="wadah_berita_politik">
            <div className="margin_kanankiri">
                <div className="content_berita_politik">
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <div className="wadah_content_berita_politik_all">
                                <div className="button_politik">
                                    <Link to="/politik" className="link_button_politik_1">Politik</Link>
                                </div>
                                <div className="wadah_judul_berita_politik_1">
                                    <h1 className="judul_berita_politik_1">Ratusan Anggota Parfi Layangkan Mosi Tidak Percaya
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
                                                <img src={diki} className="content_img_profil_report" />
                                            </div>
                                        </Col>
                                        <Col xl={11} lg={11} md={11} sm={11} xs={10}>
                                            <div className="wadah_name_reporter">
                                                <span className="content_name_reporter">REPORT : </span>
                                                <span className="content_name_reporter content_name_reporter_bold">DIKI TRIANTO</span>
                                            </div>
                                            <div className="wadah_date_reporter_post">
                                                <span className="date_reporter_post">Rabu, 20 November 2024, 17:47 WIB
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_img_post_berita">
                                    <img src={img_politik_5} className="content_img_post_berita" />
                                </div>
                                <div className="wadah_span_img_post">
                                    <span className="content_span_img_post">Para anggota Persatuan Artis Film Indonesia (Parfi) melayangkan mosi tidak percaya terhadap PB Parfi periode 2020-2025/Ist
                                    </span>
                                </div>
                                <div className="wadah_deskripsi_post_1">
                                    <img src={republik_merdeka} className="img_deskripsi_post_1" />
                                    <span className="span_deskripsi_post_1">Mosi tidak percaya dilayangkan sejumlah artis film senior terhadap Pengurus Besar Persatuan Artis Film Indonesia (PB Parfi) periode 2020-2025 di bawah kepemimpinan Alicia Djohar.</span>
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
                                                            <Link to="https://rmol.id/politik/read/2024/11/20/645558/gugatan-ad-art-golkar-disidangkan-perdana-begini-isinya">
                                                                <img src={img_berita_rmol_1} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/politik/read/2024/11/20/645558/gugatan-ad-art-golkar-disidangkan-perdana-begini-isinya" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">Pendaftaran Jagoan PDIP di Pilwalkot Semarang Sesuai Perhitungan Weton</span>
                                                        </Link>
                                                    </Col>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/politik/read/2024/11/20/645507/komisi-iii-puji-gerak-cepat-kapolda-jateng-tangani-kasus-kekerasan-seksual-pada-anak">
                                                                <img src={img_berita_rmol_2} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/politik/read/2024/11/20/645507/komisi-iii-puji-gerak-cepat-kapolda-jateng-tangani-kasus-kekerasan-seksual-pada-anak" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">Risma Serap Kekuatan Spiritual Mbah Bungkul Sebelum Tarung di Jatim</span>
                                                        </Link>
                                                    </Col>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/politik/read/2024/11/20/645507/komisi-iii-puji-gerak-cepat-kapolda-jateng-tangani-kasus-kekerasan-seksual-pada-anak">
                                                                <img src={img_berita_rmol_3} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/politik/read/2024/11/20/645507/komisi-iii-puji-gerak-cepat-kapolda-jateng-tangani-kasus-kekerasan-seksual-pada-anak" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">Kader Militan PDIP Tegaskan Pram-Rano Tak Gentar Koalisi Raksasa RK</span>
                                                        </Link>
                                                    </Col>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/politik/read/2024/11/19/645409/terlibat-pembantaian-anak-di-gaza-golkar-minta-pemerintah-tolak-investasi-starlink">
                                                                <img src={img_berita_rmol_4} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/politik/read/2024/11/19/645409/terlibat-pembantaian-anak-di-gaza-golkar-minta-pemerintah-tolak-investasi-starlink" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">95 Persen PDIP Bandung Usung Anies Baswedan-Ono Surono di Pilkada Jabar</span>
                                                        </Link>
                                                    </Col>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol">
                                                            <Link to="https://rmol.id/politik/read/2024/11/19/645396/ikrar-golkar-bisa-munas-ulang-dan-status-ketum-bahlil-gugur">
                                                                <img src={img_berita_rmol_5} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/politik/read/2024/11/19/645396/ikrar-golkar-bisa-munas-ulang-dan-status-ketum-bahlil-gugur" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">Doa Anggota DPR Fraksi PDIP di Rapur HUT ke-79: Berikanlah Keberanian Menghadapi Raja Zalim</span>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                                <div className="wadah_paragraf_berita_rmol">
                                                    <p className="content_paragraf_berita_rmol">Mosi tidak percaya ini disampaikan ratusan anggota Parfi di Gedung Pusat Perfilman Usmar Ismail, Jalan HR Rasuna Said, Setiabudi, Jakarta Selatan, Rabu 20 November 2024.
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">“Hari ini adalah hari berkumpulnya anggota Parfi, kita berkumpul dari gemuruh hati yang terakumulasi,” tegas aktor sekaligus produser film, Ki Kusumo di lokasi.
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Menurutnya, kepengurusan Parfi di bawah kepemimpinan Alicia Djohar tidak berjalan sebagaimana mestinya. Termasuk agenda kongres PB Parfi yang akan digelar pertengahan bulan Desember mendatang. 
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">“Sebelum mengadakan kongres tentu ada persiapan. Nah, inilah yang secara teknis anggota itu tidak pernah ngerti. Tiba-tiba A, tiba-tiba B, prosesnya enggak jelas,” kritiknya.
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Dalam aksi tersebut, sejumlah artis senior ikut melayangkan mosi tidak percaya, seperti Soultan Saladin, Dolly Martin, Syaiful Amri, Lela Anggraini, Kamil Marvin, Aspar Paturusi, Mawardi Harlan, Yana Akbarie, Elkie Kwee hingga Agus Wibowo, dan Tien Kadaryono. rmol news logo article
                                                    </p>
                                                </div>
                                                <h3 className="heading_berita_terkait_rmol mrgin_top_judul_berita_juga">BERITA JUGA : </h3>
                                                <div className="wadah_name_editor_org">
                                                    <span className="name_editor_org">EDITOR : </span>
                                                    <span className="name_editor_org bold_editor">DIKI TRIANTO</span>
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
                                                                    <Link to="https://rmol.id/politik/read/2024/11/20/645492/legislator-pks-soroti-deindustrialisasi-jadi-mimpi-buruk-industri">
                                                                        <img src={img_article_1} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article padding_right_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Political</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/politik/read/2024/11/20/645492/legislator-pks-soroti-deindustrialisasi-jadi-mimpi-buruk-industri" className="link_deskrip_political">
                                                                                <span>Offered to Become Minister in Prabowo Era, Hashim Firmly Rejects</span>
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
                                                                    <Link to="https://rmol.id/politik/read/2024/11/20/645486/jubir-kpk-tidak-ada-aturan-yang-melarang-ott">
                                                                        <img src={img_article_2} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Political</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/politik/read/2024/11/20/645486/jubir-kpk-tidak-ada-aturan-yang-melarang-ott" className="link_deskrip_political">
                                                                                <span>Offered to Become Minister in Prabowo Era, Hashim Firmly Rejects</span>
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
                                                                    <Link to="https://rmol.id/politik/read/2024/11/20/645484/johanis-tanak-bakal-hapus-ott-sahroni-itu-skenario-kalau-jadi-pimpinan-kpk">
                                                                        <img src={img_article_3} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article padding_right_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Political</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/politik/read/2024/11/20/645484/johanis-tanak-bakal-hapus-ott-sahroni-itu-skenario-kalau-jadi-pimpinan-kpk" className="link_deskrip_political">
                                                                                <span>Offered to Become Minister in Prabowo Era, Hashim Firmly Rejects</span>
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
                                                                    <Link to="https://rmol.id/politik/read/2024/11/20/645490/remaja-masjid-blora-komitmen-kawal-demokrasi-bermartabat-pada-pilkada-2024">
                                                                        <img src={img_article_4} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Political</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/politik/read/2024/11/20/645490/remaja-masjid-blora-komitmen-kawal-demokrasi-bermartabat-pada-pilkada-2024" className="link_deskrip_political">
                                                                                <span>Offered to Become Minister in Prabowo Era, Hashim Firmly Rejects</span>
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
                                                                    <Link to="https://rmol.id/politik/read/2024/11/20/645485/alokasi-anggaran-kemendag-2025-turun-rp270-miliar">
                                                                        <img src={img_article_5} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article padding_right_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Political</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/politik/read/2024/11/20/645485/alokasi-anggaran-kemendag-2025-turun-rp270-miliar" className="link_deskrip_political">
                                                                                <span>Offered to Become Minister in Prabowo Era, Hashim Firmly Rejects</span>
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
                                                                    <Link to="https://rmol.id/politik/read/2024/11/20/645477/di-komisi-vi-budi-santoso-ungkap-kemendag-hemat-anggaran-rp69-miliar">
                                                                        <img src={img_article_6} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Political</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/politik/read/2024/11/20/645477/di-komisi-vi-budi-santoso-ungkap-kemendag-hemat-anggaran-rp69-miliar" className="link_deskrip_political">
                                                                                <span>Offered to Become Minister in Prabowo Era, Hashim Firmly Rejects</span>
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
                                <ReactPlayer width="100%" height="622px" url="https://www.youtube.com/watch?v=ebKMgMMbYaE&pp=ygUKdGFuIG1hbGFrYQ%3D%3D" />
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

export default BeritaPolitik5;