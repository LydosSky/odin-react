import { useState, useEffect } from "react";

function useImageURL() {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then(function (response) {
        if (response.status >= 400) throw new Error("server error");

        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
}

export default function Image() {
  const { imageURL, error, loading } = useImageURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img alt="placeholder text" src={imageURL} />
      </>
    )
  );
}
