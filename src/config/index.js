import { GraphQLClient } from 'graphql-request';

// Replace with your own access_token
const access_token = '<PERSONAL ACCESS TOKEN>';

const endpoint = "https://api.github.com/graphql";
const client = new GraphQLClient(
  endpoint, 
  {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  }
)

export {
    client
};
