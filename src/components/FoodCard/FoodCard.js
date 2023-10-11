import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { image, name, price, recipe, _id } = item;

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (food) => {

        const cartItem = {
            menuItemId: _id,
            image,
            name,
            price,
            email: user?.email
        };

        if (user && user?.email) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        swal({
                            icon: 'success',
                            title: 'Food added on the cart.',
                            timer: 2000
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    };

    return (
        <div className="card bg-base-100 shadow-lg rounded-md">
            <figure>
                <img src={image} alt="Shoes" className='w-full' />
            </figure>
            <p className=' rounded-full font-medium bg-secondary text-white absolute right-2 top-2 py-1 px-3'>${price}</p>
            <div className="card-body text-center pt-5">
                <h2 className="card-title flex justify-center capitalize text-secondary ">{name}</h2>
                <p className='text-sm text-accent'>{recipe}</p>
                <div className='flex justify-center mt-2 group'>
                    <button
                        onClick={() => handleAddToCart(item)}
                        style={{ background: 'var(--Dark-07, #F3F3F3)' }}
                        className='add-cart-btn btn btn-outline border-0 border-b-2 text-primary px-10 group-hover:text-primary group-hover:border-primary'
                    >
                        Add to cart<FiShoppingCart className=' text-xl'></FiShoppingCart>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;