import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from "./pages/Home";
import Users from "./pages/Users";
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
    <Users />
    <GlobalStyle />
</React.StrictMode>
);

