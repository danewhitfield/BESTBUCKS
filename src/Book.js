import React from "react";

const Book = ({ title, author, img, price }) => {
  // const { title, author, img } = props;
  // attribute, eventHandler
  const showAuthor = (author) => {
    alert(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h5 className="price">{price}</h5>
      <br></br>
      <button type="button" onClick={() => showAuthor(author)}>
        AUTHOR
      </button>
    </article>
  );
};

export default Book;
