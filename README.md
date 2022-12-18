//install tailwind

    -yarn add tailwindcss
    
//install tailwind css autoprefixer

    -yarn add -D tailwindcss postcss autoprefixer

//add tailwind css config file   

    -yarn tailwindcss init -p
    


<!--  -->
//globals.css file 

    -@tailwind base;
     @tailwind components;
     @tailwind utilities;

<!--  -->
//tailwind config file 
    
        /** @type {import('tailwindcss').Config} */
        module.exports = {
        content: ["./pages/**/*.{js,jsx,ts,tsx}"],
        theme: {
            extend: {
            colors: {
                primary: "#4ade80",
                secondary: "#06b6d4",
                danger: "#dc2626",
            },
            },
        },
        plugins: [- third party framework -],
        };
"# bibaho-korbo" 
