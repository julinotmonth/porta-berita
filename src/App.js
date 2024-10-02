import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Indeks from './pages/Indeks';
import Indeks2 from './pages/Indeks2';
import Indeks3 from './pages/Indeks3';
import Politik from './pages/Politik';  
import Politik3 from './pages/Politik3';
import PolitikPagi2 from './pages/PolitikPagi2';
import PagesBisnis from './pages/PagesBisnis';
import PagesBisnis2 from './pages/PagesBisnis2';
import PagesBisnis3 from './pages/PagesBisnis3';
import PagesTekno from './pages/PagesTekno';
import PagesTekno2 from './pages/PagesTekno2';
import PagesTekno3 from './pages/PagesTekno3';
import PagesNusantara from './pages/PagesNusantara';
import PagesNusantara2 from './pages/PagesNusantara2';
import PagesNusantara3 from './pages/PagesNusantara3';
import Dunia from './component/Dunia';
import Dunia2 from './component/Dunia2';
import Dunia3 from './component/Dunia3';
import PagesHukum from './pages/PagesHukum';
import PagesHukum2 from './pages/PagesHukum2';
import PagesHukum3 from './pages/PagesHukum3';
import Bawaslu from './component/Bawaslu';
import Bawaslu2 from './component/Bawaslu2';
import Bawaslu3 from './component/Bawaslu3';
import Publika from './component/Publika';
import Publika2 from './component/Publika2';
import Publika3 from './component/Publika3';
import PagesOlahraga from './pages/PagesOlahraga';
import PagesOlahraga2 from './pages/PagesOlahraga2';
import PagesOlahraga3 from './pages/PagesOlahraga3';
import PagesPertahanan from './pages/PagesPertahanan';
import PagesPertahanan2 from './pages/PagesPertahanan2';
import PagesPertahanan3 from './pages/PagesPertahanan3';
import PagesOtomotif from './pages/PagesOtomotif';
import PagesOtomotif2 from './pages/PagesOtomotif2';
import PagesOtomotif3 from './pages/PagesOtomotif3';
import PagesHiburan from './pages/PagesHiburan';
import PagesHiburan2 from './pages/PagesHiburan2';
import PagesHiburan3 from './pages/PagesHiburan3';
import PagesDunia from './pages/PagesDunia';
import PagesDunia3 from './pages/PagesDunia3';
import PagesDunia2 from './pages/PagesDunia2';
import PagesBawaslu from './pages/PagesBawaslu';
import PagesBawaslu2 from './pages/PagesBawaslu2';
import PagesBawaslu3 from './pages/PagesBawaslu3';
import PagesPublika from './pages/PagesPublika';
import PagesPublika2 from './pages/PagesPublika2';
import PagesPublika3 from './pages/PagesPublika3';
import PagesNotFound from './pages/PagesNotFound';
import PolitikRead1 from './pages/PolitikRead1';
import Foto from './pages/Foto';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/porta-berita' element={<Home />} />
                <Route path='/indeksberita' element={<Indeks />} />
                <Route path='/indeksberita/2' element={<Indeks2 />} />
                <Route path='/indeksberita/3' element={<Indeks3 />} />
                <Route path='/politik' element={<Politik />} />
                <Route path='/politik/2' element={<PolitikPagi2 />} />
                <Route path='/politik/3' element={<Politik3 />} />
                <Route path='/politik/read/1' element={<PolitikRead1 />} />
                <Route path='/bisnis' element={<PagesBisnis />} />
                <Route path='/bisnis/2' element={<PagesBisnis2 />} />
                <Route path='/bisnis/3' element={<PagesBisnis3 />} />
                <Route path='/tekno' element={<PagesTekno />} />
                <Route path='/tekno/2' element={<PagesTekno2 />} />
                <Route path='/tekno/3' element={<PagesTekno3 />} />
                <Route path='/nusantara' element={<PagesNusantara />} />
                <Route path='/nusantara/2' element={<PagesNusantara2 />} />
                <Route path='/nusantara/3' element={<PagesNusantara3 />} />
                <Route path='/dunia' element={<PagesDunia />} />
                <Route path='/dunia/2' element={<PagesDunia2 />} />
                <Route path='/dunia/3' element={<PagesDunia3 />} />
                <Route path='/hukum' element={<PagesHukum />} />
                <Route path='/hukum/2' element={<PagesHukum2 />} />
                <Route path='/hukum/3' element={<PagesHukum3 />} />
                <Route path='/bawaslu' element={<PagesBawaslu />} />
                <Route path='/bawaslu/2' element={<PagesBawaslu2 />} />
                <Route path='/bawaslu/3' element={<PagesBawaslu3 />} />
                <Route path='/publika' element={<PagesPublika />} />
                <Route path='/publika/2' element={<PagesPublika2 />} />
                <Route path='/publika/3' element={<PagesPublika3 />} />
                <Route path='/olahraga' element={<PagesOlahraga />} />
                <Route path='/olahraga/2' element={<PagesOlahraga2 />} />
                <Route path='/olahraga/3' element={<PagesOlahraga3 />} />
                <Route path='/pertahanan' element={<PagesPertahanan />} />
                <Route path='/pertahanan/2' element={<PagesPertahanan2/>} />
                <Route path='/pertahanan/3' element={<PagesPertahanan3 />} />
                <Route path='/otomotif' element={<PagesOtomotif />} />
                <Route path='/otomotif/2' element={<PagesOtomotif2 />} />
                <Route path='/otomotif/3' element={<PagesOtomotif3 />} />
                <Route path='/hiburan' element={<PagesHiburan />} />
                <Route path='/hiburan/2' element={<PagesHiburan2 />} />
                <Route path='/hiburan/3' element={<PagesHiburan3 />} />
                <Route path='/foto' element={<Foto />} />
                <Route path='*' element={<PagesNotFound />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
