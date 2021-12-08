import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Hostingservices from "../components/Hostingservices";
const hosting = () => {
    return (
        <Layout pageTitle="The Best Web Hosting Solutions" description="Hosting" siteName="Godigi">
            <Header />
            <Hostingservices />
            <Footer />
        </Layout>
    )
}
export default hosting;