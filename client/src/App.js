import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main';
import { verifyUser } from './services/auth';



export default function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(()=> {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser();
    setCurrentUser(userData);
  }

  return (
    <>
      <div>
        <Header
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          />
        <Main setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />
      </div>
      </>
  );
}

