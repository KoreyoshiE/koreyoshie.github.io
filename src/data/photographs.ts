// Add only images Han has approved for publication. Empty until originals are supplied.
export interface Photograph {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
}
export const photographs: Photograph[] = [];
