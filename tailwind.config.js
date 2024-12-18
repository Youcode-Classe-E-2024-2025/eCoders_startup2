/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./assets/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'split-70-30': 'linear-gradient(to right, #F9F1E7 70%, #FCF8F3 70%)',
              },
            width: {
                '86p': '85.7%',
              },
              screens: {
                'custom-1040': '1040px',
                'max-800': { 'max': '800px' }, 
                'max-950': { 'max': '950px' },
                'max-450': { 'max': '550px' },
                 'max-1230': { 'min': '1230px' },
                
              },
              fontSize: {
               '10px': '10px',
                t:'10px,'
                
              },
              
        },
    },
    plugins: [],
};

