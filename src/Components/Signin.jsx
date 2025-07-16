import React from "react";

function Signin({ onClose }) {
  return (
    <div
      role="dialog"
      id="radix-«Rejb»"
      aria-describedby="radix-«RejbH2»"
      aria-labelledby="radix-«RejbH1»"
      data-state="open"
      className=" bg-[#0D1220] text-white fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg z-[999] bg-muted !rounded-2xl"
      tabindex="-1"
      style={{ pointerEvents: "auto" }}
    >
      <div className="p-0">
        <form className="mx-auto flex w-full max-w-lg flex-col justify-center">
          <div className="rounded-lg border text-card-foreground shadow-sm border-transparent bg-transparent">
            <div className="flex flex-col p-6 space-y-1">
              <h3 className="font-semibold tracking-tight text-2xl text-center">
                Welcome back!
              </h3>
              <p className="text-sm  text-white opacity-50 text-muted-foreground text-center">
                Enter your email below to sign in
              </p>
            </div>
            <div className="p-6 pt-0 grid gap-4">
              <div className="grid grid-cols-1 gap-4">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group text-sm sm:text-base border border-foreground bg-transparent hover:bg-white hover:text-black p-5 h-10 px-4 py-2 w-full"
                  type="button"
                >
                  <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    ></path>
                  </svg>
                  Google
                </button>
              </div>
              <div className="relative">
                <div className="absolute  flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-muted  text-white opacity-50 px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-[#212630] opacity-60 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 py-6 px-4"
                  id="email"
                  placeholder="me@example.com"
                  type="email"
                  name="email"
                />
              </div>
              <div className="grid gap-2 relative">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-[#212630] opacity-60 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 py-6 px-4"
                  id="password"
                  placeholder="******"
                  security="false"
                  type="password"
                  name="password"
                />
                <span className="absolute cursor-pointer right-3 top-[36px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye-off stroke-muted-foreground"
                    aria-hidden="true"
                  >
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                    <path d="m2 2 20 20"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="items-center p-6 pt-0 flex flex-col space-y-4">
              <button
                className="inline-flex bg-white text-[#0D1220] items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mb-2"
                type="submit"
              >
                Continue
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none text-white opacity-50 underline-offset-4 px-4 text-muted-foreground text-sm hover:underline hover:text-foreground py-0 h-4"
                type="button"
              >
                Forgot Password?
              </button>
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground  text-white opacity-50 text-sm">
                  Don't have an account?
                </p>
                <p className="text-foreground text-sm cursor-pointer">
                  Sign Up
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button
        onClick={onClose}
        type="button"
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-x h-4 w-4"
          aria-hidden="true"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}

export default Signin;
