import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import single from "./img/single.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Blogs() {
  return (
    <>
      <img src={single} alt="blogs"/>
      <div className="w-10/12 m-auto mt-10 mb-20">
        <h2 className="text-center text-4xl font-bold mb-10 uppercase">
          Our Blogs
        </h2>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item className="hover: cursor-pointer">
              <img
                src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg"
                alt="blog"
              />
              <h2 className="font-bold text-2xl pt-2 text-left text-cyan-800">
                How to get the best playlist
              </h2>
              <p className="text-left text-red-600 pt-2">
                by Admin | 2 Comments
              </p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className="hover: cursor-pointer">
              <img
                src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg"
                alt="blog"
              />
              <h2 className="font-bold text-2xl pt-2 text-left text-cyan-800">
                How to get the best playlist
              </h2>
              <p className="text-left text-red-600 pt-2">
                by Admin | 2 Comments
              </p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className="hover: cursor-pointer">
              <img
                src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg"
                alt="blog"
              />
              <h2 className="font-bold text-2xl pt-2 text-left text-cyan-800">
                How to get the best playlist
              </h2>
              <p className="text-left text-red-600 pt-2">
                by Admin | 2 Comments
              </p>
            </Item>
          </Grid>
        </Grid>
        <p className="pt-10"></p>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item className="hover: cursor-pointer">
              <img
                src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg"
                alt="blog"
              />
              <h2 className="font-bold text-2xl pt-2 text-left text-cyan-800">
                How to get the best playlist
              </h2>
              <p className="text-left text-red-600 pt-2">
                by Admin | 2 Comments
              </p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className="hover: cursor-pointer">
              <img
                src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg"
                alt="blog"
              />
              <h2 className="font-bold text-2xl pt-2 text-left text-cyan-800">
                How to get the best playlist
              </h2>
              <p className="text-left text-red-600 pt-2">
                by Admin | 2 Comments
              </p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className="hover: cursor-pointer">
              <img
                src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg"
                alt="blog"
              />
              <h2 className="font-bold text-2xl pt-2 text-left text-cyan-800">
                How to get the best playlist
              </h2>
              <p className="text-left text-red-600 pt-2">
                by Admin | 2 Comments
              </p>
            </Item>
          </Grid>
        </Grid>
        <button className="mt-4 float-right text-white bg-gray-800 p-3 hover:text-black hover:bg-cyan-600">
          Show more
        </button>
      </div>
      <Footer />
    </>
  );
}
