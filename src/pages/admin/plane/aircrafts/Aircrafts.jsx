import React, { useState } from 'react';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import DialogAircrafts from './DialogAircraft';
import { aircraftsType } from '../../../../types/Types';
import TableAircraft from './TableAircraft';
import { addDocument, updateDocument } from '../../../../services/firebasesService';

function Aircrafts(props) {
    const [open, setOpen] = useState(false);
    const [aircraft, setAircraft] = useState(aircraftsType);
    const [error, setError] = useState(aircraftsType);
    const [search, setSearch] = useState("");

    console.log(aircraft);
    
    const handleClickOpen = () => {
        setOpen(true);
        setAircraft(aircraftsType);
        setError(aircraftsType);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickInput = (e) => {
        setAircraft({ ...aircraft, [e.target.name]: e.target.value });
    }
    const validation = () => {
        const newError = {};
        newError.name = aircraft.name ? "" : "Please enter your name";
        newError.airline_id = aircraft.airline_id ? "" : "Please enter your Id-Airline";
        newError.airport_id = aircraft.airport_id ? "" : "Please enter your Id-Airport";
        newError.rows = aircraft.rows ? "" : "Please enter your Rows";
        newError.columns = aircraft.columns ? "" : "Please enter your Columns";
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
        setAircraft(row);
    }
    
    const handleSearch = (i) => {
        setSearch(i.target.value)
    }

    const handleChoose = (id) => {
        setService_Airline(pre => {
            return { ...aircraft, list_service_id: toggleAirline(pre.list_service_id, id) }
        })
    }
    const handleChair = (index, id) => {
        console.log(aircraft);  
        setAircraft(pre => {
            return { ...aircraft, listChair: handleToggle(pre.listChair, index, id) }
        })
    }

    const handleToggle = (array, index, id) => {
        console.log(array);
        return array.find(p => p.index == index) ? array.find(p => p.index == index && p.id_seatype == id) ? array.filter(p => p.index != index) : array.map(p => p.index == index ? { index: index, id_seatype: id } : p) : [...array, { index: index, id_seatype: id }];
    }
    return (
        <div className='p-5'>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List Aircrafts"} />
            <DialogAircrafts handleChair={handleChair} handleChoose={handleChoose} error={error} addAircraft={addAircraft} aircraft={aircraft} open={open} handleClose={handleClose} handleClickInput={handleClickInput} />
            <TableAircraft search={search} handleEdit={handleEdit}  />
        </div>
    );
}

export default Aircrafts;

