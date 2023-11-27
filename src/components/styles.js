export const variant6 = {
  textAlign: "center",
};

export const contadorPaper = {
  padding: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "20%",

  "@media (max-width: 600px)": {
    width: "35%",
  },
};

export const CardMaterial = {
  width: "120px",
  height: "120px",
  margin: 2,
  cursor: "pointer",
  perspective: 1000,
  transformStyle: "preserve-3d",
  transition: "transform 0.5s",

  "@media (max-width: 450px)": {
    width: "100px",
    height: "100px",
    margin: 1,
  },
};
