import React, { useState } from 'react';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import DialogAircrafts from './DialogAircraft';
import { aircraftsType } from '../../../../types/Types';
import TableAircraft from './TableAircraft';
import { addDocument, updateDocument } from '../../../../services/firebasesService';

function Aircrafts(props) {
    const [open, setOpen] = useState(false);
    const [aircraft, setAircrafts] = useState(aircraftsType);
    const [error, setError] = useState(aircraftsType);
    const [search, setSearch] = useState("");


    const handleClickOpen = () => {
        setOpen(true);
        setAircrafts(aircraftsType);
        setError(aircraftsType);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickInput = (e) => {
        setAircrafts({ ...aircraft, [e.target.name]: e.target.value });
    }
    const validation = () => {
        const newError = {};
        newError.name = aircraft.name ? "" : "Please enter your name";
        newError.airline_id = aircraft.airline_id ? "" : "Please enter your Id-Airline";
        newError.airport_id = aircraft.airport_id ? "" : "Please enter your Id-Airport";
        setError(newError);
        return Object.values(newError).some(p => p !== ""); // true => co loi
    }
    const addAircraft = async () => {
        if (validation()) {
            return;
        }
        if (aircraft.id) {
            await updateDocument("Aircrafts", aircraft);
        } else {

            await addDocument("Aircrafts", aircraft);
        }
        handleClose();
    }
    const handleEdit = (row) => {
        handleClickOpen()
        setAircrafts(row);
    }

    const handleSearch = (i) => {
        setSearch(i.target.value)
    }
    return (
        <div className='p-5'>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List Aircrafts"} />
            <DialogAircrafts error={error} addAircraft={addAircraft} aircraft={aircraft} open={open} handleClose={handleClose} handleClickInput={handleClickInput} />
            <TableAircraft search={search} handleEdit={handleEdit} />
        </div>
    );
}

export default Aircrafts;