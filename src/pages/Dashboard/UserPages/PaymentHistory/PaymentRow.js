import React from 'react';

const PaymentRow = ({ index, payment }) => {
    const { email, price, date, transactionId } = payment;

    return (
        <tr className='text-secondary font-medium'>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>${price.toFixed(2)}</td>
            <td>{date}</td>
            <td>{transactionId}</td>
        </tr>
    );
};

export default PaymentRow;