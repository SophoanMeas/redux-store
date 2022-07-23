const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type: Category{
        _id: ID
        name: String
    }

    type Product{
        _id: ID
        name: String
        description: string
        image: String
        quantity: integrate
        price: parseFloat
        category: Category
    }

    type Order{
        _id: ID
        purchaseDate: string
        products: [Product]
    }

    type User{
        _id: ID
        firstName: string
        lastName: String
        email: String
        orders: [Order]
    }

    type Checkout{
        session: ID
    }

    type Auth{
        token: ID
        user: User
    }

    type Query{
        categories: [Category]
        products(product: ID, name: String): [Product]
        product(_idL ID!): Product
        user: user
        order(_id: ID!): Order
        checkout(products: [ID]!): Checkout
    }

    type Mutation{
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`

module.exports = typeDefs