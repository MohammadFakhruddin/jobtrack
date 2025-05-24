import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; 'react';

const Banner = () => {
   
         const images = [
        "https://i.ibb.co/8nB4twrJ/5.png",
        "https://i.ibb.co/xpKnhgN/6.png",
        "https://i.ibb.co/j9C5fGZL/7.png",
        "https://i.ibb.co/7JZjKvT6/8.png",
        
    ];

    return (
     <Zoom scale={1.4} indicators={true}  infinite={true} autoplay={true} >
            {images.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                    <img style={{ objectFit: "cover", width: "100%" ,}} alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
    );
    
};

export default Banner;
