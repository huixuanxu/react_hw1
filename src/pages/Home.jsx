import Header from "../components/Header/Header"
import ImageList from "../components/ImageList/ImageList"
import Footer from "../components/Footer/Footer"
import { useImages } from "../react-query";

function Home() {

    const {data, isLoading } = useImages();
    const images = data || [];

    return (
        <div className="main-layout">
            <Header className="layout-header"/>
            <ImageList 
            images={images}
            isLoading={isLoading}
            className="layout-imagelist"/>
            <Footer className="layout-footer"/>
        </div>
    );
}

export default Home;