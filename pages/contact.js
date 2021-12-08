import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Contactform from "../components/Contactform"
const Contact = () => {
    return (
        <Layout pageTitle="Contact" description="Contact Us" siteName="Godigi">
            <Header />
            <Contactform />
            <Footer />
        </Layout>
    )
}
export default Contact;