import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';

const AllUsers = () => {

    const { data: users, isLoading, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className=' h-screen bg-[#F6F6F6] pb-20 pt-10'>
            <SectionTitle subHeading={'How Many?'} heading={'Manage All Users'}></SectionTitle>
            <div className='w-11/12 lg:w-3/4 mx-auto bg-white p-5 lg:p-10'>
                <div className='mb-5'>
                    <h2 className='lg:text-xl uppercase font-bold font-family text-secondary'>All Users: {users?.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table uppercase font-family">
                        <thead className='bg-[#D1A054] text-white'>
                            <tr className='font-normal'>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllUsers;