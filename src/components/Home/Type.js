import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
<<<<<<< HEAD
          "Website Developer",
          "Programmer",
          "Back-End Developer",
=======
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
>>>>>>> 24d955cf6cd4ce5ff8a9a8071f0c87dfa4aaacec
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
