export interface Audio {
    name: string;
    content: string;
    format: string;
    duration: string;
    id: number;
  }


const audios: Audio[] = [
    {
       name: "La Venganza",
       format:"mp3",
       duration: "00:05:05",
       id: 1
    }
];

export const getAudios = () => audios;

export const getAudio = (id: number) => audios.find(m => m.id === id);