import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './style.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from '@mui/material';

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const [dialogInfo, setDialogInfo] = useState({ title: '', content: '' });
  const { login, error, clearErrors, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // Responsive dialog settings
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (isAuthenticated) {
      setDialogInfo({ title: 'Login Success', content: 'Successfully logged in to RSR app' });
      setOpen(true);
      navigate('/employee/routes');
    }

    if (error) {
      setDialogInfo({ title: 'Login Error', content: error });
      setOpen(true);
      clearErrors();
    }
  }, [error, isAuthenticated, navigate, clearErrors]);

  const [user, setUser] = useState({ email: '', password: '' });
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='container-container p-3 bg-light1'>
      <div className='row align-items-center login-container'>
        <div className='col-md-4 m-auto'>
          <div className='card p-3 p-md-4'>
            <h1 className="fs-4">Hi, Welcome back to <span className="text-main">RSR</span></h1>
            <form onSubmit={onSubmit}>
              <div className='form-group mt-3'>
                <label htmlFor="email" className='form-label'>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                  className='form-control'
                />
              </div>
              <div className='form-group mt-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                  className='form-control'
                />
              </div>
              <input type="submit" value="Login" className='main-btn mt-3' />
            </form>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}  // Enables full-screen mode on smaller screens
        maxWidth="sm"  // Controls the maximum width of the dialog
        fullWidth  // Ensures the dialog takes full width up to the maxWidth
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{dialogInfo.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogInfo.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginPage;
