import React from "react";
import "./style.css";
import bg from "./img/bg.png";
import shows from "./img/shows.jpg"
import artist from "./img/artist.png"
import sig from "./img/sig.png"
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Footer from "../components/Footer";
import Play from "./Play";

export default function Home() {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 1",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Slide 2",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 3",
    },
  ];
  return (
    <>
        <div className="home-page">
        <div className="text-white grid grid-cols-2 w-11/12 m-auto pt-10 pb-10">
            <div className="home-page-text mt-20 mr-6">
            <h2 className="text-5xl pb-4">This Month's</h2>
            <h2 className="text-5xl pb-6 text-red-500">
                Record Breaking Albums!
            </h2>
            <p className="pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                atque asperiores aperiam neque maiores magni, nesciunt officiis
                odio, itaque tempora, quasi accusamus. Aliquam sint sed facere
                provident impedit sequi reiciendis.
            </p>
            <button className="btn-primary">Listen Now</button>
            <button className="btn-primary">Add to Queue</button>
            </div>
            <div className="slide-container mt-10">
            <Slide>
                {slideImages.map((slideImage, index) => (
                <div key={index}>
                    <div
                    style={{
                        ...divStyle,
                        backgroundImage: `url(${slideImage.url})`,
                    }}
                    ></div>
                </div>
                ))}
            </Slide>
            </div>

            </div>
            <div className="mt-20 mb-10 text-white">
                <h2 className="text-center font-bold text-4xl">Featured Album</h2>
                <div className="w-10/12 mt-10 m-auto">
                    <Play />
                </div>
            </div>

            <div className="w-10/12 m-auto text-white flex">
                <div className="m-auto">
                    <p className="mb-3">Events</p>
                    <h2 className="text-4xl font-bold mb-10">Upcoming Shows</h2>
                    <ul>
                        <li className="bg-slate-900 pl-5 pt-3 pb-3 text-white flex items-center mb-3">
                            <p className="bg-orange-600 mr-4 p-3">18/07</p>
                            <a className="mr-10 hover:text-orange-600" href="#" alt="ticket">Electric Castle Festival</a>
                            <p className="mr-10">Cluj, Romania</p>
                            <button className="mr-5 bg-red-700 p-3  ">Buy Tickets</button>
                        </li>
                        <li className="bg-slate-900 pl-5 pt-3 pb-3 text-white flex items-center mb-3">
                            <p className="bg-orange-600 mr-4 p-3">18/07</p>
                            <a className="mr-10 hover:text-orange-600" href="#" alt="ticket">Electric Castle Festival</a>
                            <p className="mr-10">Cluj, Romania</p>
                            <button className="mr-5 bg-red-700 p-3  ">Buy Tickets</button>
                        </li>
                        <li className="bg-slate-900 pl-5 pt-3 pb-3 text-white flex items-center mb-3">
                            <p className="bg-orange-600 mr-4 p-3">18/07</p>
                            <a className="mr-10 hover:text-orange-600" href="#" alt="ticket">Electric Castle Festival</a>
                            <p className="mr-10">Cluj, Romania</p>
                            <button className="mr-5 bg-red-700 p-3  ">Buy Tickets</button>
                        </li>
                        <li className="bg-slate-900 pl-5 pt-3 pb-3 text-white flex items-center mb-3">
                            <p className="bg-orange-600 mr-4 p-3">18/07</p>
                            <a className="mr-10 hover:text-orange-600" href="#" alt="ticket">Electric Castle Festival</a>
                            <p className="mr-10">Cluj, Romania</p>
                            <button className="mr-5 bg-red-700 p-3  ">Buy Tickets</button>
                        </li>
                        <li className="bg-slate-900 pl-5 pt-3 pb-3 text-white flex items-center mb-3">
                            <p className="bg-orange-600 mr-4 p-3">18/07</p>
                            <a className="mr-10 hover:text-orange-600" href="#" alt="ticket">Electric Castle Festival</a>
                            <p className="mr-10">Cluj, Romania</p>
                            <button className="mr-5 bg-red-700 p-3  ">Buy Tickets</button>
                        </li>
                        
                    </ul>
                </div>
                <img className="w-6/12 ml-20" src={shows} alt="shows"/>
            </div>
            <div className="m-auto text-white flex pt-20">
                <img className="w-6/12" src={artist} alt="artist"/>
                <div className="pl-36 pr-32 pt-40">
                    <p className="mb-3">Events</p>
                    <h2 className="text-4xl font-bold mb-10">The Artist</h2>
                    <p>
                    In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus luctus nec. Curabitur luctus luctus erat, sit amet facilisis quam congue quis. Quisque ornare luctus erat id dignissim. Nullam ac nunc quis ex porttitor luctus.
                    <br></br>
                    <br></br>
                    Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feugiat ut.
                    </p>
                    <img className="w-6/12 mt-20" src={sig} alt="signature"/>
                </div>
            </div>
            <div className="get-ticket text-white pt-40 pb-40">
                <div className="w-10/12 m-auto">
                    <h2 className="font-bold text-4xl pb-8">Get your tickets now!</h2>    
                    <p className="pr-96 pb-8">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum</p> 
                    <button className="mr-5 bg-red-700 p-3">Buy Tickets</button>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}
