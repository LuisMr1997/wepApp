/** @format */

import React, { useState } from "react";
import Overlay from "../shared/utils/Oberlay";
import { autoTagImage } from "../shared/utils/Imagga";
import { loadFiles } from "../shared/utils/Pixel";

const ConteinerGit = () => {
  const [loading, setLoading] = useState(false);

  interface Gif {
    alt: string;
    url: string;
    tags: any;
    src?: any;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShearchText(event.target.value);
  };

  const [shearchText, setShearchText] = useState("");
  const [limit, setLimit] = useState("5");
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [indexSelected, setIndexSelected] = useState<any>();

  const handleButtonClick = async () => {
    setLoading(true);
    shearchText.length > 0
      ? setGifs(await loadFiles(shearchText, limit))
      : alert("Please write text");
    setLoading(false);
  };

  const handleConsultClick = async (index: number) => {
    setIndexSelected(index);
    setLoading(true);
    const updatedGifs = await Promise.all(
      gifs.map(async (gif, i) => {
        if (i === index) {
          const tags = await autoTagImage(gif.url);
          return { ...gif, tags: tags };
        } else {
          return gif;
        }
      })
    );
    setGifs(updatedGifs);
    setLoading(false);
  };

  return (
    <div className="p-4">
      <div className="mb-4 text-center">
        <h2 className="text-3xl font-bold">Buscador de imagenes</h2>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={shearchText}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded mr-2"
          placeholder="Escribe ..."
        />
        <select
          className="border border-gray-300 rounded mr-4 ml-4"
          name="select"
          value={limit}
          onChange={(e) => {
            setLimit(e.target.value);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
        </select>

        <button
          onClick={handleButtonClick}
          className="p-2 bg-blue-500 text-white rounded"
        >
          {loading ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : (
            "Consultar"
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-10">
        {gifs &&
          gifs.map((gif, index) => {
            return (
              <div key={index} className="text-center">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={gif.url}
                      alt={gif.alt}
                      className="object-cover w-40 h-40"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title taxt-center">{gif.alt}</h2>

                    <div className="card-actions justify-end">
                      <button
                        onClick={() => handleConsultClick(index)}
                        className="p-2 bg-blue-500 text-white rounded mb-2 text-center"
                      >
                        {loading && indexSelected === index ? (
                          <span className="loading loading-infinity loading-lg"></span>
                        ) : (
                          "Analizar"
                        )}
                      </button>
                    </div>

                    {gif.tags && gif.tags.result && (
                      <div className="overflow-auto max-h-40 border border-gray-300 rounded-md p-2">
                        {Object.entries(gif.tags.result.tags).map(
                          ([key, value]) => (
                            <div key={key} className="flex">
                              <pre className="inline flex-grow">
                                {JSON.stringify(value, null, 2)}
                              </pre>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    width={25}
                    height={25}
                    className="object-cover w-25 h-25 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                   
                  />

                  <div className="flex flex-col justify-center items-center p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {gif.alt}
                    </h5>

                    <button
                      onClick={() => handleConsultClick(index)}
                      className="p-2 bg-blue-500 text-white rounded mb-2 text-center"
                    >
                      {loading && indexSelected === index ? (
                        <span className="loading loading-infinity loading-lg"></span>
                      ) : (
                        " Analizar"
                      )}
                    </button>

                  
                  </div>
                </a> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ConteinerGit;
