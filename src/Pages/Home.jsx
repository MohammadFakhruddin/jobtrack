import React from 'react';
import Banner from '../Components/Banner';
import CookingInspiration from '../Components/CookingInspiration';
import TopRecipes from '../Components/TopRecipes';
import Blogs from '../Components/Blogs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
        <TopRecipes></TopRecipes>
                <CookingInspiration></CookingInspiration>
                <Blogs></Blogs>

        </div>
    );
};

export default Home;
