import Banner from "../Banner/Banner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import OurClients from "../Our Cleints/OurClients";
import RescentProducts from "../Our Recent Products/RescentProducts";
import Banner2 from "../Banner/Banner2";
import Navbar from "../Navbar/Navbar";
import Facts from "../Facts/Facts";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Beress||Home</title>
       
      </Helmet>
      <Navbar></Navbar>
      <Banner2></Banner2>
       {/* <Banner></Banner> */}
       <OurClients></OurClients>
       <RescentProducts></RescentProducts>
       <Facts></Facts>
       <Footer></Footer>
        </div>
    );
};

export default Home;