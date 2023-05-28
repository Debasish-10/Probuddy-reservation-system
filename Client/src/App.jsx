import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ReservationList from './screens/ReservationList/ReservationList';
import NewReservation from './screens/NewReservation/NewReservation';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  function renderForm() {
    if (currentTab === 0) return <ReservationList />;
    else if (currentTab === 1) return <NewReservation />;
  }
  return (
    <>
      <ToastContainer />
      <div className='reservation-system-page'>
        <div className='header'>
          <h2 style={{ textAlign: 'center' }}>ProBuddy Reservation System</h2>
        </div>
        <div className='tabs-display'>
          <button
            className={currentTab === 0 ? 'button-styling' : 'not-selected-tab'}
            onClick={() => setCurrentTab(0)}
          >
            Reservation List
          </button>
          <button
            className={currentTab === 1 ? 'button-styling' : 'not-selected-tab'}
            onClick={() => setCurrentTab(1)}
          >
            New Reservation
          </button>
        </div>
        {renderForm()}
      </div>
    </>
  );
}

export default App;
