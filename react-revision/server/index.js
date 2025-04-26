import express from "express"
import cors from 'cors'
const app = express();

const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:5173'
}));
console.log(PORT);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.get("/api/students", (req, res) => {


    const students = [
        {
            roll_no: 1,
            name: "ALi",
            CGPA: 3.12
        },
        {
            roll_no: 2,
            name: "Hasan",
            CGPA: 3.82
        },
        {
            roll_no: 3,
            name: "Ahmed",
            CGPA: 3.92
        },
        {
            roll_no: 4,
            name: "Aslam",
            CGPA: 3.02
        },
        {
            roll_no: 5,
            name: "Arham",
            CGPA: 3.42
        },
    ]

    if (req.query.search) {
        const searchTerm = req.query.search.toLowerCase(); // convert search term
        const filterStudents = students.filter((std) =>
            std.name.toLowerCase().includes(searchTerm) // compare in lower case
        );
        res.send(filterStudents);
        return;
    }
    setTimeout(() => {
        res.send(students)
    }, 2000)
})

app.listen(PORT, () => {
    console.log(`SERVER is running on port ${PORT}`);
})