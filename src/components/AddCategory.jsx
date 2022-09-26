import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState("");

  const AddCategoryValue = ({ target }) => {
    setInputValue(target.value);
    
  };
  const onSubmitD = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // onNewCategory((categories) => [inputValue, ...categories]);
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <>
      <form onSubmit={onSubmitD}>
        <input
          type="text"
          placeholder="Agrega nuevo categoria"
          value={inputValue}
          onChange={AddCategoryValue}
        />
        <button onClick={ {AddCategoryValue}}class="button-64" role="button"><span class="text">Buscar</span></button>
      </form>
    </>
  );
};
