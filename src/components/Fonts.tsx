import localFont from "next/font/local";

const ABCFavoritNormal = localFont({
  src: "../../public/fonts/ABCFavoritVariable-Trial.woff2",
});

const ABCFavoritExtended = localFont({
  src: "../../public/fonts/ABCFavoritExtendedVariable-Trial.woff2",
});

const ABCFavoritMono = localFont({
  src: "../../public/fonts/ABCFavoritMonoVariable-Trial.woff2",
});

export const ABCFavorit = {
  normal: ABCFavoritNormal,
  extended: ABCFavoritExtended,
  mono: ABCFavoritMono,
};
