import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Privacy from './Pages/Privacy'
import RefundPolicy from './Pages/RefundPolicy'
import TermsCondition from './Pages/TermsCondition'
import Faq from './Pages/Faq'
import BlogDetailPage from './Pages/BlogDetailPage'
import ScrollToTop from './components/ScrollToTop'
import CourseDetailsPage from './Pages/CourseDetailsPage'
import AboutNewPage from './Pages/AboutNewPage'
import Mentors from './Pages/Mentors'
import RoadMap from './Pages/RoadMap'
import CarrerPage from './Pages/CarrerPage'
import CarrerForm from './Pages/CarrerForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about_page" element={<AboutNewPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentor" element={<Mentors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upsc-roadmap" element={<RoadMap />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/course/:id" element={<CourseDetailsPage />} />
          <Route path="/career" element={<CarrerPage />} />
          {/* <Route path="/carrer_form" element={<CarrerForm />} /> */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
