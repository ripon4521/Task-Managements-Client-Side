import Banner from "../Banner/Banner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import OurClients from "../Our Cleints/OurClients";
import RescentProducts from "../Our Recent Products/RescentProducts";
import Banner2 from "../Banner/Banner2";
import Navbar from "../Navbar/Navbar";


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
        </div>
    );
};

export default Home;