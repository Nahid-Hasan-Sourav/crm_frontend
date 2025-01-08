import React from "react";

const Login = () => {
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
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
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The GetIt Solution<br></br> Team
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}
                      <div className="mb-4">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>

                      {/* <!--Password input--> */}
                      <div className="mb-4">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          type="submit"
                          className="w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
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
