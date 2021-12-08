import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Dev from "../components/Dev";
const coding = () => {
    return (
        <Layout pageTitle="Modern Web Development With NextJS" description="Modern Coding" siteName="Godigi">
            <Header />
            <Dev />
            <Footer />
        </Layout>
    )
}
export default coding;