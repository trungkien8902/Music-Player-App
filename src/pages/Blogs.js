import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from "../components/Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Blogs() {
  return (
    <>
      <div className="w-10/12 m-auto mt-10">
        <h2 className="text-center text-4xl font-bold mb-10 uppercase">Our Blogs</h2>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <img src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg" alt="blog"/>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <img src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg" alt="blog"/>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <img src="https://icdn.dantri.com.vn/zoom/1200_630/2022/12/09/pepsi-ravolution-dantri-crop-1670550930172.jpeg" alt="blog"/>
            </Item>
          </Grid>
        </Grid>
      </div>
      <Footer/>
    </>
  );
}
