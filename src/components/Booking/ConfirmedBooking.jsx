import React, { useEffect, useState } from "react";
import { getFromLocalStorage } from "./BookingForm";

export function ConfirmedBooking() {
    const [booking,setBooking] = useState('');

    useEffect(() => {
        const book = getFromLocalStorage('booking');
        setBooking(book);
    },[]);


    return (
        <div>
            <h3>Booking Confirmation</h3>
            <p>Thank you for booking. Your booking is confirmed at: {booking}</p>
        </div>
    );
}