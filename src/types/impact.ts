export interface ImpactStory {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  image: string;
  imageAlt: {
    en: string;
    ar: string;
  };
  slug: string;
  sections: ImpactStorySection[];
}

export interface ImpactStorySection {
  content: {
    en: string;
    ar: string;
  };
  type?: "text" | "highlight" | "quote";
}
