import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searcParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searcParams.get('filter') === 'active'
  return (
    <>
      <div>Users</div>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({filter: 'active' })}>Active Users</button>
        <button onClick={() => setSearchParams({})}>Reset Filters</button>
      </div>
      {
        showActiveUsers ? (
          <h2>showing active users</h2>
        ) : (
          <h2>showing all users</h2>
        )
      }
    </>
  )
};
