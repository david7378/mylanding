import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer class="text-gray-300 mt-2">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-500">
            <span class="ml-3 text-xl uppercase">Perdomo Landing Page</span>
          </a>
          <p class="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 Perdomo David
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://wa.me/+543513305804"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp className="h-5 w-5 text-gray-500 hover:text-gray-200 transition-colors ease-linear cursor-pointer active:text-green-500 active:h-6 active:w-6" />
            </a>

            <a
              class="ml-3 text-gray-500 hover:text-gray-200 transition-colors ease-linear cursor-pointer active:text-red-700 active:h-6 active:w-6"
              href="https://www.instagram.com/vuelos_cor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 hover:text-gray-200 transition-colors ease-linear cursor-pointer active:text-sky-500 active:h-6 active:w-6"
              href="https://www.linkedin.com/in/perdomodavid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a href="mailto: dannellmd@gmail.com">
              <SiGmail className="h-5 w-5 ml-3 text-gray-500 hover:text-gray-200 transition-colors ease-linear cursor-pointer active:text-red-900 active:h-6 active:w-6" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
