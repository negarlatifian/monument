export interface Contribution {
  id: number;
  year: number;
  coordinate: string;
  text_en: string[];
  text_sv: string[];
  image: string;
}

export interface Exhibition {
  title: string;
  subtitle: string;
  imageUrl: string[];
  desc_en?: string[];
  desc_sv?: string[];
}
