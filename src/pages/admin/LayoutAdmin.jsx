import React from 'react';
import NavbarAdmin from '../../components/common/admin/NavbarAdmin';
import HeaderAdmin from '../../components/common/admin/HeaderAdmin';
import SearchAdmin from '../../components/common/admin/SearchAdmin';
import NoelBackground from '../../components/common/admin/NoelBackground';
import AdminRouters from '../../routers/AdminRouters';

function LayoutAdmin(props) {
    return (
        <>
            <NoelBackground />
            <div className='lg:flex'>
                <NavbarAdmin />
                <div className='flex-1 lg:h-screen overflow-auto'>
                    <HeaderAdmin />
                    <div className="p-5">
                    <AdminRouters />
                    </div>
                </div>
            </div>
        </>

    );
}

export default LayoutAdmin;