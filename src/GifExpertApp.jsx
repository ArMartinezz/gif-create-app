import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  // FJ6WfAPmI7tp7r7jSfYtjbdLRPvky8JX

  const [categories, setCategories] = useState(["Cats", "Dogs"]);

  const onAddCategory = (inputValue) => {
    if (categories.includes(inputValue)) return;
    setCategories((categories) => [inputValue, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      ></AddCategory>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
