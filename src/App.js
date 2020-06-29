import React from "react"
import logo from "./logo.svg"

import hangman1 from "./images/hangman1.png"
import hangman2 from "./images/hangman2.png"
import hangman3 from "./images/hangman3.png"
import hangman4 from "./images/hangman4.png"
import hangman5 from "./images/hangman5.png"
import hangman6 from "./images/hangman6.png"
import hangman7 from "./images/hangman7.png"

import "./App.css"

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			guessedLetters: [],
			currentLetter: "",
		}
	}

	handleTextChange(event) {}

	handleSubmit(event) {
		alert("Submitted")
	}

	render() {
		return (
			<div className="App">
				<img className="hangman" src={hangman1} alt="hangman1" />
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.currentLetter}
						onChange={this.handleTextChange}
					/>
					<button> Submit </button>
				</form>
			</div>
		)
	}
}

export default App
