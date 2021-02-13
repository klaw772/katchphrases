import React from "react";
import "./SoundboardButton.css";
// import absolutelyAreYouKiddingMe from "absolutely-are-you-kidding-me.mp3";
// import cackle from "cackle.mp3";
// import heckYes from "heck-yes.mp3";
// import hello from "hello.mp3";
// import itsLit from "its-lit.mp3";
// import nice from "nice.mp3";
// import woo from "woo.mp3";
// import wowThisSlaps from "wow-this-slaps.mp3";
// import youSaidItSister from "you-said-it-sister.mp3";
// import youreKillinIt from "youre-killin-it.mp3";

export const SoundboardButton = ({ anecdote }) => {
  // let soundUrl;
  // switch (anecdote) {
  //   case "absolutely-are-you-kidding-me":
  //     soundUrl = absolutelyAreYouKiddingMe;
  //     break;
  //   case "cackle":
  //     soundUrl = cackle;
  //     break;
  //   case "heck-yes":
  //     soundUrl = heckYes;
  //     break;
  //   case "hello":
  //     soundUrl = hello;
  //     break;
  //   case "its-lit":
  //     soundUrl = itsLit;
  //     break;
  //   case "nice":
  //     soundUrl = nice;
  //     break;
  //   case "woo":
  //     soundUrl = woo;
  //     break;
  //   case "wow-this-slaps":
  //     soundUrl = wowThisSlaps;
  //     break;
  //   case "you-said-it-sister":
  //     soundUrl = youSaidItSister;
  //     break;
  //   case "youre-killin-it":
  //     soundUrl = youreKillinIt;
  //     break;
  //   default:
  //     soundUrl = heckYes;
  //     break;
  // }
  return (
    <>
      <audio id="myAudio">
        <source
          src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
          type="audio/mpeg"
        />
      </audio>
      <button
        className="soundboard-button"
        data-testid="soundboard-button"
        onClick={() => {
          let audio = document.getElementById("myAudio");
          audio.play();
        }}
      >
        {anecdote}
      </button>
    </>
  );
};
