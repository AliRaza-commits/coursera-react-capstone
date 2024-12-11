import { useState } from "react";
import { BookingPage } from "../Booking/BookingPage";

export function Main() {
    const [availableTimes, setAvailableTimes] = useState(['18:00','19:00','20:00','21:00','22:00','23:00']);

    return (<>
    <BookingPage availableTimes={availableTimes} />
    </>);
}