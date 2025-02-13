import { Crimson_Text, Oswald, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

const ABCFavoritMono = localFont({
  src: "../../../public/fonts/ABCFavoritMonoVariable-Trial.woff2",
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

const crimson = Crimson_Text({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-crimson",
});

export const fonts = {
  mono: ABCFavoritMono,
  oswald: oswald,
  playfair: playfair,
  crimson: crimson,
};

export const fontVariables = Object.entries(fonts)
  .map(([, font]) => font.variable)
  .join(" ");
