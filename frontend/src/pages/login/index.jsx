import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login to get support</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
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
            <button className='btn btn-block'>Login</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
