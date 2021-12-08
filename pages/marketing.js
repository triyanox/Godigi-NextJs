import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Digitalmarketing from "../components/digitalmarketing";
const marketing = () => {
    return (
        <Layout pageTitle="Digital Marketing" description="Digital Marketing" siteName="Godigi">
            <Header />
            <Digitalmarketing />
            <Footer />
        </Layout>
    )
}
export default marketing;