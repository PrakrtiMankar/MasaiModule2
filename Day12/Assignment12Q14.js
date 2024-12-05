const employee =  [
    { 
        name: "Alice", 
        tasksCompleted: 8, 
        rating: 4.7 
    },
    { 
        name: "Bob", 
        tasksCompleted: 4, 
        rating: 4.0 
    },
    { 
        name: "Charlie", 
        tasksCompleted: 6, 
        rating: 3.5 
    },
    { 
        name: "David", 
        tasksCompleted: 10, 
        rating: 4.9 
    },
    { 
        name: "Eve", 
        tasksCompleted: 7, 
        rating: 2.8 

    }  
];

const completed5Task = employee.filter(i => i.tasksCompleted>=5);

const finalEmp = completed5Task.map((ele,i) => ({
    name: ele.name,
    performance: ele.rating >= 4.5 ? "excellent" : (4.5 > ele.rating && ele.rating >= 3) ? "Good" : "Needs Improvement"  
}))

const order = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
};

finalEmp.sort((a, b) => 
    order[b.performance] - order[a.performance]
);
console.log(completed5Task, finalEmp);