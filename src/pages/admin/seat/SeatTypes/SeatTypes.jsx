import React, { useState } from 'react';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import { seatTypesType } from '../../../../types/Types';
import { addDocument, updateDocument } from '../../../../services/firebasesService';
import DialogSeatTypes from './DialogSeatTypes';
import TableSeatTypes from './TableSeatTypes';

function SeatTypes(props) {
    const [open, setOpen] = useState(false);
    const [seatType, setSeatType] = useState(seatTypesType);
    const [error, setError] = useState(seatTypesType);
    const [search, setSearch] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
        setSeatType(seatTypesType);
        setError(seatTypesType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickInput = (e) => {
        setSeatType({ ...seatType, [e.target.name]: e.target.value })
    }

    const handleImge = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSeatType({ ...seatType, imgUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    const validation = () => {
        const newError = {};
        newError.name = seatType.name ? "" : "Please enter your name";
        newError.price = seatType.price ? "" : "Please enter your price";
        setError(newError);
        return Object.values(newError).some(p => p !== ""); /// true => có lỗi
    }

    const addSeatType = async () => {
        if (validation()) {
            return;
        }
        if (seatType.id) {
            await updateDocument("SeatTypes", seatType);
        } else {
            await addDocument("SeatTypes", seatType);
        }
        handleClose();
    }
    const handleEdit = (row) => {
        handleClickOpen();
        setSeatType(row);
    }
    const handleSearch = (i) => {
        setSearch(i.target.value)
    }
    return (
        <div className='p-5'>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List SeatType"} />
            <DialogSeatTypes error={error} addSeatType={addSeatType} seatType={seatType} handleImge={handleImge} handleClickInput={handleClickInput} open={open} handleClose={handleClose} />
            <TableSeatTypes handleEdit={handleEdit} search={search} />
        </div>
    );
}

export default SeatTypes;