import React, { use, useState } from 'react';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import DialogAirline from './DialogAirline';
import { airlinesType } from '../../../../types/Types';
import { addDocument, updateDocument } from '../../../../services/firebasesService';
import TableAirline from './TableAirline';

function Airlines(props) {
    const [open, setOpen] = useState(false);
    const [airline, setAirline] = useState(airlinesType);
    const [error, setError] = useState(airlinesType);
    const [search, setSearch] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
        setAirline(airlinesType);
        setError(airlinesType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickInput = (e) => {
        setAirline({ ...airline, [e.target.name]: e.target.value })
    }

    const handleImge = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAirline({ ...airline, imgUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    const validation = () => {
        const newError = {};
        newError.name = airline.name ? "" : "Please enter your name";
        setError(newError);
        return Object.values(newError).some(p => p !== ""); /// true => có lỗi
    }

    const addAirline = async () => {
        if (validation()) {
            return;
        }
        if (airline.id) {
            await updateDocument("Airlines", airline);
        } else {
            await addDocument("Airlines", airline);
        }
        handleClose();
    }
    const handleEdit = (row) => {
        handleClickOpen();
        setAirline(row);
    }
    const handleSearch = (i) => {
        setSearch(i.target.value)
    }
    return (
        <div className='p-5'>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List Airlines"} />
            <DialogAirline error={error} addAirline={addAirline} airline={airline} handleImge={handleImge} handleClickInput={handleClickInput} open={open} handleClose={handleClose} />
            <TableAirline handleEdit={handleEdit} search={search} />
        </div>
    );
}

export default Airlines;