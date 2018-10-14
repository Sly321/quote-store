const {
	prisma
} = require('../database/generated/prisma-client')

const {
	typeDefs
} = require('../database/generated/prisma-client/prisma-schema')

const {
	GraphQLServer
} = require("graphql-yoga")

const {
	Prisma
} = require('prisma-binding')

// A `main` function so that we can use async/await
async function main() {

	// Create a new user called `Alice`
	const newQuote = await prisma.createQuote({
		text: "That's what I do, I drink and I know things.",
		from: "Tyrion Lannister"
	})

	// Read all users from the database and print them to the console
	const allQuotes = await prisma.quotes()
	console.log(allQuotes)
}

// main().catch(e => console.error(e))


const resolvers = {
	Query: {
		quotes: (root, args, ctx, info) => ctx.prisma.query.quotes({}, info),
	},
	Mutation: {
		createQuote: (root, args, ctx, info) =>
			ctx.prisma.mutation.createQuote({
				data: {
					text: args.text,
					from: args.from
				}
			}, info),
	},
}

const server = new GraphQLServer({
	typeDefs,
	resolvers,
	context: req => ({
		...req,
		prisma: new Prisma({
			typeDefs: typeDefs,
			endpoint: 'http://localhost:4466',
			debug: true,
		}),
	}),
})

server.start(() => console.log('Server is running on localhost:4000'))