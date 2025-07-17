import React from "react";
import footerlogo from "../../../public/serviceImages/Ace-Ai-logo.jpg";

function Footer() {
  return (
    <footer
      className="false border-t border-gray-700 text-white bg-[#0a0f1e]"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="space-y-2">
            <a className="flex items-center" href="/">
              <img
                alt="Ace-AI-logo"
                loading="lazy"
                width="546"
                height="392"
                decoding="async"
                data-nimg="1"
                className="h-12 w-auto md:h-[3.5rem]"
                src={footerlogo}
                style={{ color: "transparent" }}
              />
            </a>
            <div className="space-y-2 pb-4 text-lg">
              <a href="mailto:director@aceai.in">director@aceai.in</a>
              <p className="">Chennai, Tamilnadu, 603103 </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-8 lg:col-span-2 lg:mt-0">
            <div className="grid lg:justify-center place-content-start place-items-start gap-4">
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul role="list" className="space-y-4 justify-center grid">
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600  hover:text-white"
                    href=""
                  >
                    Consulting
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6  text-gray-600  hover:text-white"
                    href=""
                  >
                    GenAI Course
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6  text-gray-600  hover:text-white"
                    href=""
                  >
                    BuildFast Studio
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid lg:justify-center place-content-start place-items-start gap-4">
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul role="list" className="space-y-4 justify-center grid">
                <li>
                  <a
                    className="text-sm leading-6  text-gray-600  hover:text-white"
                    href="/resources"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6  text-gray-600  hover:text-white"
                    href="/events"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid lg:justify-center place-content-start place-items-start gap-4">
              <h3 className="font-semibold leading-6 text-foreground">Legal</h3>
              <ul role="list" className="space-y-4 justify-center grid">
                <li>
                  <a
                    className="text-sm leading-6  text-gray-600  hover:text-white"
                    href=""
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6  text-gray-600  hover:text-white"
                    href="/terms-and-conditions"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6  text-gray-600  hover:text-white"
                    href=""
                  >
                    Refund
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex space-x-6">
            <a
              className="fill-foreground text-foreground fill-white hover:fill-gray-500"
              target="_blank"
              href=""
            >
              <span className="sr-only">LinkedIn</span>
              <svg viewBox="0 0 512 512" className="h-6 w-6" aria-hidden="true">
                <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"></path>
              </svg>
            </a>
            <a
              className="fill-foreground text-foreground hover:fill-gray-500 hover:text-gray-500"
              target="_blank"
              href=""
            >
              <span className="sr-only">Instagram</span>
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-193.446,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053Zm0,31.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02Zm0,53.603c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z"></path>
              </svg>
            </a>
            <a
              className="fill-foreground text-foreground hover:fill-gray-500 hover:text-gray-500"
              target="_blank"
              href=""
            >
              <span className="sr-only">Twitter</span>
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-253.927,424.544c135.939,0 210.268,-112.643 210.268,-210.268c0,-3.218 0,-6.437 -0.153,-9.502c14.406,-10.421 26.973,-23.448 36.935,-38.314c-13.18,5.824 -27.433,9.809 -42.452,11.648c15.326,-9.196 26.973,-23.602 32.49,-40.92c-14.252,8.429 -30.038,14.56 -46.896,17.931c-13.487,-14.406 -32.644,-23.295 -53.946,-23.295c-40.767,0 -73.87,33.104 -73.87,73.87c0,5.824 0.613,11.494 1.992,16.858c-61.456,-3.065 -115.862,-32.49 -152.337,-77.241c-6.284,10.881 -9.962,23.601 -9.962,37.088c0,25.594 13.027,48.276 32.95,61.456c-12.107,-0.307 -23.448,-3.678 -33.41,-9.196l0,0.92c0,35.862 25.441,65.594 59.311,72.49c-6.13,1.686 -12.72,2.606 -19.464,2.606c-4.751,0 -9.348,-0.46 -13.946,-1.38c9.349,29.426 36.628,50.728 68.965,51.341c-25.287,19.771 -57.164,31.571 -91.8,31.571c-5.977,0 -11.801,-0.306 -17.625,-1.073c32.337,21.15 71.264,33.41 112.95,33.41Z"></path>
              </svg>
            </a>
            <a
              className="fill-foreground text-foreground hover:fill-gray-500 hover:text-gray-500"
              target="_blank"
              href=""
            >
              <span className="sr-only">GitHub</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"></path>
              </svg>
            </a>
          </div>
          <p className="text-sm text-center md:text-left leading-5 text-muted-foreground">
            © 2025 Ace AI Private Limited All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
