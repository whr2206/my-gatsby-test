import React from 'react';
import {
    articleBox,
    articleImage,
    articleContent,
} from './twocolcard.module.css'

const ArticleCard = ({ image, title, excerpt }) => {
  return (
    <div className={articleBox}>
      <div className={articleImage}>
        {image}
      </div>
      <div className={articleContent}>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

export default ArticleCard;