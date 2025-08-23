const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    active: 2,
    newTask: 1,
    completed: 2,
    failed: 1,
    tasks: [
      {
        taskTitle: "Frontend Module",
        taskDescription: "Finish the homepage layout",
        date: "2025-08-20",
        category: "High",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "API Integration",
        taskDescription: "Connect login API",
        date: "2025-08-22",
        category: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Bug Fix",
        taskDescription: "Fix navbar responsiveness",
        date: "2025-08-21",
        category: "Low",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Performance Tuning",
        taskDescription: "Improve page load speed",
        date: "2025-08-23",
        category: "High",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Testing",
        taskDescription: "Write integration tests",
        date: "2025-08-24",
        category: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "UI Cleanup",
        taskDescription: "Fix alignment issues",
        date: "2025-08-25",
        category: "Low",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Riya",
    email: "employee2@example.com",
    password: "123",
    active: 2,
    newTask: 2,
    completed: 1,
    failed: 1,
    tasks: [
      {
        taskTitle: "Backend Module",
        taskDescription: "Set up database schema",
        date: "2025-08-19",
        category: "High",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "API Testing",
        taskDescription: "Test all endpoints",
        date: "2025-08-23",
        category: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Error Logging",
        taskDescription: "Implement logging service",
        date: "2025-08-20",
        category: "High",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Security Patches",
        taskDescription: "Apply new security fixes",
        date: "2025-08-21",
        category: "High",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "DB Optimization",
        taskDescription: "Optimize queries",
        date: "2025-08-24",
        category: "Medium",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Data Migration",
        taskDescription: "Migrate old data",
        date: "2025-08-25",
        category: "Low",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Vikram",
    email: "employee3@example.com",
    password: "123",
    active: 2,
    newTask: 1,
    completed: 2,
    failed: 1,
    tasks: [
      {
        taskTitle: "Unit Testing",
        taskDescription: "Write test cases for components",
        date: "2025-08-21",
        category: "Medium",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Documentation",
        taskDescription: "Document API endpoints",
        date: "2025-08-25",
        category: "Low",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review teammate's PRs",
        date: "2025-08-22",
        category: "High",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Feature Enhancement",
        taskDescription: "Add sorting in dashboard",
        date: "2025-08-23",
        category: "Medium",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Bug Report",
        taskDescription: "Investigate memory leaks",
        date: "2025-08-24",
        category: "High",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Code Cleanup",
        taskDescription: "Remove unused imports",
        date: "2025-08-26",
        category: "Low",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    active: 2,
    newTask: 1,
    completed: 2,
    failed: 1,
    tasks: [
      {
        taskTitle: "UI Enhancement",
        taskDescription: "Improve button styles",
        date: "2025-08-20",
        category: "Low",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Optimize Images",
        taskDescription: "Compress images for faster load",
        date: "2025-08-21",
        category: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Theme Update",
        taskDescription: "Apply new color scheme",
        date: "2025-08-22",
        category: "High",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Accessibility",
        taskDescription: "Fix ARIA labels",
        date: "2025-08-23",
        category: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Cross Browser Testing",
        taskDescription: "Check compatibility",
        date: "2025-08-24",
        category: "High",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Animation Fix",
        taskDescription: "Fix dropdown animations",
        date: "2025-08-25",
        category: "Low",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Manish",
    email: "employee5@example.com",
    password: "123",
    active: 2,
    newTask: 1,
    completed: 2,
    failed: 1,
    tasks: [
      {
        taskTitle: "Deployment",
        taskDescription: "Deploy website to staging",
        date: "2025-08-24",
        category: "High",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "SEO Optimization",
        taskDescription: "Add meta tags and keywords",
        date: "2025-08-23",
        category: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Client Meeting",
        taskDescription: "Present progress report",
        date: "2025-08-22",
        category: "High",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Server Setup",
        taskDescription: "Configure Nginx",
        date: "2025-08-25",
        category: "High",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Monitoring",
        taskDescription: "Set up Grafana alerts",
        date: "2025-08-26",
        category: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Rollback Testing",
        taskDescription: "Test rollback scenarios",
        date: "2025-08-27",
        category: "Low",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "admin@example.com",
    password: "123",
    active: 0,
    newTask: 0,
    completed: 0,
    failed: 0
  }
];


export const setLocalStrorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin));   
}

export const getLocalStrorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
   
   return{employees,admin}
}
