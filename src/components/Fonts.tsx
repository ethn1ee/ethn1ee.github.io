import { Newsreader, Oswald, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

const ABCFavoritMono = localFont({
  src: "../../public/fonts/ABCFavoritMonoVariable-Trial.woff2",
  variable: "--font-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const oswald = Oswald({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-oswald",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
});

export const fonts = {
  mono: ABCFavoritMono,
  oswald: oswald,
  playfair: playfair,
  crimson: newsreader,
};

export const fontVariables = Object.entries(fonts)
  .map(([, font]) => font.variable)
  .join(" ");
