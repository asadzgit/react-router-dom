import { useParams } from "react-router-dom"; // useParams hook from router

export const UserDetails = () => {
  const params = useParams() // it returns an object of key-value pairs
  const userId = params.userId
  // const userId = useParams() // it can replace above two lines
  return <h1>Details about {userId}</h1>;
};
