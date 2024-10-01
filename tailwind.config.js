/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik",
      },
      boxShadow: {
        gymShadow: "0 1px 15px 0px  #077252",
      },

      backgroundImage: {
        registrationDiv: "linear-gradient(to right bottom, #52a58c, #087f5b)",
        forImgBox:
          " linear-gradient(to right bottom, rgba(82, 165, 140, 0.35), rgba(8, 127, 91, 0.35)), url(../images/cta-img.jpg)",
      },
      backgroundColor: {
        bgForNav: "rgba(255, 255, 255, 0.97)",
      },
    },
  },
  plugins: [],
};
