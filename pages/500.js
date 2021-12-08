import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Errors from "../components/Errors";


function Custom500() {
    return (


        <Layout pageTitle="Error 500">

            <Header />
            <Errors />
            <Footer />


        </Layout>

    )
}
export default Custom500;