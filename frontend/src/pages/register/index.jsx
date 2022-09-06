import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { register } from '../../features/auth/authSlice';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, messasge } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Please ensure your passwords match');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              id='name'
              name='name'
              onChange={onChange}
              placeholder='Enter your name'
              required
              type='text'
              value={name}
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              id='email'
              name='email'
              onChange={onChange}
              placeholder='Enter your email'
              required
              type='email'
              value={email}
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              id='password'
              name='password'
              onChange={onChange}
              placeholder='Enter your password'
              required
              type='password'
              value={password}
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              id='confirmPassword'
              name='confirmPassword'
              onChange={onChange}
              placeholder='Confirm your password'
              required
              type='password'
              value={confirmPassword}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
