import React from 'react';
import { theme as chakraTheme } from '@chakra-ui/core';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  icons: {
    ...chakraTheme.icons,
    twitter: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </g>
      )
    },
    github: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </g>
      )
    },
    linkedin: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </g>
      )
    },
    youtube: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
          <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
        </g>
      )
    },
    mail: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </g>
      )
    },
    nextjs: {
      path: (
        <g fill="currentColor">
          <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
          <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
        </g>
      ),
      viewBox: '.5 -.2 1023 1024.1'
    },
	android: {
      path: (
        <g fill="currentColor">
          <path d="M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zm357.1-600.1l44.9-65c2.6-3.8 2-8.9-1.5-11.4c-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8c-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6c-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1a26.9 26.9 0 1 1 26.9-26.9a26.97 26.97 0 0 1-26.9 26.9zm208.4 0a26.9 26.9 0 1 1 26.9-26.9a26.97 26.97 0 0 1-26.9 26.9zm223.4 100.7c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V400.1c.1-30.6-24.3-55.3-54.6-55.3zm-658.6 0c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z" />
        </g>
      ),
      viewBox: '0 0 1024 1024'
    },
	storage: {
      path: (
        <g fill="currentColor">
          <path d="M17.91 18.28c8.08 0 14.66-1.74 15.09-3.94V8.59c-.43 2.2-7 3.94-15.09 3.94A39.4 39.4 0 0 1 6.25 11V9a39.4 39.4 0 0 0 11.66 1.51C26 10.53 32.52 8.79 33 6.61c-.2-3.41-9.48-4.33-15-4.33S3 3.21 3 6.71v22.58c0 3.49 9.43 4.43 15 4.43s15-.93 15-4.43v-5.2C32.57 26.28 26 28 17.91 28a39.4 39.4 0 0 1-11.66-1.48v-2A39.4 39.4 0 0 0 17.91 26C26 26 32.57 24.28 33 22.09v-5.75c-.43 2.2-7 3.94-15.09 3.94a39.4 39.4 0 0 1-11.66-1.51v-2a39.4 39.4 0 0 0 11.66 1.51z" />
        </g>
      ),
      viewBox: '0 0 36 36'
    },
	 ansible: {
       path: (
        <g fill="currentColor">
          <path d="M14.156 15.297l6.25 4.927l-4.141-10.214zM16 0C7.161 0 0 7.161 0 16s7.161 16 16 16s16-7.161 16-16S24.839 0 16 0zm7.729 23.073a1.136 1.136 0 0 1-1.167 1.109c-.313 0-.552-.12-.885-.391l-8.255-6.667l-2.771 6.938H8.255L15.25 7.255a1.054 1.054 0 0 1 1.021-.677c.432-.016.839.25.99.677l6.365 15.323c.057.151.104.313.104.464v.031z" />
        </g>
      ),
	  viewBox: '0 0 32 32'
    },
	letterU: {
      path: (
        <g fill="currentColor">
          <path d="M31.99 15.74a4.181 4.181 0 0 0-.026-.37v-.005a7.929 7.929 0 0 0-1.318-3.75a8.18 8.18 0 0 0-1.156-1.385a8.307 8.307 0 0 0-2.188-1.51a9.381 9.381 0 0 0-4.068-.891a9.821 9.821 0 0 0-3.396.594a8.465 8.465 0 0 0-2.427 1.328c-.151.125-.302.25-.443.385l-.115.115l-.156.167l-.109.109l-.188.198c-.141.156-.271.313-.396.464l-.005-.005c-.255.307-.49.635-.667.922c-.12.188-.234.38-.344.573l-1.531 3.089h.005l-.083.161l-.167.339c-.333.682-.693 1.359-1.094 1.917c-.896.979-1.906 1.464-3.208 1.464c-.089 0-.182-.005-.276-.01c-.786-.031-1.458-.219-2.052-.573a3.425 3.425 0 0 1-1.328-1.37a3.566 3.566 0 0 1-.432-1.828v-.047c.042-1.01.427-1.802 1.208-2.479c.188-.167.385-.302.594-.427c.026-.016.057-.031.083-.047c.583-.318 1.24-.474 1.99-.474l.234.005c1.203.047 2.125.422 2.865 1.151l2.307-4.151a8.973 8.973 0 0 0-1.865-.943c-.026-.01-.052-.026-.078-.031c-.083-.031-.167-.063-.25-.089a9.81 9.81 0 0 0-2.286-.464c-.021 0-.042-.005-.063-.005c-.12-.01-.245-.021-.365-.026c-.13-.005-.266-.01-.396-.01h-.073a9.314 9.314 0 0 0-4.036.891a8.238 8.238 0 0 0-3.339 2.891a8.008 8.008 0 0 0-1.354 4.505c-.005 2.089.755 3.917 2.266 5.458c1.583 1.615 3.63 2.484 6.094 2.589c.156.005.313.01.469.01c1.391 0 2.682-.25 3.839-.745c.286-.125.568-.266.854-.427c.156-.089.302-.188.453-.286l.104-.073l.182-.125c.219-.156.422-.328.625-.51l.068-.068c.12-.109.234-.224.344-.339l.417-.469l.156-.198l.078-.109l.073-.104c.615-1.031 2.62-4.802 2.62-4.802v-.005l.12-.229l.099-.182c.292-.536.505-.917.792-1.318l.005-.016c.656-.953 1.792-1.635 3.13-1.75c2.24-.193 4.203 1.281 4.38 3.286c.182 2.01-1.49 3.797-3.729 3.99c-.453.036-.906.01-1.349-.089l-.01.005c-1.646-.344-2.693-1.536-3.208-2.078l-2.156 3.969s.672.672 1.13 1.01a8.75 8.75 0 0 0 1.531.875a9.525 9.525 0 0 0 3.781.786c.161 0 .13 0 .297-.01c2.458-.099 4.651-1.042 6.234-2.656c1.495-1.536 2.307-3.286 2.318-5.359v-.063z" />
        </g>
      ),
      viewBox: '0 0 32 32'
    },
    openstack: {
      path: (
        <path
          fill="currentColor"
          d="M464.428 5.456H47.571C21.407 5.456 0 26.863 0 53.027v112.101h115.625v-18.32c0-14.209 11.523-25.727 25.732-25.727h229.29c14.21 0 25.728 11.518 25.728 25.728v18.32H512V53.026c0-26.164-21.408-47.571-47.572-47.571zM396.375 365.19c0 14.21-11.518 25.733-25.728 25.733h-229.29c-14.209 0-25.732-11.523-25.732-25.733v-18.315H0v112.097c0 26.168 21.408 47.571 47.572 47.571h416.857c26.164 0 47.571-21.403 47.571-47.571V346.876H396.375v18.315zM.003 313.814h115.625V198.19H.003v115.625zm396.37 0h115.625V198.19H396.374v115.625z"
        />
      ),
      viewBox: '0 0 512 512'
    },
    check: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </g>
      )
    },
    x: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
        </g>
      )
    }
  }
};

export default theme;
