import Lottie from 'lottie-react';
import React from 'react';
import cook from '../Cooking-lottie.json'

const CookingInspiration = () => {
    return (
        <section className="py-14 px-6 bg-[#FFF8F5] dark:bg-[#1A1A1A]">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-[#333333] dark:text-white mb-4">
                        Cook with Love & Flavor!
                    </h2>
                    <p className="text-[#555555] dark:text-gray-300 mb-6 leading-relaxed">
                        Discover easy-to-follow recipes, healthy meals, and sweet treats to satisfy every craving. Whether you're a beginner or a kitchen pro, our step-by-step guides bring joy to your table.
                    </p>
                    <button className="bg-[#FF725E] hover:bg-[#e8604e] text-white font-semibold px-6 py-3 rounded-full transition shadow-md">
                        Explore Recipes
                    </button>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-64 h-64 bg-[#FFD19C] dark:bg-[#333333] rounded-xl flex items-center justify-center shadow-inner">
                                            <Lottie animationData={cook}></Lottie>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CookingInspiration;

