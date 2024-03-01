import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Booking from '../pages/Booking';

export default function Root() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booking" element={<Booking />} />
    </Routes>
  );
}