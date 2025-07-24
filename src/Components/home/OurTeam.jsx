import React from "react";

function OurTeam() {
  return (
    <section class="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 bg-[#0a0f1e]">
      <div class="mx-auto max-w-c-1315 px-4  md:px-8 xl:px-0">
        <div class="animate_top mx-auto text-center">
          <div
            class="animate_top mx-auto text-center"
            style={{ opacity: "1 ", transform: "none" }}
          >
            <div class="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection"></div>
            <h2 class="mx-auto text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-4  md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
              Our Team
            </h2>
            <p class="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]"></p>
          </div>
        </div>
      </div>
      <div class="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
        <div class="absolute -bottom-15 -z-1 h-full w-full">
          <img
            alt="Dotted"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            class="dark:hidden"
            src="./images/shape/shape-dotted-light.svg"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div class="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-50 p-3">
          <div
            class="cursor-pointer group relative rounded-lg border border-stroke bg-gray-700/30 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3"
            role="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="dialog-content-:rb:"
          >
            <img
              src="/OurTeam img/directorAce-AI.png"
              alt=""
              class="h-80 w-full rounded-lg object-fill"
              style={{ opacity: "1" }}
            />
            <div class="flex flex-grow flex-row items-end justify-between p-6">
              <div>
                <div
                  class="text-xl font-bold text-white dark:text-zinc-50"
                  style={{ opacity: "1" }}
                >
                  Shankar Duraikannan
                </div>
                <div
                  class="font-semibold text-white text-md"
                  style={{ opacity: "1" }}
                >
                  Advisor
                </div>
                <div id="dialog-description-:rb:" style={{ opacity: "1" }}>
                  {/*  */}
                </div>
                <div className="absolute right-6 bottom-6">
                  <button
                    type="button"
                    class="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-white/40 text-white transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                    aria-label="Open dialog"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-plus"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="cursor-pointer group relative rounded-lg border border-stroke bg-gray-700/30 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3"
            role="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="dialog-content-:rc:"
          >
            <img
              src="/public/OurTeam img/praveen.jpg"
              alt=""
              class="h-80 w-full  rounded-lg object-fill"
              style={{ opacity: "1" }}
            />
            <div class="flex flex-grow flex-row items-end justify-between p-6">
              <div>
                <div
                  class="text-xl font-bold text-white"
                  style={{ opacity: "1" }}
                >
                  Praveen jogi
                </div>
                <div
                  class="font-semibold
                 text-white text-md"
                  style={{ opacity: "1" }}
                >
                  {" "}
                  Director of Ace AI
                </div>
                <div id="dialog-description-:rb:" style={{ opacity: "1" }}>
                  {/*  */}
                </div>
                <div className="absolute right-6 bottom-6">
                  <button
                    type="button"
                    class="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-white/40 text-white transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                    aria-label="Open dialog"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-plus"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
