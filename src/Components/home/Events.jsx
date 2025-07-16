import React from "react";

function Events() {
  return (
    <section id="events" className=" bg-[#02041A] py-16 px-10">
      <div className="container text-white  mx-auto px-4 md:px-6">
        <div className="text-center md:mb-16">
          <h2 className="text-2xl text-white md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text ">
            Upcoming Events
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community events and connect with like-minded people
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 w-full max-w-5xl mx-auto justify-center ">
            <div className="text-card-foreground group relative overflow-hidden bg-muted backdrop-blur-sm border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl flex flex-col w-full md:max-w-md">
              <div className="relative h-48 md:h-64 overflow-hidden rounded-t-3xl flex-shrink-0">
                <img
                  alt="Make.com AI Automation MasterclassName"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-background/95 backdrop-blur-sm rounded-2xl px-2 md:px-3 py-1.5 md:py-2 shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {/* day */}
                    </div>
                    <div className="text-base md:text-lg font-bold text-foreground">
                      {/* date */}
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-primary/90 backdrop-blur-sm rounded-2xl px-2 md:px-3 py-1 md:py-1.5 shadow-lg">
                  <div className="flex items-center gap-1 md:gap-1.5 text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-clock w-3 md:w-3.5 h-3 md:h-3.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-xs md:text-sm font-medium">
                      {/* time */}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <div className="mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                    AI Automation MasterclassName
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed h-10">
                    {/* description */}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm mb-4 md:mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-map-pin w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="font-medium">Zoom</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-users w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    <span className="font-medium">170 interested</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://lu.ma/rnbhse4i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-white px-4 py-2 w-full rounded-2xl h-11 md:h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group/btn  gap-2"
                  >
                    <span className="font-semibold text-sm md:text-base">
                      Join Event
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-card-foreground group relative overflow-hidden bg-muted backdrop-blur-sm border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl flex flex-col w-full md:max-w-md">
              <div className="relative h-48 md:h-64 overflow-hidden rounded-t-3xl flex-shrink-0">
                <img
                  alt="Gen AI 2025 Half Yearly Rewind"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-background/95 backdrop-blur-sm rounded-2xl px-2 md:px-3 py-1.5 md:py-2 shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {/* day */}
                    </div>
                    <div className="text-base md:text-lg font-bold text-foreground">
                      {/* date */}
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-primary/90 backdrop-blur-sm rounded-2xl px-2 md:px-3 py-1 md:py-1.5 shadow-lg">
                  <div className="flex items-center gap-1 md:gap-1.5 text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-clock w-3 md:w-3.5 h-3 md:h-3.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-xs md:text-sm font-medium">
                      {/* time */}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <div className="mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                    Gen AI
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed h-10">
                    {/*  */}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm mb-4 md:mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-map-pin w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="font-medium">Zoom</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-users w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    <span className="font-medium">157 interested</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://lu.ma/8sry75e2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-white px-4 py-2 w-full rounded-2xl h-11 md:h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group/btn gap-2"
                  >
                    <span className="font-semibold text-sm md:text-base">
                      Join Event
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group text-sm sm:text-base border-foreground bg-transparent p-5 mt-4 px-6 md:px-8 py-3 rounded-2xl h-12 border-2 hover:bg-white hover:text-black transition-all duration-300 mx-auto w-full max-w-xs md:w-auto  gap-2"
            href="/events"
          >
            <span className="font-medium">Discover All Events</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-right w-4 h-4"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Events;
