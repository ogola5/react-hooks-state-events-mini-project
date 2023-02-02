import React from "react";

function CategoryFilter({categories,selectedCategory,onSelectCategory}) {
  const categoryButtons = categories.map((category) =>{
    const className = category ===selectedCategory ? "selected" :null;
    return (
      <button>
        key:{category}
        className={className}
        onClick={() => onSelectCategory(category)}
      </button>
    );
  
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
