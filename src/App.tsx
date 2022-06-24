//import { gql, useQuery } from "@apollo/client";

import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

// const GET_LESSONS_QUERY = gql`
//   query{
//     lessons{
//       id
//       title
//     }
//   }
// `;

// interface Lessons {
//   id: string;
//   title: string;
// }

function App() {
  //Fazendo a requisição GraphQL
  //const { data } = useQuery<{lessons: Lessons[]}>(GET_LESSONS_QUERY);

  //Fazendo a requisição do zero
  // useEffect(()=>{
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(response => {
  //     console.log(response.data)
  //   });
  // },[])

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App
