import { Fragment , useEffect, useState} from "react";
import './Styles/normalize.css';
import './Styles/main.scss';
import Header from "./components/Header"
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
      return <Loading/>
  }
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Fragment>
  )

}

export default App
