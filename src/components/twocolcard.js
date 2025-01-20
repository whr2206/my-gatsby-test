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
          {title}
        </div>
      </div>
  );
};

export default ArticleCard;