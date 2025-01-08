import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(

    <App />
  
);

// Add a class to the root element when the data is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('root').classList.add('loaded');
  });
