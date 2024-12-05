const student = [
    {
        name: 'Alice',
        marks: 58
    },
    {
        name: 'Bob',
        marks: 85
    },
    {
        name: 'Charlie',
        marks: 92
    },
    {
        name: 'David',
        marks: 45
    }
]

function processStudents() {
    const above60 = student.filter(num => num.marks>60);
    const sortedAbove60 = above60.sort((a,b) => b.marks-a.marks);
    const studentAbove60 = sortedAbove60.map(ele => ele.name);

    return studentAbove60;
}

console.log(processStudents());