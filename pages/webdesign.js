import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Design from "../components/design";
const webdesign = () => {
    return (
        <Layout pageTitle="Learn More About Modern Design" description="Modern UI/UX Design" siteName="Godigi">
            <Header />
            <Design />
            <Footer />
        </Layout>
    )
}
export default webdesign;