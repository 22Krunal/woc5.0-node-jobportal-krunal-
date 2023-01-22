import "./App.css";
import HomeScreen from "./component/HomeScreen";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginS from "./component/LoginS";
import LoginC from "./component/LoginC";
import SignupC from "./component/SignupC";
import SignupS from "./component/SignupS";
import Navbar from "./component/Navbar";
import Job from "./component/Jobs";
import { useState} from "react";
import JobState from "./context/jobcontext/JobState";
import PostJob from "./component/PostJob";

function App() {
    let login = localStorage.getItem('login')
    const [Login, setLogin] = useState(login)
    function handleSubmit (value){
        setLogin(value);
    }
  return (
    <div className="App">
    <JobState>
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomeScreen/>} />
    </Routes>
    <Routes>
        <Route path="/signup/company" element={<SignupC/>} />
    </Routes>
    <Routes>
        <Route path="/auth/company" element={<LoginC/>} />
    </Routes>
    <Routes>
        <Route path="/student/signup" element={<SignupS/>} />
    </Routes>
    <Routes>
        <Route path="/auth/student" element={<LoginS/>} />
    </Routes>
    <Routes>
        <Route path="/job" element={<Job/>} />
    </Routes>
    <Routes>
        <Route path="/postjob" element={<PostJob/>} />
    </Routes>
    </Router>
    </JobState>
    </div>
  );
}

export default App;