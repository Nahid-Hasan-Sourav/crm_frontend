import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextInput from '../components/TextInput';
import useApi from '../hooks/useApi';
import Logo from '../../src/images/logo/flex.png';
import { toast } from 'react-toastify';

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  
  const { data, loading, error, callApi } = useApi();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (formData) => {
    console.log('Form Data:', formData);
  
    const { data: result, error: apiError } = await callApi('/login', 'POST', formData);
  
    if (result) {
      console.log('Login successful:', result);
      toast.success('Login successful!', {
        autoClose: 1000, // 1 second
      });
      // Perform actions such as save token, navigate, etc.
    }
    if (apiError) {
      console.log('Login failed:', apiError);
      toast.error(`Login failed: ${apiError}`, {
        autoClose: 2700, // 1 second
      });
    }
  };
  
  return (
    <section className="h-[100vh] bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10 mx-auto">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap items-center justify-center">
                <div className="px-4 md:px-0 lg:w-6/12 border bg-white shadow-lg">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src={Logo}
                        alt="logo"
                      />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
                      <p className="mb-4">Please login to your account</p>
                      
                      {/* Username Input */}
                      <TextInput
                        label="Username"
                        id="username"
                        name="username"
                        register={register}
                        errors={errors.username}
                        placeholder="Enter your username"
                      />

                      {/* Password Input */}
                      <TextInput
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        register={register}
                        errors={errors.password}
                        placeholder="Enter your password"
                      />

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          type="submit"
                          className="w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white"
                          style={{
                            background:
                              "linear-gradient(to right, #00b4d8, #0077b6, #0096c7, #48cae4)",
                          }}
                          disabled={loading}
                        >
                          {loading ? 'Logging in...' : 'Log in'}
                        </button>
                      </div>

                      {/* {error && (
                        <p className="text-red-500 text-center">
                          {error}
                        </p>
                      )} */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
