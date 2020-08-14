import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main';
import { verifyUser } from './services/auth';
import Footer from './components/Footer'
import './App.css'



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
      <div className="whole-div">
        <Header
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          />
        <Main setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />
        <Footer />
      </div>
      </>
  );
}

