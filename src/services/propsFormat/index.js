export const divToImg = (src) => {
  return {
    style: {
      backgroundImage: `url(${process.env.PUBLIC_URL + src})`,
    },
  };
};
