import React, { useState } from "react";
import "./App.css";
import { getRandomHexColors, getRandomIndex } from "./utils";

const App = () => {
  // colors
  const [randomColors, setRandomColors] = useState<string[]>(
    getRandomHexColors(3)
  );
  const [questionColor, setQuestionColor] = useState<string>(
    randomColors[getRandomIndex(randomColors.length)]
  );
  // scoring
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);

  // click handler
  const handleColorButtonClick = (color: string) => {
    // check answer
    if (color === questionColor) {
      // inc score
      setCorrectAnswers((prev) => prev + 1);
    } else {
      alert("incorrect");
    }

    setQuestionsAnswered((prev) => prev + 1);

    // new question
    const newColors = getRandomHexColors(3);
    const newQuestionColor = newColors[getRandomIndex(newColors.length)];
    setRandomColors(newColors);
    setQuestionColor(newQuestionColor);
  };

  // console.log("Colors:", randomColors);
  // console.log("Question color:", questionColor);

  return (
    <main className="App">
      <header className="header">
        <h1 style={{ textTransform: "uppercase" }}>Guess the color</h1>
        <h2>
          {correctAnswers}
          {" / "}
          {questionsAnswered}
        </h2>
      </header>
      <div className="colorBox" style={{ backgroundColor: questionColor }} />
      <div className="buttons">
        {randomColors.map((color) => (
          <button
            className="colorButton"
            onClick={() => handleColorButtonClick(color)}
            key={color}
          >
            {color}
          </button>
        ))}
      </div>
    </main>
  );
};

export default App;
