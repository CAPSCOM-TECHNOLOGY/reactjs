import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
let HomeTemplate=({children})=>{
    return(
        <>            
            <Navbar/>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
export default HomeTemplate;