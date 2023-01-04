import ContentWrapper from '@/components/wrappers/ContentWrapper';
import LandingArea from '@/components/LandingArea';
import Header from '@/components/Header';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <ContentWrapper>

      {/* main landing area */}
      <LandingArea />

      {/* header */}
      <Header />

      {/* about me */}
      <About />

      {/* blog posts */}
      <Blog />

      {/* projects */}
      <Projects />

      {/* contact form */}
      <Contact />

      {/* footer */}
      <Footer />

    </ContentWrapper>
  )
}
