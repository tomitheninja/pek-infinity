/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `${__dirname}/pages/**/*.{js,ts,jsx,tsx,mdx}`,
    `${__dirname}/components/**/*.{js,ts,jsx,tsx,mdx}`,
    `${__dirname}/app/**/*.{js,ts,jsx,tsx,mdx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
