import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editore"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publier</h1>
          <span>
            <b>État :</b> Brouillon
          </span>
          <span>
            <b>Visibilité :</b> Publique
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">
            Télécharger Image
          </label>
          <div className="buttons">
            <button>Brouillon</button>
            <button>Mise à jour</button>
          </div>
        </div>
        <div className="item">
          <h1>Catégorie</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technologie" />
            <label htmlFor="technologie">Technologie</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" />
            <label htmlFor="cinema">Cinéma</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="nourriture" />
            <label htmlFor="nourriture">Nourriture</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
