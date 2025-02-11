import { Oswald, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

const ABCFavoritMono = localFont({
  src: "../../public/fonts/ABCFavoritMonoVariable-Trial.woff2",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const oswald = Oswald({ subsets: ["latin"], style: ["normal"] });

export const fonts = {
  mono: ABCFavoritMono,
  oswald: oswald,
  playfair: playfair,
};
