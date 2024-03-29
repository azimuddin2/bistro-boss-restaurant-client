import React from 'react';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import { FiCheckCircle } from 'react-icons/fi';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { BiImageAdd } from 'react-icons/bi';
import useAuth from '../../hooks/useAuth';
import userImg from '../../assets/Images/others/user.png';
import SectionTitle from '../SectionTitle/SectionTitle';
import swal from 'sweetalert';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useTitle from '../../hooks/useTitle';

const EditProfile = () => {
    useTitle('Update Profile');
    const [isAdmin] = useAdmin();
    const [axiosSecure] = useAxiosSecure();
    const { user, updateUserProfile } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const imgHostingToken = process.env.REACT_APP_Image_Upload_token;
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imgHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, phone } = data;

                    //TODO: firebase save
                    handleUpdateUserProfile(name, imgURL, phone);

                    //TODO: user information database save
                    const updateInfo = {
                        imgURL,
                        name,
                        email: user?.email,
                        phone
                    };
                    axiosSecure.put('/users', updateInfo)
                        .then(result => {
                            if (result.data.modifiedCount) {
                                reset();
                                swal({
                                    title: "Profile updated successfully",
                                    icon: "success",
                                    timer: 6000,
                                });
                                {
                                    isAdmin ?
                                        navigate('/dashboard/admin-home')
                                        :
                                        navigate('/dashboard/user-home')
                                }
                            }
                        })
                }
            })
    };

    const handleUpdateUserProfile = (name, imgURL, phone) => {
        const profile = {
            displayName: name,
            photoURL: imgURL,
            phoneNumber: phone,
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                swal({
                    title: "Oops...",
                    text: `${error.message}`,
                    icon: "error",
                    button: "Try again",
                });
            })
    };

    return (
        <section className='my-10'>
            <SectionTitle subHeading={'My Information'} heading={'Update Profile'}></SectionTitle>
            <div className='px-5 py-8 lg:p-12 w-11/12 lg:w-1/2 mx-auto bg-[#F3F3F3]'>
                <div className="avatar mb-8 flex justify-center">
                    <div className="w-28 rounded-full ring ring-primary ring-offset-2">
                        {
                            user.photoURL ?
                                <img src={user.photoURL} alt='userImg' className='w-full rounded-full' />
                                :
                                <img src={userImg} alt='userImg' className='w-full rounded-full' />
                        }
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label
                            htmlFor='image'
                            className="input w-full h-24 cursor-pointer text-center pt-4 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        >
                            <span className="label-text text-accent font-medium">Upload Photo</span>
                            <div className=' flex justify-center items-center'>
                                <BiImageAdd className='text-4xl text-accent'></BiImageAdd>
                            </div>
                        </label>
                        <input
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is required',
                                },
                            })}
                            id="image"
                            type="file"
                            className="hidden"
                        />
                        <label className="label pt-1">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.image.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name*</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required',
                                }
                            })}
                            type='text'
                            defaultValue={user?.displayName}
                            placeholder="Enter Name"
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <label className="label pt-1">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email*</span>
                        </label>
                        <input
                            {...register("email")}
                            type='email'
                            defaultValue={user?.email}
                            disabled
                            style={{ background: '#fff' }}
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <div className="form-control mb-5 mt-2">
                        <label className="label">
                            <span className="label-text font-semibold">Phone Number*</span>
                        </label>
                        <input
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone Number is required',
                                }
                            })}
                            type='text'
                            placeholder="Enter Phone Number"
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <label className="label pt-1">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.phone.message}</span>}
                        </label>
                    </div>
                    <div className='text-center'>
                        <Button>Update Profile<FiCheckCircle className='text-xl'></FiCheckCircle></Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EditProfile;