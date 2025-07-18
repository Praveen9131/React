import React from "react";

function Register() {
  return (
    <div class="w-full bg-[#0a0f1e]">
      <div class="mx-auto max-w-7xl bg-gray-700/30 md:p-6 lg:p-8">
        <div class="relative isolate flex overflow-hidden px-8 shadow-2xl sm:rounded-3xl lg:gap-x-20 p-16 lg:p-28">
          <div class="z-20 mx-auto text-center space-y-4">
            <h2
              class="text-3xl font-semibold text-white md:text-5xl"
              style={{ opacity: "1", transform: "none" }}
            >
              Ready to Begin Your AI Journey?
            </h2>
            <p
              class="mt-3 text-lg md:text-xl text-white/80"
              style={{ opacity: "1", transform: "none" }}
            >
              Register now and upgrade your skills with our AI courses &amp;
              events.
            </p>
            <div
              class="pt-6 flex items-center justify-center gap-x-6 lg:justify-center"
              style={{ opacity: "1", transform: "none" }}
            >
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-white/70 h-11 px-8">
                Register Now
              </button>
            </div>
          </div>
          <img
            alt="App screenshot"
            loading="lazy"
            width="1824"
            height="1080"
            decoding="async"
            data-nimg="1"
            class="absolute left-0 top-0 h-full w-full rounded-md bg-white/5 object-cover ring-1 ring-white/10 brightness-[0.3]"
            srcset="/_next/image?url=%2Fevent%2Fmesa.webp&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fevent%2Fmesa.webp&amp;w=3840&amp;q=75 2x"
            src="/_next/image?url=%2Fevent%2Fmesa.webp&amp;w=3840&amp;q=75"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
