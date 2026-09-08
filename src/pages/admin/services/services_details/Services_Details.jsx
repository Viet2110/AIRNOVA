import React, { use, useState } from 'react';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import { addDocument, updateDocument } from '../../../../services/firebasesService';
import { serviceDetailType } from '../../../../types/Types';
import DialogDetail from './DialogDetail';
import TableDetail from './TableDetail';

function Services_Details(props) {
    const [open, setOpen] = useState(false);
    const [serviceDetail, setServiceDetail] = useState(serviceDetailType);
    const [error, setError] = useState(serviceDetailType);
    const [search, setSearch] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
        setServiceDetail(serviceDetailType);
        setError(serviceDetailType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickInput = (e) => {
        setServiceDetail({ ...serviceDetail, [e.target.name]: e.target.value })
    }

    const handleImge = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setServiceDetail({ ...serviceDetail, imgUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    const validation = () => {
        const newError = {};
        newError.name = serviceDetail.name ? "" : "Please enter your name";
        setError(newError);
        return Object.values(newError).some(p => p !== ""); /// true => có lỗi
    }

    const addserviceDetail = async () => {
        if (validation()) {
            return;
        }
        if (serviceDetail.id) {
            await updateDocument("ServiceDetails", serviceDetail);
        } else {
            await addDocument("ServiceDetails", serviceDetail);
        }
        handleClose();
    }
    const handleEdit = (row) => {
        handleClickOpen();
        setServiceDetail(row);
    }
    const handleSearch = (i) => {
        setSearch(i.target.value)
    }
    return (
        <div className='p-5'>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List Service_Detail"} />
            <DialogDetail error={error} addserviceDetail={addserviceDetail} serviceDetail={serviceDetail} handleImge={handleImge} handleClickInput={handleClickInput} open={open} handleClose={handleClose} />
            <TableDetail handleEdit={handleEdit} search={search} />
        </div>
    );
}

export default Services_Details;