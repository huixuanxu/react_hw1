import Header from "../components/Header/Header"
import ImageList from "../components/ImageList/ImageList"
import Footer from "../components/Footer/Footer"

function Home() {
    return (
        <div className="main-layout">
            <Header className="layout-header"/>
            <ImageList className="layout-imagelist"/>
            <Footer className="layout-footer"/>
        </div>
    );
}

export default Home;