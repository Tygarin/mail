import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MailContent from './components/MailContent';
import Modal from './components/Modal';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className='flex grow-1 h-full pt-4'>
        <SideBar />
        <MailContent/>
      </div>
    </div>
  );
}

export default App;
