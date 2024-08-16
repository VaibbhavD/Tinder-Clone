import React from "react";
import Hero_Section from "./Hero_Section";
import Navbar from "./Navbar";

function Home() {
  return (
    <div
      className="w-full min-h-screen bg-cover "
      style={{
        backgroundImage:
          "url('https://plugins-media.makeupar.com/smb/blog/post/2022-08-05/c414b386-9e1e-41c5-b87e-c930c41f34ed.jpg')",
      }}
    >
      <Hero_Section />
    </div>
  );
}

export default Home;
