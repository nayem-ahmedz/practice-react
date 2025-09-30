import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export default function MarksChart() {
    const marks = [
        {
            "id": 1,
            "name": "Rahim",
            "bangla": 78,
            "english": 85,
            "math": 90
        },
        {
            "id": 2,
            "name": "Karim",
            "bangla": 66,
            "english": 70,
            "math": 75
        },
        {
            "id": 3,
            "name": "Ayesha",
            "bangla": 92,
            "english": 88,
            "math": 95
        },
        {
            "id": 4,
            "name": "Fatema",
            "bangla": 81,
            "english": 79,
            "math": 85
        },
        {
            "id": 5,
            "name": "Sakib",
            "bangla": 55,
            "english": 60,
            "math": 58
        }
    ];
    return (
        <div>
            <LineChart width={500} height={500} data={marks}>
                <Line dataKey='bangla' />
                <Line dataKey={'english'} />
                <Line dataKey='math' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
}