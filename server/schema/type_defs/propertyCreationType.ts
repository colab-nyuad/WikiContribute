import {GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'AddProperty',
  description: 'This represents a Wikidata property',
  fields: () => ({
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    id: { type: GraphQLString },
    property: { type: GraphQLString },
    value: { type: GraphQLString },
  })
})