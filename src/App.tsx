import React from 'react';
import './App.css';
import BookListPage from "./pages/BookListPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Auth from "./components/Auth";
import HomePage from "./pages/HomePage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={
            <Auth>
              <HomePage/>
            </Auth>
          }/>
          <Route path="/books" element={
            <Auth>
              <BookListPage/>
            </Auth>
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
