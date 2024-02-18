import React from "react";

function CategoryFilter({ categories, onCategorySelect, selectedCategory } ) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      
      {categories.map((category) => (
        <button key={category} onClick={() => onCategorySelect(category)} className={selectedCategory === category ? "selected" : ""} value={selectedCategory}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
