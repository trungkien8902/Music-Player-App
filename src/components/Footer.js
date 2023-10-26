import React from "react";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Input } from "@mui/material";
import { Button } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="bg-cyan-950 w-100 p-16 text-white m-auto">
      <div className="flex">
        <div className="basis-1/2 pr-10">
          <div className="hover:cursor-pointer mb-6 text-4xl font-bold">
            <i className="fab fa-spotify pr-3"></i>Spotify 3.0
          </div>
          <p className="text-lg mb-6">
            Spotify is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find and attend
            events that fuel their passions and enrich their lives.
          </p>
          <Link to="/">
            <i className="fab fa-facebook text-4xl pr-4"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-twitter text-4xl pr-4"></i>
          </Link>

          <Link to="/">
            <i className="fab fa-linkedin text-4xl pr-4"></i>
          </Link>
        </div>
        <div className="basis-1/5">
          <h2 className="font-bold mb-4">Plan Events</h2>
          <ul>
            <li>
              <Link to="/">Create and Set Up</Link>
            </li>
            <li>
              <Link to="/">Sell Tickets</Link>
            </li>
            <li>
              <Link to="/">Online RSVPs</Link>
            </li>
            <li>
              <Link to="/">Online Events</Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/5">
          <h2 className="font-bold mb-4">Spotify</h2>
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Press</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">How it Works</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/5">
          <h2 className="font-bold mb-4">Stay In The Loop</h2>
          <p>
            Join our mailing list to stay in the loop with our newest for Event
            and concert
          </p>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <Button>Send</Button>
          </FormControl>
        </div>
      </div>
      <div className="text-center border-t-2 border-slate-600 pt-10 mt-10">
        Copyright &copy; 2023. Created by{" "}
        <a
          className="text-cyan-500"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/trungkien.8902/"
        >
          Trung Kien
        </a>{" "}
        -{" "}
        <a
          className="text-cyan-500"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/chich.cheo.001/"
        >
          Canh Duy
        </a>{" "}
        -{" "}
        <a
          className="text-cyan-500"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/3thang6/"
        >
          Huy Cong
        </a>
      </div>
    </div>
  );
}
