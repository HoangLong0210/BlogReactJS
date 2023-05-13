import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import React from "react";
import styled from "styled-components";

const HomePageStyles = styled.div``;

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default HomePage;
