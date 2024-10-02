import Breaking from "../component/Breaking";
import Footer from "../component/Footer";
import IndeksBerita from "../component/IndeksBerita";
import NavbarIndeks from "../component/NavbarIndeks";

function Indeks () {
    return (
        <>
            <Breaking />
            <NavbarIndeks />
            <IndeksBerita />
            <Footer />
        </>
    );
}

export default Indeks;