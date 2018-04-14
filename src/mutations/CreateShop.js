import gql from 'graphql-tag'

export default gql`
  mutation createShop(
    $id: ID!
    $name: String!
    $description: String!
  ){
    createShop(input: {
      id: $id, name: $name, description: $description
    }){
      id
      name
      description
    }
  }
`
