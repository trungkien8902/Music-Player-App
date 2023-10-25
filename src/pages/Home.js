import React from "react";
import "./style.css"
import bg from "./img/bg.png"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Footer from "../components/Footer";

export default function Home() {
      
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }
    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 1'
        },
        {
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            caption: 'Slide 2'
        },
        {
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 3'
        },
    ];
  return (
    <>
        <div className="home-page text-white grid grid-cols-2">
            <div className="home-page-text">
                <h2 className="text-5xl pb-4">This Month's</h2>
                <h2 className="text-5xl pb-6 text-red-500">Record Breaking Albums!</h2>
                <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam atque asperiores aperiam neque maiores magni, 
                    nesciunt officiis odio, itaque tempora, quasi accusamus. 
                    Aliquam sint sed facere provident impedit sequi reiciendis.</p>
                <button className="btn-primary">Listen Now</button>
                <button className="btn-primary">Add to Queue</button>
            <div className="slide-container mt-10">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        </div>
                    </div>
                ))} 
                </Slide>
            </div>    
            
            </div>
            <div className="home-page-img">
                <img src={bg} alt="bg"/>
            </div>
        </div> 
        <Footer />
    </>
    );
}



