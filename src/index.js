import ReactDom  from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'



ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))