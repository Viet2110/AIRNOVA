import React, { useState } from 'react';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import DialogAirport from './DialogAirport';
import { airportType } from '../../../../types/Types';
import { addDocument, updateDocument } from '../../../../services/firebasesService';
import TableAirport from './TableAirport';

function Airports(props) {
    const [open, setOpen] = useState(false);
    const [airport, setAirport] = useState(airportType);
    const [error, setError] = useState(airportType);
    const [search, setSearch] = useState("");


    const handleClickOpen = () => {
        setOpen(true);
        setAirport(airportType);
        setError(airportType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickInput = (e) => {
        setAirport({ ...airport, [e.target.name]: e.target.value });
    }

    const validation = () => {
        const newError = {};
        newError.name = airport.name ? "" : "Please enter your name";
        newError.country_id = airport.country_id ? "" : "Please enter your name";
        newError.city_id = airport.city_id ? "" : "Please enter your name";
        setError(newError);
        return Object.values(newError).some(p => p !== ""); // true => co loi
    }
    const addAirport = async () => {
        if (validation()) {
            return;
        }
        if (airport.id) {
            await updateDocument("Airports", airport);
        } else {
            await addDocument("Airports", airport);
        }
        handleClose();
    }

    const handleEdit = (row) => {
        handleClickOpen();
        setAirport(row);
    }
    const handleSearch = (i) => {
        setSearch(i.target.value)
    }
    return (
        <div className='p-5'>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List Airports"} />
            <DialogAirport error={error} airport={airport} addAirport={addAirport} handleClickInput={handleClickInput} open={open} handleClose={handleClose} />
            <TableAirport handleEdit={handleEdit} search={search}/>
        </div>
    );
}

export default Airports;