import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { Tasks } from './tasks';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Tasks />
    <ToastContainer {...{ position: 'top-center', theme: 'colored' }} />
  </>,
);
