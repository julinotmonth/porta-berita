import BreakingDark from "../component/BreakingDark";
import FotoDark from "../component/FotoDark";
import NavbarFoto from "../component/NavbarFoto";

function Foto () {
    return (
        <div className="background_color_root">
            <BreakingDark />
            <NavbarFoto />
            <FotoDark />
        </div>
    );
}

export default Foto;