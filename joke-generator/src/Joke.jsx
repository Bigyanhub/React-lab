import React, { useEffect, useState } from "react";
+-***+1import Button from "./Button";

const Joke = () => {  
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const---------7 [error, setError] = useState(null);

  const fetchApi = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJoke(data.joke);
    } catch (err) {
      setError("Failed to fetch a joke. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col items-center space-y-4 max-w-5/6">
      <Button callApi={fetchApi} disabled={loading} />
      {error ? (
        <p className="text-red-400 text-xl">{error}</p>
      ) : loading ? (
        <p className="text-white text-xl">Loading...</p>
      ) : (
        <p className="text-white text-xl">{joke}</p>
      )}
    </div>
  );
};

export default Joke;
