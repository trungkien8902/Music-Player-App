import React from "react";
import "./style.css";
import Footer from "../components/Footer";
import about from "./img/about.jpg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <>
      <div className="about-page bg-gray-200">
        <img src={about} alt="about" />
        <div className=" p-4 w-11/12 m-auto">
          <h2 className="text-4xl font-bold mb-8 mt-8 text-center">About Us</h2>
          <p className="text-center">
            Welcome to our music streaming platform. We are passionate about
            bringing the best music to your ears.
          </p>
          <h3 className="text-xl font-semibold mt-4 pt-10">Our Mission</h3>
          <p className="pt-2 pb-6">
          Our mission is to empower businesses and individuals by crafting exceptional digital experiences. We're dedicated to delivering innovative web solutions that combine cutting-edge technology with creativity and user-centric design. We're committed to helping our clients succeed in the digital world by building websites and applications that are not only functional and visually appealing but also secure, reliable, and accessible. Our passion for web development drives us to stay at the forefront of industry trends, ensuring our clients benefit from the latest digital advancements. We take pride in our work, aiming to foster lasting partnerships with our clients and provide them with the tools they need to thrive in the online landscape
          </p>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item className="hover: cursor-pointer">
                <img
                  src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg"
                  alt="blog"
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className="hover: cursor-pointer">
                <img
                  src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg"
                  alt="blog"
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className="hover: cursor-pointer">
                <img
                  src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg"
                  alt="blog"
                />
              </Item>
            </Grid>
          </Grid>
          <h3 className="text-xl font-semibold mt-4 mb-4">Meet the Team</h3>
          <ul className="flex">
            <li className="pr-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg"
                alt="John Doe"
                className="w-16 h-16 rounded-full"
              />
              John Doe - CEO
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg"
                alt="Jane Smith"
                className="w-16 h-16 rounded-full"
              />
              Jane Smith - CTO
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
