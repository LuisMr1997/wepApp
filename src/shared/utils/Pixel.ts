import { httpServer } from "./httpServe";
import { pxApiKey } from "../consts/apiKey";

interface Photo {
  alt: string;
  url: string;
  tags: any;
  src?: any;
}

export const loadFiles = async (searchQuery: string, maxResults: string) => {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    searchQuery
  )}&per_page=${maxResults}`;

  const headers = {
    Authorization: pxApiKey,
  };
  const response = await httpServer(url, "GET", null, headers);

  if (response && response.photos) {
    const files: Photo[] = response.photos.map((img: Photo) => ({
      url: img.src.original,
      alt: img.alt,
    }));
    return files;
  } else {
    return [];
  }
};
