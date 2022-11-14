export interface Image {
   content: string;
    format: string;
    id: number;
  }


const images: Image[] = [
    {
       format:"png",
       id: 1
    }
];

export const getImages = () => images;

export const getImage = (id: number) => images.find(m => m.id === id);