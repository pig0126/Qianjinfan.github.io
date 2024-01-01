import React from 'react';
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import skyimg from "../assets/img/skyimg.jpg"

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="Aboutcontainer">
        <h2>A UX DESIGNER</h2>
        <p>
          What if <em>interactions</em> were always familiar,<br />
          like your daily walk to the corner store.<br />
          What if <em>products</em> were not just tools,<br />
          but a good friend who comes forward<br />
          and takes your hand.<br />
          What if <em>data</em> were not just numbers,<br />
          but also colors, stories,<br />
          and deep blue eyes,<br />
          that stare into your soul.
        </p>
        <p>I often dream of this world.</p>
        <p className="emoji">🌍</p>

        <h2>AN INTJ-T</h2>
        <p>
          Spends too much time trying and deleting apps<br />
          Creates a spreadsheet for everything<br />
          Reads Eileen Chang and design<br />
          Enjoys writing stream of consciousness on paper (aka journaling)
        </p>
        <p className="emoji">👩‍💻</p>

        <img src={skyimg} className='skyimg' alt="Cloudy Sky" />
      </div>
      <Footer />
    </div>
  );
};

export default About;