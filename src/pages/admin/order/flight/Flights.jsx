import React, { useState } from 'react';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import { flightType } from '../../../../types/Types';
import { addDocument, updateDocument } from '../../../../services/firebasesService';
import Dialog_Flights from './Dialog_Flights';
import TableFlights from './Table_Flights';

function Flights(props) {
    const [open, setOpen] = useState(false);
    const [flight, setFlights] = useState(flightType);
    const [error, setError] = useState(flightType);
    const [search, setSearch] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
        setFlights(flightType);
        setError(flightType);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickInput = (e) => {
        setFlights({ ...flight, [e.target.name]: e.target.value });
    }
    const validation = () => {
        const newError = {};
        newError.airline_id = flight.airline_id ? "" : "Please enter your Id_Airline";
        newError.aircraft_id = flight.aircraft_id ? "" : "Please enter your Id_Airline";
        newError.from_airport = flight.from_airport ? "" : "Please enter your From_Airport";
        newError.to_airport = flight.to_airport ? "" : "Please enter your To_airport";
        newError.departure_time = flight.departure_time ? "" : "Please enter your Departure_time";
        newError.arrival_time = flight.arrival_time ? "" : "Please enter your Arrival_time";
        newError.discount = flight.discount ? "" : "Please enter your Discount";
        setError(newError);
        return Object.values(newError).some(p => p !== ""); // true => co loi
    }
    const addflight = async () => {
        if (validation()) {
            return;
        }
        if (flight.id) {
            await updateDocument("Flights", flight);
        } else {

            await addDocument("Flights", flight);
        }
        handleClose();
    }
    const handleEdit = (row) => {
        handleClickOpen()
        setFlights(row);
    }

    const handleSearch = (i) => {
        setSearch(i.target.value)
    }
    return (
        <div className='p-5'>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List flights"} />
            <Dialog_Flights error={error} addflight={addflight} flight={flight} open={open} handleClose={handleClose} handleClickInput={handleClickInput} />
            <TableFlights search={search} handleEdit={handleEdit} />
        </div>
    );
}

export default Flights;