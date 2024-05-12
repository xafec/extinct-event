import {
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandTelegram,
  IconMessageCircle2,
  type Icon,
} from "@tabler/icons-react";
import type { Social } from "../types/social";

export const links: Social[] = [
  {
    title: "GitHub",
    url: "https://github.com/xafec/",
    description: "You can work on a project with me.",
    icon: IconBrandGithub as Icon,
  },
  {
    title: "Discord",
    url: "https://discord.com/users/1101222625956597871",
    description: "Chat with me on Discord and help me improve my English)",
    icon: IconBrandDiscord as Icon,
  },
  {
    title: "Telegram",
    url: "https://t.me/xafdevc",
    description: "If it works, you can just wait for a response.",
    icon: IconBrandTelegram as Icon,
  },
  {
    title: "Signal",
    url: "https://signal.me/#eu/0ieJruFSNtzs8RgLskTmga9NsYnvB0nVnWTP8nH-yHby8w1kEOtEtryxApfckAKV",
    description: "I see you're a really weird guy.",
    icon: IconMessageCircle2 as Icon,
  },
];
