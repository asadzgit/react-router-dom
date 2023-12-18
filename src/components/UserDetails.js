import { useParams } from "react-router-dom";
// useParams hook
export const UserDetails = () => {
  const params = useParams() // it returns an object of key-value pairs
  const userId = params.userId;
  return <h1>Details about {userId}</h1>;
};
