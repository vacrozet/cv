import React, { useEffect, useState } from "react";
import "./App.css";
import { Eclipse } from "react-loading-io";
import FileSaver from "file-saver";

const importAll = (r) => {
  return r.keys().map(r);
};

const findFile = () => {
  const images = importAll(require.context("./", false, /\.(pdf)$/));
  if (images.length === 1) {
    return images[0];
  }
};

const App = () => {
  const [url, setUrl] = useState("");

  const saveFile = () => {
    FileSaver.saveAs(url, "cv_valentin.pdf");
  };

  useEffect(() => {
    const image = findFile();
    setUrl(image);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>En cours de rénovation...</p>
        <button
          onClick={() => {
            saveFile();
          }}
        >
          Télécharger
        </button>
        <Eclipse size={120} />
      </header>
    </div>
  );
};

export default App;
