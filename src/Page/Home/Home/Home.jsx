import Banner from "../Banner/Banner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import OurClients from "../Our Cleints/OurClients";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Beress||Home</title>
       
      </Helmet>
       <Banner></Banner>
       <OurClients></OurClients>
        </div>
    );
};

export default Home;