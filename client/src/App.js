
import './App.css';
import Navbar from './component/Nav';
import HomeScreen from './component/Home';
import BlogpostScreen from './component/Blog';
import PublishBlogScreen from './component/Publishblog';
import EditBlogScreen from './component/Edit';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/blogpost/:id" Component={BlogpostScreen} />
          <Route path='/blog' Component={PublishBlogScreen}></Route>
          <Route path='/edit-post/:id'Component={EditBlogScreen}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
