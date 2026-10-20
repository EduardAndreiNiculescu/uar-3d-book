import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Acasa } from './pages/Acasa';
import { Despre } from './pages/Despre';
import { Noutati } from './pages/Noutati';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { ExpozitiiIndex } from './pages/expozitii/ExpozitiiIndex';
import { SosCulele } from './pages/expozitii/SosCulele';
import { FrankLloydWright } from './pages/expozitii/FrankLloydWright';

export function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Acasa />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/noutati" element={<Noutati />} />
        <Route path="/expozitii" element={<ExpozitiiIndex />} />
        <Route path="/expozitii/sos-culele" element={<SosCulele />} />
        <Route path="/expozitii/frank-lloyd-wright" element={<FrankLloydWright />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
