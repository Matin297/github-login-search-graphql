import { useState } from 'react';
import { client } from './config'

import LoginSearchForm from './components/LoginSearchForm';
import UserDetails from './components/UserDetails';
import Repos from './components/Repos';

import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});

  const onSearchLogin = login => {
    setLoading(true);
    setError(null);
    client
      .request(query, { login })
      .then(setUserData)
      .then(() => setLoading(false))
      .catch(err => setError(err))
      .then(() => setLoading(false));
  }

  return (
    <div className="App">
      <LoginSearchForm onSearchLogin={onSearchLogin} />
      {loading && <p> Loading... </p>}
      {error && <pre>{JSON.stringify(error, null, 3)}</pre>}
      {
        !error && !loading && userData.user &&
          <>
            <UserDetails {...userData.user} />
            <Repos {...userData.user.repositories} />
          </>
      }
    </div>
  );
}

export default App;

const query = `
  query findRepos($login:String!) {
    user(login:$login) {
      login
      name
      location
      avatarUrl
      repositories(first:100) {
        totalCount
        nodes {
          name
          id
        }
      }
    }
  }
`;
