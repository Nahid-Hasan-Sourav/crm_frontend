import Logo from '../../src/images/logo/flex.png';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextInput from '../components/TextInput';

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

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log('Form Data:', data);
    // Perform API call or any other action here
  };
  return (
    <section className="h-[100vh] bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10 mx-auto">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap items-center justify-center">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12 border bg-white shadow-lg">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src={Logo}
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                       
                      </h4>
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

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          type="submit"
                          className="w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          style={{
                            background:
                            "linear-gradient(to right, #00b4d8, #0077b6, #0096c7, #48cae4)",
                          }}
                        >
                          Log in
                        </button>
                      </div>

                      {/* <!--Forgot password link--> */}
                      <div className="text-center">
                        <a href="#!" className="text-sm text-indigo-600 hover:text-indigo-500">
                          Forgot password?
                        </a>
                      </div>
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
