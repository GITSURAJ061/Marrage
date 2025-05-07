import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';
import AppreciationWall from './components/AppreciationWall';
import Minvitation from './components/Minvitation';
import InvitationCard from './components/InvitationCard';
function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen text-white">
      <Header />
      <CountdownTimer />
      <Minvitation />
      <InvitationCard />
      <About />
      <Events />
     {/* <Gallery /> */} 
      <AppreciationWall />
      <Footer />
    </div>
  );
}

export default App;