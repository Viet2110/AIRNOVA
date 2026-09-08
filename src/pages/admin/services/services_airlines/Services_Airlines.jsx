import React, { useState } from 'react';
import { serviceAirlineType } from '../../../../types/Types';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import { addDocument, updateDocument } from '../../../../services/firebasesService';
import DialogAirline from './Dialog_Airline';
import TableServiceAirline from './TableServiceAirline';



function Services_Airlines(props) {
    const [open, setOpen] = useState(false);
    const [service_Airline, setService_Airline] = useState(serviceAirlineType);
    const [error, setError] = useState(serviceAirlineType);
    const [search, setSearch] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
        setService_Airline(serviceAirlineType);
        setError(serviceAirlineType);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickInput = (e) => {
        setService_Airline({ ...service_Airline, [e.target.name]: e.target.value });
    }
    const validation = () => {
        const newError = {};
        newError.name = service_Airline.name ? "" : "Please enter your Name";
        newError.airline_id = service_Airline.airline_id ? "" : "Please enter your Airline";
        newError.price = service_Airline.price ? "" : "Please enter your Price";
        newError.list_service_id = service_Airline.list_service_id.length > 0 ? "" : "Please enter your Service Detail";
        setError(newError);
        return Object.values(newError).some(p => p !== ""); // true => co loi
    }
    const addService_Airline = async () => {
        if (validation()) {
            console.log(error);
            
            return;
        }
        if (service_Airline.id) {
            await updateDocument("ServiceAirlines", service_Airline);
        } else {

            await addDocument("ServiceAirlines", service_Airline);
        }
        handleClose();
    }
    const handleEdit = (row) => {
        handleClickOpen()
        setService_Airline(row);
    }

    const handleSearch = (i) => {
        setSearch(i.target.value)
    }

    const handleChoose = (id) => {
        setService_Airline(pre => {
            return {...service_Airline, list_service_id: toggleAirline(pre.list_service_id, id) }
        })
    }

    const toggleAirline = (data, id) => {
        return data.includes(id) ? data.filter(p => p != id) : [...data, id]
    }
    return (
        <div className='p-5'>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List Service_Airlines"} />
            <DialogAirline handleChoose={handleChoose} error={error} addService_Airline={addService_Airline} service_Airline={service_Airline} open={open} handleClose={handleClose} handleClickInput={handleClickInput} />
            <TableServiceAirline handleEdit={handleEdit} search={search} />
        </div>
    );
}


export default Services_Airlines;