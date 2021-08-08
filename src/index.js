// Dependency Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Component Styling Imports
import './index.scss';

// Component Imports
import App from './components/views/Master/Master';

// Root Element of the Application
const RootElement = document.getElementById('root');

ReactDOM.render(
    <div className="ContainerIndex">
        <App/>
    </div>,
    RootElement
);