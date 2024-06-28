import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import './App.css';
import News from './component/News';
import Blog from './component/Blog';




export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/news" element={<News/>} />
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>

          </Routes>
        </Router>
      </div>
    );
  }
}
