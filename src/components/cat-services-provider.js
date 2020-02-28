import React, { useState } from "react";

const allServices = [
  {
    id: 1,
    description: "Routine Health Care services for many types of cats",
    name: "Medical care",
    catTypes: ["Persian", "Bengal", "Siamese", "Russian"]
  },
  {
    id: 2,
    description: "Cosmetic services for fluffy cats",
    name: "Cosmetic care",
    catTypes: ["Norwegian", "Scottish"]
  },
  {
    id: 3,
    description: "Other services related to fluffy cats",
    name: "Other services",
    catTypes: ["Siberian"]
  }
];

const catTypes = [
  {
    id: "Persian",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
    name: "Persian cat",
    description:
      'Is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the "Persian Longhair" in the English-speaking countries.',
    related: ["Bengal", "Siamese"]
  },
  {
    id: "Bengal",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Paintedcats_Red_Star_standing.jpg/800px-Paintedcats_Red_Star_standing.jpg",
    name: "Bengal cat",
    description:
      "The Bengal cat is a domesticated cat breed created from hybrids of domestic cats",
    related: ["Persian"]
  },
  {
    id: "Siamese",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg",
    name: "Siamese cat",
    description:
      "The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cat native to China and brought to Thailand (formerly known as Siam), the Siamese became one of the most popular breeds in Europe and North America in the 19th century.",
    related: ["Bengal"]
  },
  {
    id: "Russian",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Russian_blue.jpg/800px-Russian_blue.jpg",
    name: "Russian Blue",
    description:
      "The Russian Blue is a cat breed that comes in colors varying from a light shimmering silver to a darker, slate grey. Their short, dense coat has been the hallmark of the Russian breed for more than a century. The dense coat stands out from the body.",
    related: ["Siamese"]
  },
  {
    id: "Norwegian",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/18_Months_old_Norwegian_forest_cat..jpg/1280px-18_Months_old_Norwegian_forest_cat..jpg",
    name: "Norwegian Forest cat",
    description:
      "The Norwegian Forest cat (Norwegian: Norsk skogkatt or Norsk skaukatt) is a breed of domestic cat originating in Northern Europe.",
    related: ["Bengal", "Persian"]
  },
  {
    id: "Scottish",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Scottish_fold_cat.jpg/1024px-Scottish_fold_cat.jpg",
    name: "Scottish Fold",
    description:
      "The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to fold, bending forward and down towards the front of the head, which gives the cat what is often described as an owl-like appearance.",
    related: ["Russian", "Siamese"]
  },
  {
    id: "Siberian",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Siberian_Forest_Cat.jpg",
    name: "Siberian cat",
    description:
      "The Siberian is a centuries-old landrace (natural variety) of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s.",
    related: ["Russian"]
  }
];

export const CatContext = React.createContext();
CatContext.displayName = "CatContext";

export const fetchCat = (type, { signal } = {}) => {
  return new Promise(resolve => resolve(catTypes.find(t => t.id === type)));
};

export default function CatServicesProvider({ children }) {
  const [services] = useState(allServices);

  return (
    <CatContext.Provider
      value={{
        services
      }}
    >
      {children}
    </CatContext.Provider>
  );
}
