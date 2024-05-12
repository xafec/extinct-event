import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandCpp,
  IconBrandVue,
  IconBrandNuxt,
  IconBrandAngular,
  IconBrandMongodb,
  IconBrandAstro,
  IconBrandVercel,
  IconBrandVscode,
  IconBrandYoutube,
  type Icon,
} from "@tabler/icons-react";
import type { Language } from "../types/language";

const languageIcons = {
  HTML: IconBrandHtml5,
  CSS: IconBrandCss3,
  JavaScript: IconBrandJavascript,
  TypeScript: IconBrandTypescript,
  Sass: IconBrandSass,
  Tailwind: IconBrandTailwind,
  Nodejs: IconBrandNodejs,
  "C/C++": IconBrandCpp,
  Vuejs: IconBrandVue,
  Nuxtjs: IconBrandNuxt,
  Angular: IconBrandAngular,
  MongoDB: IconBrandMongodb,
  Astro: IconBrandAstro,
  Vercel: IconBrandVercel,
  VSCode: IconBrandVscode,
  YouTube: IconBrandYoutube,
};

export const languages: Language[] = Object.entries(languageIcons).map(
  ([name, icon]) => ({
    name,
    icon: icon as Icon,
  })
);
