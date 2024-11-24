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
import PolitikRead4 from './pages/PolitikRead4';
import PolitikRead2 from './pages/PolitikRead2';
import PolitikRead3 from './pages/PolitikRead3';
import PolitikRead5 from './pages/PolitikRead5';
import PolitikRead6 from './pages/PolitikRead6';
import PolitikRead7 from './pages/PolitikRead7';
import PolitikRead8 from './pages/PolitikRead8';
import PolitikRead9 from './pages/PolitikRead9';
import PolitikRead10 from './pages/PolitikRead10';
import PolitikRead11 from './pages/PolitikRead11';
import PolitikRead12 from './pages/PolitikRead12';
import PolitikRead13 from './pages/PolitikRead13';
import PolitikRead14 from './pages/PolitikRead14';
import PagesBisniss2 from './pages/PagesBisniss2';
import PagesBisniss3 from './pages/PagesBisniss3';
import PagesBisniss4 from './pages/PagesBisniss4';
import PagesBisniss5 from './pages/PagesBisniss5';
import PagesBisniss6 from './pages/PagesBisniss6';
import PagesBisniss7 from './pages/PagesBisniss7';
import PagesBisniss8 from './pages/PagesBisniss8';
import PagesBisniss9 from './pages/PagesBisniss9';
import PagesBisniss10 from './pages/PagesBisniss10';
import PagesTeknoo2 from './pages/PagesTeknoo2';
import PagesTeknoo3 from './pages/PagesTeknoo3';
import PagesTeknoo4 from './pages/PagesTeknoo4';
import PagesTeknoo5 from './pages/PagesTeknoo5';
import PagesTeknoo6 from './pages/PagesTeknoo6';
import PagesTeknoo7 from './pages/PagesTeknoo7';
import PagesTeknoo8 from './pages/PagesTeknoo8';
import PagesTeknoo9 from './pages/PagesTeknoo9';
import PagesNusantaraa1 from './pages/PagesNusantaraa1';
import PagesNusantaraa2 from './pages/PagesNusantaraa2';
import PagesNusantaraa3 from './pages/PagesNusantaraa3';
import PagesNusantaraa4 from './pages/PagesNusantaraa4';
import PagesNusantaraa5 from './pages/PagesNusantaraa5';
import PagesNusantaraa6 from './pages/PagesNusantaraa6';
import PagesNusantaraa7 from './pages/PagesNusantaraa7';
import PagesNusantaraa8 from './pages/PagesNusantaraa8';
import PagesDuniaa1 from './pages/PagesDuniaa1';
import PagesDuniaa2 from './pages/PagesDuniaa2';
import PagesDuniaa3 from './pages/PagesDuniaa3';
import PagesDuniaa4 from './pages/PagesDuniaa4';
import PagesDuniaa5 from './pages/PagesDuniaa5';
import PagesDuniaa6 from './pages/PagesDuniaa6';
import PagesDuniaa7 from './pages/PagesDuniaa7';
import PagesDuniaa8 from './pages/PagesDuniaa8';
import PagesHukumm1 from './pages/PagesHukumm1';
import PagesHukumm2 from './pages/PagesHukumm2';
import PagesHukumm3 from './pages/PagesHukumm3';
import PagesHukumm4 from './pages/PagesHukumm4';
import PagesHukumm5 from './pages/PagesHukumm5';
import PagesHukumm6 from './pages/PagesHukumm6';
import PagesHukumm7 from './pages/PagesHukumm7';
import PagesHukumm8 from './pages/PagesHukumm8';
import PagesBawasluu1 from './pages/PagesBawasluu1';
import PagesBawasluu2 from './pages/PagesBawasluu2';
import PagesBawasluu3 from './pages/PagesBawasluu3';
import PagesBawasluu4 from './pages/PagesBawasluu4';
import PagesBawasluu5 from './pages/PagesBawasluu5';
import PagesBawasluu6 from './pages/PagesBawasluu6';
import PagesBawasluu7 from './pages/PagesBawasluu7';
import PagesBawasluu8 from './pages/PagesBawasluu8';
import PagesPublikaa1 from './pages/PagesPublikaa1';
import PagesPublikaa2 from './pages/PagesPublikaa2';
import PagesPublikaa3 from './pages/PagesPublikaa3';
import PagesPublikaa4 from './pages/PagesPublikaa4';
import PagesPublikaa5 from './pages/PagesPublikaa5';
import PagesPublikaa6 from './pages/PagesPublikaa6';
import PagesPublikaa7 from './pages/PagesPublikaa7';
import PagesPublikaa8 from './pages/PagesPublikaa8';
import PagesOlahragaa1 from './pages/PagesOlahragaa1';
import PagesOlahragaa2 from './pages/PagesOlahragaa2';
import PagesOlahragaa3 from './pages/PagesOlahragaa3';
import PagesOlahragaa4 from './pages/PagesOlahragaa4';
import PagesOlahragaa5 from './pages/PagesOlahragaa5';
import PagesOlahragaa6 from './pages/PagesOlahragaa6';
import PagesOlahragaa7 from './pages/PagesOlahragaa7';
import PagesOlahragaa8 from './pages/PagesOlahragaa8';
import PagesPertahanann1 from './pages/PagesPertahanann1';
import PagesPertahanann2 from './pages/PagesPertahanann2';
import PagesPertahanann3 from './pages/PagesPertahanann3';
import PagesPertahanann4 from './pages/PagesPertahanann4';
import PagesPertahanann5 from './pages/PagesPertahanann5';
import PagesPertahanann6 from './pages/PagesPertahanann6';
import PagesPertahanann7 from './pages/PagesPertahanann7';
import PagesPertahanann8 from './pages/PagesPertahanann8';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/indeksberita' element={<Indeks />} />
                <Route path='/indeksberita/2' element={<Indeks2 />} />
                <Route path='/indeksberita/3' element={<Indeks3 />} />
                <Route path='/politik' element={<Politik />} />
                <Route path='/politik/2' element={<PolitikPagi2 />} />
                <Route path='/politik/3' element={<Politik3 />} />
                <Route path='/politik/read/1' element={<PolitikRead1 />} />
                <Route path='/politik/read/2' element={<PolitikRead2 />} />
                <Route path='/politik/read/3' element={<PolitikRead3 />} />
                <Route path='/politik/read/4' element={<PolitikRead4 />} />
                <Route path='/politik/read/5' element={<PolitikRead5 />} />
                <Route path='/politik/read/6' element={<PolitikRead6 />} />
                <Route path='/politik/read/7' element={<PolitikRead7 />} />
                <Route path='/politik/read/8' element={<PolitikRead8 />} />
                <Route path='/politik/read/9' element={<PolitikRead9 />} />
                <Route path='/politik/read/10' element={<PolitikRead10 />} />
                <Route path='/politik/read/11' element={<PolitikRead11 />} />
                <Route path='/politik/read/12' element={<PolitikRead12 />} />
                <Route path='/politik/read/13' element={<PolitikRead13 />} />
                <Route path='/politik/read/14' element={<PolitikRead14 />} />
                <Route path='/bisnis' element={<PagesBisnis />} />
                <Route path='/bisnis/read/1' element={<PagesBisniss2 />} />
                <Route path='/bisnis/read/2' element={<PagesBisniss3 />} />
                <Route path='/bisnis/read/3' element={<PagesBisniss4 />} />
                <Route path='/bisnis/read/4' element={<PagesBisniss5 />} />
                <Route path='/bisnis/read/5' element={<PagesBisniss6 />} />
                <Route path='/bisnis/read/6' element={<PagesBisniss7 />} />
                <Route path='/bisnis/read/7' element={<PagesBisniss8 />} />
                <Route path='/bisnis/read/8' element={<PagesBisniss9 />} />
                <Route path='/bisnis/read/9' element={<PagesBisniss10 />} />
                <Route path='/bisnis/2' element={<PagesBisnis2 />} />
                <Route path='/bisnis/3' element={<PagesBisnis3 />} />
                <Route path='/tekno' element={<PagesTekno />} />
                <Route path='/tekno/read/1' element={<PagesTeknoo2 />} />
                <Route path='/tekno/read/2' element={<PagesTeknoo3 />} />
                <Route path='/tekno/read/3' element={<PagesTeknoo4 />} />
                <Route path='/tekno/read/4' element={<PagesTeknoo5 />} />
                <Route path='/tekno/read/5' element={<PagesTeknoo6 />} />
                <Route path='/tekno/read/6' element={<PagesTeknoo7 />} />
                <Route path='/tekno/read/7' element={<PagesTeknoo8 />} />
                <Route path='/tekno/read/8' element={<PagesTeknoo9 />} />
                <Route path='/tekno/2' element={<PagesTekno2 />} />
                <Route path='/tekno/3' element={<PagesTekno3 />} />
                <Route path='/nusantara' element={<PagesNusantara />} />
                <Route path='/nusantara/read/1' element={<PagesNusantaraa1 />} />
                <Route path='/nusantara/read/2' element={<PagesNusantaraa2 />} />
                <Route path='/nusantara/read/3' element={<PagesNusantaraa3 />} />
                <Route path='/nusantara/read/4' element={<PagesNusantaraa4 />} />
                <Route path='/nusantara/read/5' element={<PagesNusantaraa5 />} />
                <Route path='/nusantara/read/6' element={<PagesNusantaraa6 />} />
                <Route path='/nusantara/read/7' element={<PagesNusantaraa7 />} />
                <Route path='/nusantara/read/8' element={<PagesNusantaraa8 />} />
                <Route path='/nusantara/2' element={<PagesNusantara2 />} />
                <Route path='/nusantara/3' element={<PagesNusantara3 />} />
                <Route path='/dunia' element={<PagesDunia />} />
                <Route path='/dunia/read/1' element={<PagesDuniaa1 />} />
                <Route path='/dunia/read/2' element={<PagesDuniaa2 />} />
                <Route path='/dunia/read/3' element={<PagesDuniaa3 />} />
                <Route path='/dunia/read/4' element={<PagesDuniaa4 />} />
                <Route path='/dunia/read/5' element={<PagesDuniaa5 />} />
                <Route path='/dunia/read/6' element={<PagesDuniaa6 />} />
                <Route path='/dunia/read/7' element={<PagesDuniaa7 />} />
                <Route path='/dunia/read/8' element={<PagesDuniaa8 />} />
                <Route path='/dunia/2' element={<PagesDunia2 />} />
                <Route path='/dunia/3' element={<PagesDunia3 />} />
                <Route path='/hukum' element={<PagesHukum />} />
                <Route path='/hukum/read/1' element={<PagesHukumm1 />} />
                <Route path='/hukum/read/2' element={<PagesHukumm2 />} />
                <Route path='/hukum/read/3' element={<PagesHukumm3 />} />
                <Route path='/hukum/read/4' element={<PagesHukumm4 />} />
                <Route path='/hukum/read/5' element={<PagesHukumm5 />} />
                <Route path='/hukum/read/6' element={<PagesHukumm6 />} />
                <Route path='/hukum/read/7' element={<PagesHukumm7 />} />
                <Route path='/hukum/read/8' element={<PagesHukumm8 />} />
                <Route path='/hukum/2' element={<PagesHukum2 />} />
                <Route path='/hukum/3' element={<PagesHukum3 />} />
                <Route path='/bawaslu' element={<PagesBawaslu />} />
                <Route path='/bawaslu/read/1' element={<PagesBawasluu1 />} />
                <Route path='/bawaslu/read/2' element={<PagesBawasluu2 />} />
                <Route path='/bawaslu/read/3' element={<PagesBawasluu3 />} />
                <Route path='/bawaslu/read/4' element={<PagesBawasluu4 />} />
                <Route path='/bawaslu/read/5' element={<PagesBawasluu5 />} />
                <Route path='/bawaslu/read/6' element={<PagesBawasluu6 />} />
                <Route path='/bawaslu/read/7' element={<PagesBawasluu7 />} />
                <Route path='/bawaslu/read/8' element={<PagesBawasluu8 />} />
                <Route path='/bawaslu/2' element={<PagesBawaslu2 />} />
                <Route path='/bawaslu/3' element={<PagesBawaslu3 />} />
                <Route path='/publika' element={<PagesPublika />} />
                <Route path='/publika/read/1' element={<PagesPublikaa1 />} />
                <Route path='/publika/read/2' element={<PagesPublikaa2 />} />
                <Route path='/publika/read/3' element={<PagesPublikaa3 />} />
                <Route path='/publika/read/4' element={<PagesPublikaa4 />} />
                <Route path='/publika/read/5' element={<PagesPublikaa5 />} />
                <Route path='/publika/read/6' element={<PagesPublikaa6 />} />
                <Route path='/publika/read/7' element={<PagesPublikaa7 />} />
                <Route path='/publika/read/8' element={<PagesPublikaa8 />} />
                <Route path='/publika/2' element={<PagesPublika2 />} />
                <Route path='/publika/3' element={<PagesPublika3 />} />
                <Route path='/olahraga' element={<PagesOlahraga />} />
                <Route path='/olahraga/read/1' element={<PagesOlahragaa1 />} />
                <Route path='/olahraga/read/2' element={<PagesOlahragaa2 />} />
                <Route path='/olahraga/read/3' element={<PagesOlahragaa3 />} />
                <Route path='/olahraga/read/4' element={<PagesOlahragaa4 />} />
                <Route path='/olahraga/read/5' element={<PagesOlahragaa5 />} />
                <Route path='/olahraga/read/6' element={<PagesOlahragaa6 />} />
                <Route path='/olahraga/read/7' element={<PagesOlahragaa7 />} />
                <Route path='/olahraga/read/8' element={<PagesOlahragaa8 />} />
                <Route path='/olahraga/2' element={<PagesOlahraga2 />} />
                <Route path='/olahraga/3' element={<PagesOlahraga3 />} />
                <Route path='/pertahanan' element={<PagesPertahanan />} />
                <Route path='/pertahanan/read/1' element={<PagesPertahanann1 />} />
                <Route path='/pertahanan/read/2' element={<PagesPertahanann2 />} />
                <Route path='/pertahanan/read/3' element={<PagesPertahanann3 />} />
                <Route path='/pertahanan/read/4' element={<PagesPertahanann4 />} />
                <Route path='/pertahanan/read/5' element={<PagesPertahanann5 />} />
                <Route path='/pertahanan/read/6' element={<PagesPertahanann6 />} />
                <Route path='/pertahanan/read/7' element={<PagesPertahanann7 />} />
                <Route path='/pertahanan/read/8' element={<PagesPertahanann8 />} />
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
