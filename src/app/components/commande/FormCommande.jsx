import React, { useState } from "react";
import Select from "react-select";
import axios from "../../../axios";
export default function FormCommande() {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = React.useState();
  const [article, setArticle] = React.useState();
  const [changed, setChanged] = React.useState();

  React.useEffect(()=>{
    const getArticles=async()=>{
      const res =await axios.get("/commande/tablearticle")
      console.log(res.data);
      setArticle(res.data?.map((article)=>(
        { value: article.REF_ART, label: article.ARTICLE }
      )))
      console.log(article);
    }
    getArticles()
    setChanged(false)
  },[changed])
  // Array of all options
  // const optionList = [
  //   { value: "red", label: "Red" },
  //   { value: "green", label: "Green" },
  //   { value: "yellow", label: "Yellow" },
  //   { value: "blue", label: "Blue" },
  //   { value: "white", label: "White" }
  // ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div className="app">
      <h2>Choose your Article</h2>
      <div className="dropdown-container">
        <Select
          options={article}
          placeholder="Select article"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
      <button onClick={()=>console.log(selectedOptions)}>zouuuhair</button>
    </div>
  );
}