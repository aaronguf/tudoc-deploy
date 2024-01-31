import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './component/Navbar.jsx';
import injectContext from './js/store/appContext.js';
import LoginRegister from './pages/LoginRegister.jsx';

const Layout = () => {
    const basename = process.env.BASENAME || '';

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Navbar />
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/" element={<LoginRegister />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default injectContext(Layout)