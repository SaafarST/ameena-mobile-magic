import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import ScrollToTop from '@/components/common/ScrollToTop'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Medical from '@/pages/Medical'
import AI from '@/pages/AI'
import SaidzodaLab from '@/pages/SaidzodaLab'
import SaidzodaCharity from '@/pages/SaidzodaCharity'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="medical" element={<Medical />} />
          <Route path="ai" element={<AI />} />
          <Route path="lab" element={<SaidzodaLab />} />
          <Route path="charity" element={<SaidzodaCharity />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App