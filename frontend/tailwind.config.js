/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.stories.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard-Regular", "Poppins", "Arial", "sans-serif"],
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans재지정후 맨앞에 원하는 폰트 넣기
      },
      width: {
        mb: "328px",
      },
      height: {
        mb: "328px",
      },
      minHeight: {
        mb: "328px",
      },
      minWidth: {
        mb: "328px",
      },
      maxHeight: {
        mb: "328px",
      },
      maxWidth: {
        mb: "328px",
      },
    },
  },
  plugins: [],
};
