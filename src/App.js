import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Love",
  "😑": "Annoyance",
  "🤩": "Star-Struck",
  "😎": "Smiling Face with Sunglasses",
  "😘": "Face Blowing a Kiss",
  "🤣": "Rolling on the Floor Laughing",
  "😒": "Unamused Face",
  "😂": "Face with Tears of Joy",
  "😅": "Grinning Face with Sweat",
  "🥲": "Smilling Face with Tear",
  "🤔": "Thinking Face",
  "🤗": "Smiling Face with Open Hands",
  "😮": "Face with Open Mouth",
  "😴": "Sleeping Face",
  "😝": "Squinting Face with Tongue",
  "😭": " Loudly Crying Face",
  "🤢": "Nauseated Face",
  "🤡": "Clown Face",
  "🤫": "Shushing Face",
  "🤭": "Face with Hand Over Mouth",
  "🫣": "Face with Peeking Eye",
  "🥶": "Cold Face",
  "😠": "Angry Face",
  "😵‍💫": "Face with Spiral Eyes",
  "😟": " Worried Face",
  "🙃": "Upside-Down Face",
  "🫠": "Melting Face",
  "🤦🏻‍♂️": "Man Facepalming",
  "💁🏻‍♂️": "Man Tipping Hand",
  "🙇🏻‍♂️": "Man Bowing",
  "🤷🏻‍♂️": "Man Shrugging",
  "💇🏻‍♂️": "Man Getting Haircut",
  "🙍🏻‍♂️": " Man Frowning",
  "🙅🏻‍♂️": "Man Gesturing No",
  "🧏🏻‍♂️": "Deaf Man",
  "🙋🏻‍♂️": " Man Raising Hand",
  "🙆🏻‍♂️": "Person Gesturing OK"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "No Results";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>Emojinary!</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3> Emojis We know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
