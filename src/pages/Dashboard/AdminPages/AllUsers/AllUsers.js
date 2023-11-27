import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import UserRow from './UserRow';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users, isLoading, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='max-h-screen'>
            <div className='bg-[#F6F6F6] py-10 lg:p-10 h-full'>
                <SectionTitle subHeading={'How Many?'} heading={'Manage All Users'}></SectionTitle>
                <div className='w-11/12 lg:w-3/4 mx-auto bg-white p-5 lg:p-10'>
                    <div className='mb-3'>
                        <h2 className='text-lg lg:text-xl uppercase font-bold font-family text-secondary'>All Users: {users?.length}</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className='bg-[#D1A054] text-white uppercase font-family'>
                                <tr className='font-normal'>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name & Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, index) => <UserRow
                                        key={user._id}
                                        index={index}
                                        user={user}
                                        refetch={refetch}
                                    ></UserRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllUsers;