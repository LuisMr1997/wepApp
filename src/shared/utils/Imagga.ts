import { apiKeyIg, baseUrlIg, srApiKeyIg } from "../consts/apiKey";

export const autoTagImage = async (imageUrl: string) => {
  try {
    const apiUrl = `${baseUrlIg}${encodeURIComponent(imageUrl)}`;

    
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Basic ${btoa(`${apiKeyIg}:${srApiKeyIg}`)}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
