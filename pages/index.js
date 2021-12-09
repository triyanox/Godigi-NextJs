import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero"
import Services from "../components/Services";
import Footer from "../components/Footer"
import About from "../components/About";



function Index() {
  return (


    <Layout pageTitle="Godigi" description="Web Developement and Digital Marketing Agency in Morocco" siteName="Godigi">

      <Header />
      <Hero />
      <Services />
      <About />
      <Footer />


    </Layout>

  )
}
export default Index;