import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { register, reset } from '../../features/auth/authSlice';
import Spinner from '../../components/spinner';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const { name, email, password, confirmPassword } = formData;

  const dispatch = useDispatch();

  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, message, user, navigate, dispatch]);

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

  return isLoading ? (
    <Spinner />
  ) : (
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
