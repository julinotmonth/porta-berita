import { Link } from "react-router-dom";
import logo_fb from "../img/logo_fb.png"
import logo_x from "../img/logo_x.png"
import logo_ig from "../img/logo_ig.png"
import logo_tiktok from "../img/logo_tiktok.png"
import logo_yt from "../img/logo_yt.png"
import rmol_network from "../img/rmol_network.png"

function Footer () {
    return (
        <div className="wadah_footer">
            <div className="margin_kanankiri_footer">
                <div className="wadah_content_footer">
                    <div className="wadah_link_footer">
                        <Link className="link_wadah_link_footer">
                            <span>Tentang Kami</span>
                        </Link>
                        <Link className="link_wadah_link_footer">
                            <span>Disclaimer</span>
                        </Link>
                        <Link className="link_wadah_link_footer">
                            <span>Pedoman Media Siber</span>
                        </Link>
                        <Link className="link_wadah_link_footer">
                            <span>Pedoman Ramah Anak</span>
                        </Link>
                        <Link className="link_wadah_link_footer">
                            <span>Kode Etik Jurnalistik</span>
                        </Link>
                        <Link className="link_wadah_link_footer">
                            <span>Pedoman Pemberitaan Isu Keberagaman</span>
                        </Link>
                        <Link className="link_wadah_link_footer">
                            <span>RSS</span>
                        </Link>
                    </div>
                    <div className="wadah_icon_footer">
                        <Link className="margin_right_footer">
                            <img src={logo_fb} />
                        </Link>
                        <Link className="margin_right_footer">
                            <img src={logo_x} />
                        </Link>
                        <Link className="margin_right_footer">
                            <img src={logo_ig} />
                        </Link>
                        <Link className="margin_right_footer">
                            <img src={logo_tiktok} />
                        </Link>
                        <Link className="margin_right_footer">
                            <img src={logo_yt} />
                        </Link>
                    </div>

                    <div className="wadah_logo_network_footer">
                        <Link className="wadah_logo_network_footer_2">
                            <img src={rmol_network} className="logo_network_footer" />
                        </Link>
                    </div>

                    <div className="wadah_pronsi_footer">
                        <Link className="link_provinsi_footer">
                            <span>ACEH</span>
                        </Link>
                        <Link className="link_provinsi_footer">
                            <span>SUMATERA UTARA</span>
                        </Link>
                        <Link className="link_provinsi_footer">
                            <span>BENGKULU</span>
                        </Link>
                        <Link className="link_provinsi_footer">
                            <span>SUMATERA SELATAN</span>
                        </Link>
                        <Link className="link_provinsi_footer">
                            <span>LAMPUNG</span>
                        </Link>
                        <Link className="link_provinsi_footer">
                            <span>JAWA BARAT</span>
                        </Link>
                        <Link className="link_provinsi_footer">
                            <span>JAWA TENGAH</span>
                        </Link>
                        <Link className="link_provinsi_footer">
                            <span>JAWA TIMUR</span>
                        </Link>
                        <Link className="link_provinsi_footer">
                            <span>PAPUA</span>
                        </Link>
                    </div>

                    <div className="wadah_copyright_footer">
                        <p className="content_copyright_footer">Copyright © 2024 Republik Merdeka Kantor Berita Politik & Ekonomi RMOLID All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;