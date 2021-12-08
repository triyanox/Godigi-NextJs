import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Supportteam from "../components/supportteam";
const support = () => {
    return (
        <Layout pageTitle="Support" description="Support" siteName="Godigi">
            <Header />
            <Supportteam />
            <Footer />
        </Layout>
    )
}
export default support;