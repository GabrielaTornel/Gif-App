import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrift } from "./components/GitGrift";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Inuyasha"]);

  const onAddCategory = (newCategory) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories]);
   
  };

  return (
    <>
      {/* TITULOS */}
      <h1>Babi Gift</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GitGrift key={category} category={category} />
      ))}
      
      {/* iNPUT  */}

      {/* lISTADO DE GIFT */}
      {/*  GIFT ITEM */}
    </>
  );
};
