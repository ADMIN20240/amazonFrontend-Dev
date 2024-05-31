import React from 'react'
import classes from './catagory.module.css'
import {Link} from 'react-router-dom'
function CategoryCard({data}) {

  return (
    <div className={classes.category}>

        <Link to={`/category/${data.name}`}>
            <span>
                <h2>{data?.title}</h2>
            </span>
            <img src={data?.imgLink} alt="" />
            <p>shop now</p>
        </Link>
    </div>
  )
}

export default CategoryCard