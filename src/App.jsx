import './App.css';
import { Homepage } from './components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { BookingPage } from './components/Booking/BookingPage';
import { ConfirmedBooking } from './components/Booking/ConfirmedBooking';

function App() {
  return (
       <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={ <Homepage/> } />
            <Route path='/booking' element={ <BookingPage/> } />
            <Route path='/booking-confirmation' element={ <ConfirmedBooking/> } />
          </Route>
        </Routes>
       </Router>
  );
}


export default App;
