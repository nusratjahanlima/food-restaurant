import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import './Home.css';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Banner from '../../components/Banner/Banner';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';

const Home = () => {

    const [category,setCategory] = useState("All");

    return (
        <div>
            <Banner/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload/>
            <Footer/>
        </div>
    );
};

export default Home;