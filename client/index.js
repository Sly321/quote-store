const {
	typeDefs
} = require('../database/generated/prisma-client/prisma-schema')

const {
	GraphQLServer
} = require("graphql-yoga")

const {
	Prisma
} = require('prisma-binding')


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

server.start(() => console.log('QuoteStore is running on localhost:4000'))