import React from "react";
import { categoryInfos } from "./catagoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./catagory.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.imgLink} data={infos} />
      ))}
    </section>
  );
}

export default Category;
