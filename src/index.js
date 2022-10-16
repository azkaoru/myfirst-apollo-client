import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql }  from '@apollo/client'
import App from './App';

const client = new ApolloClient({
	uri: 'https://flyby-gateway.herokuapp.com/',
	cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)

