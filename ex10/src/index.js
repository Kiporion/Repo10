function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Michael Jackson",
      title: "Hakuna Matata",
      release_year: 1919,
      id: 420,
      formats: {
        1: ":D",
        2: ":)",
        3: ":|",
      },
      gold: false,
    },
  };
  return myMusic;
}
myFunction()[2];
module.exports = myFunction;
