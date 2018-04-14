 import gql from 'graphql-tag'

 export default gql`
   subscription onCreateShop{
     onCreateShop {
       id
       name
       description
     }
   }
 `
