const {
	prisma
} = require('../database/generated/prisma-client')

const express = require("express")
const app = express()

// A `main` function so that we can use async/await
async function main() {

	// Create a new user called `Alice`
	const newQuote = await prisma.createQuote({
		from: "That's what I do, I drink and I know things.",
		text: "Tyrion Lannister"
	})

	// Read all users from the database and print them to the console
	const allQuotes = await prisma.quotes()
	console.log(allQuotes)
}

main().catch(e => console.error(e))