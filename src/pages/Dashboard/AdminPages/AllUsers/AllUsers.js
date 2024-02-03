import React, { useRef, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import UserRow from './UserRow';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { IoSearch } from 'react-icons/io5';
import useTitle from '../../../../hooks/useTitle';

const AllUsers = () => {
    useTitle('All Users');
    const [axiosSecure] = useAxiosSecure();
    const [search, setSearch] = useState('');
    const searchRef = useRef();

    const { data: users, isLoading, error, refetch } = useQuery({
        queryKey: ['users', search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?search=${search}`);
            return res.data;
        }
    });

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    };

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='bg-[#F6F6F6] py-10 lg:p-10 min-h-screen'>
            <SectionTitle subHeading={'How Many?'} heading={'Manage All Users'}></SectionTitle>
            <div className='w-11/12 lg:w-3/4 mx-auto bg-white p-5 lg:p-10'>
                <div className='lg:flex items-center justify-between mb-3 lg:mb-5'>
                    <h2 className='text-lg lg:text-xl uppercase font-bold font-family text-secondary'>All Users: {users?.length}</h2>
                    <div className="join w-full lg:w-3/5 mt-1 lg:mt-0">
                        <input
                            type='text'
                            ref={searchRef}
                            className="input input-sm w-full rounded input-bordered join-item focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="Search..."
                        />
                        <button
                            className="btn btn-sm join-item rounded bg-primary hover:bg-primary text-white"
                            onClick={handleSearch}
                        >
                            <IoSearch className='text-xl' />
                        </button>
                    </div>
                </div>
                <div className='mb-1'>
                    {
                        search && <h2 className='text-lg font-family text-right'>Matching Results: {users?.length}</h2>
                    }
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
        </section>
    );
};

export default AllUsers;