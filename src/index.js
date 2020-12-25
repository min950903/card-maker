import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import ImageButton from './components/common/imageButton';
import './index.css';
import AuthService from './lib/api/authService';
import Cloudinary from './lib/api/cloudinary';
import DbService from './lib/api/dbService';

const authService = new AuthService();
const dbService = new DbService();
const cloudinary = new Cloudinary();
const FileInput = (props) => <ImageButton {...props} cloudinary={cloudinary} />;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        FileInput={FileInput}
        authService={authService}
        dbService={dbService}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
