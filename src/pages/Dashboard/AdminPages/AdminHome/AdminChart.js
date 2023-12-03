import React from 'react';
import { FaSquareCheck } from 'react-icons/fa6';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie } from 'recharts';

const AdminChart = () => {
    const categories = [
        {
            id: 1,
            category: 'coffee',
            color: 'text-[#0088FE]'
        },
        {
            id: 2,
            category: 'dessert',
            color: 'text-[#00C49F]'
        },
        {
            id: 3,
            category: 'pizza',
            color: 'text-[#FFBB28]'
        },
        {
            id: 4,
            category: 'burger',
            color: 'text-[#FF8042]'
        },
        {
            id: 5,
            category: 'soup',
            color: 'text-[red]'
        },
        {
            id: 6,
            category: 'salad',
            color: 'text-[pink]'
        },
    ];

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data = [
        {
            name: 'Coffee',
            value: 100,
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Dessert',
            value: 80,
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Pizza',
            value: 50,
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Burger',
            value: 40,
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Soup',
            value: 60,
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Salad',
            value: 40,
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-3 rounded'>
            <div className='bg-white'>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 50,
                        right: 45,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
            <div className='bg-white'>
                <div className='grid grid-cols-3 gap-2 mt-8 mx-auto'>
                    {
                        categories.map((category) => <p
                            className={`${category.color} capitalize font-medium font-family flex items-center justify-center`}
                            key={category.id}
                            category={category}
                        ><FaSquareCheck className='text-lg mr-1'/> {category.category}</p>)
                    }
                </div>
                <PieChart width={450} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        // labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </section>
    );
};

export default AdminChart;