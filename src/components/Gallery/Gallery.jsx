
import { useContext } from "react";
import ImageGallery from "react-image-gallery";
import { Context } from "../ContextProvider/ContextProvider";


const Gallery = () => {
    
    

    return (
        <div className="my-10">
            <div className="carousel w-full h-[70vh]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/T1HZb1V/leadership.jpg" className="w-full " />
                    
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/9pzNQh4/charity-auction.webp" className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/ZJfY3tJ/breakfast.png" className="w-full" />
                </div> 
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/Snbn6Cf/training.webp" className="w-full" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src="https://i.ibb.co/hgGCRRM/conference-and-seminers.jpg" className="w-full" />
                </div> 
                <div id="item6" className="carousel-item w-full">
                    <img src="https://i.ibb.co/3WVWJ2Q/team-building.jpg" className="w-full" />
                </div> 
                <div id="item7" className="carousel-item w-full">
                    <img src="https://i.ibb.co/27NctFn/product-launch.jpg" className="w-full" />
                </div> 
                <div id="item8" className="carousel-item w-full">
                    <img src="https://i.ibb.co/SXYRx33/gala-dinner.jpg" className="w-full" />
                </div>
                <div id="item9" className="carousel-item w-full">
                    <img src="https://i.ibb.co/kgN7kFk/corporate-retreat.webp" className="w-full" />
                </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a> 
            <a href="#item4" className="btn btn-xs">4</a>
            <a href="#item5" className="btn btn-xs">5</a> 
            <a href="#item6" className="btn btn-xs">6</a> 
            <a href="#item7" className="btn btn-xs">7</a> 
            <a href="#item8" className="btn btn-xs">8</a>
            <a href="#item9" className="btn btn-xs">9</a>
            </div>
            
            
        </div>
    );
};

export default Gallery;