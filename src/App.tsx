import './styles/App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MailContent from './components/MailContent';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className='flex grow-1 h-full pt-4'>
        <SideBar />
        <MailContent/>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
