import Placeholder1 from "@/assets/placeholders/Moai_Statues_01.jpg";
import Placeholder2 from "@/assets/placeholders/Moai_Statues_02.jpg";
import Placeholder3 from "@/assets/placeholders/Moai_Statues_03.jpg";
import Placeholder4 from "@/assets/placeholders/Moai_Statues_04.jpg";
import Placeholder5 from "@/assets/placeholders/Moai_Statues_05.jpg";
import Placeholder6 from "@/assets/placeholders/Moai_Statues_06.jpg";
import Placeholder7 from "@/assets/placeholders/Moai_Statues_07.jpg";
import Placeholder8 from "@/assets/placeholders/Moai_Statues_08.jpg";
import Placeholder9 from "@/assets/placeholders/Moai_Statues_09.jpg";
import Placeholder10 from "@/assets/placeholders/Moai_Statues_10.jpg";
import Placeholder11 from "@/assets/placeholders/Moai_Statues_11.jpg";
import Placeholder12 from "@/assets/placeholders/Moai_Statues_12.jpg";
import Placeholder13 from "@/assets/placeholders/Moai_Statues_13.jpg";
import Placeholder14 from "@/assets/placeholders/Moai_Statues_14.jpg";
import Placeholder15 from "@/assets/placeholders/Moai_Statues_15.jpg";
import Placeholder16 from "@/assets/placeholders/Moai_Statues_16.jpg";


import { COLLECTION_ADDRESS } from "./constants";

export const config: Config = {
  collection_id: COLLECTION_ADDRESS,

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    homepage: "#",
  },

  defaultCollection: {
    name: "Moai Statues Airdrop",
    description: "From the depths of the ocean to the peaks of the mountains, the Moai statues stand tall and proud, their secrets waiting to be discovered. Let your imagination soar with this prompt, featuring unique renderings and diverse styles that will transport you to a world of wonder and awe.",
    image: Placeholder1,
  },

  ourStory: {
    title: "Our Story",
    subTitle: "Proin lorem",
    description:
      "From the depths of the ocean to the peaks of the mountains, the Moai statues stand tall and proud, their secrets waiting to be discovered. Let your imagination soar with this prompt, featuring unique renderings and diverse styles that will transport you to a world of wonder and awe.",
    discordLink: "https://discord.com",
    images: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11, Placeholder12, Placeholder13, Placeholder14, Placeholder15, Placeholder16],
  },

  ourTeam: {
    title: "Our Team",
    members: [
      {
        name: "#01 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder1,
        socials: {
          twitter: "https://twitter.com",
        },
      },
     {
        name: "#02 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder2,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#03 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder3,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#04 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder4,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#05 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder5,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#06 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder6,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#07 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder7,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#08 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder8,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#09 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder9,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#10 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder10,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#11 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder11,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#12 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder12,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#13 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder13,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#14 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder14,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#15 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder15,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#16 #Moai Statues",
        role: "Aliquip Esse",
        img: Placeholder16,
        socials: {
          twitter: "https://twitter.com",
        },
      },
      
    ],
  },

  faqs: {
    title: "F.A.Q.",

    questions: [
      {
        title: "#Airdrop - Moai Statues",
        description:
          "From the depths of the ocean to the peaks of the mountains, the Moai statues stand tall and proud, their secrets waiting to be discovered. Let your imagination soar with this prompt, featuring unique renderings and diverse styles that will transport you to a world of wonder and awe.",
      },
  
    ],
  },

  nftBanner: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11, Placeholder12, Placeholder13, Placeholder14, Placeholder15, Placeholder16],
};

export interface Config {
  collection_id: string;

  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
