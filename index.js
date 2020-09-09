import { Apolloclient, InMemoryCache, ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';


client.query({
    query: gql`
    query GetRates {
        rates(currency: "USD") {
            currency
        }
    }
  `  
})
.then(result => console.log(result));

const client = new ApolloClient ({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
});

