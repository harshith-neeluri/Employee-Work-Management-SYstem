import React, { useState,useEffect, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard';
import AdminDashboard from './components/DashBoard/AdminDashboard';
import { AuthContext } from './context/AuthProvider'; 
import { getLocalStrorage, setLocalStrorage } from './utils/Localstorage'; 
const App = () => {
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);
  const AuthData = useContext(AuthContext);
  useEffect(() => {
    
      const loggedInUser = localStorage.getItem('loggedInUser');
      if(loggedInUser){
        const userdata = JSON.parse(loggedInUser);
        setUser(userdata.role);
        setLoggedInUserData(userdata.data);
      }
    
  }, []);



  const handleLogin = (email, password) => {
    if (AuthData.admin.find((a) => email == a.email && a.password == password) ) {
             const employee = AuthData.admin.find((e) => email == e.email && e.password == password);

        setUser('admin');
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' , data: ((employee)) }));
        console.log('admin', employee);
      
       setLoggedInUserData(employee);
    } else if (AuthData.employees.find((e) => email == e.email && e.password == password) ) {
     
        setUser('employee');
      const employee = AuthData.employees.find((e) => email == e.email && e.password == password);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      setLoggedInUserData(employee);

    }else{
      alert('Invalid Credentials');
    }
  }
  setLocalStrorage();

  return (
    <div>
      {/* <Login /> */}
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user=='admin' ? <AdminDashboard  data={LoggedInUserData} changeuser={setUser} /> : ''}
      {user=='employee' ? <EmployeeDashboard data={LoggedInUserData} changeuser={setUser} /> : ''}
    </div>
  );
};

export default App;