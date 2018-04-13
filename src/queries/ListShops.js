import gql from 'graphql-tag'

export default gql`
  query listShops {
    listShops{
      items {
        id
        name
        description
      }
    }
  }
`
