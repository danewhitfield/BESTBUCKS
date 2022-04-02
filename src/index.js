import "./index.css";
import React from "react";
import { render } from "react-dom";
import books from "./books";
import Book from "./Book";

// JSX RULES
// return single element
// div/section/article or Fragment
// use camelCase for html attributes
// className instead of class
// close every element even ones that are self closing i.e </img>
// formatting

// everything needs to be wrapped in one main element i.e can't have seperate divs etc
// to get around this we can wrap multiple divs or semantic like sections etc
// we can also use <React.Fragment> or the shorthand which is just <></>
// const Greeting = () => {
//   return (
//     <div className="">
//       <h4>My name is Dane, this is my first component</h4>
//       <ul>
//         <li>
//           <a href="#">this is my first list item</a>
//         </li>
//         <img src="" alt="" />
//         <input type="text" name="email" id="" />
//       </ul>
//     </div>
//   );
// };

// NESTING COMPONENTS
// const Greeting = () => {
//   return (
//     <div>
//       <PersonsName />
//       <PersonsMessage />
//     </div>
//   );
// };

// const PersonsName = () => <h2>Dane Whitfield</h2>;
// const PersonsMessage = () => {
//   return <p>This is my message</p>;
// };
//

//

//
// THIS IS A BAD WAY OF DOING IT >>>>>
// const Greeting = () => {
//   return React.createElement("h1", {}, "hello world");
// };

// pass through what we want to render... and where we want to render it to
// ReactDom.render(<Greeting />, document.getElementById("root"));

//
//
// CREATE A BTEC AMAZON BOOK PAGE

// EXAMPLE WITH SEPERATE COMPONENTS
// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// };

// const Book = () => {
//   return (
//     <article className="book">
//       <Image></Image>
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => {
//   return (
//     <img
//       src="https://images-eu.ssl-images-amazon.com/images/I/91yfl3awKiL._AC_UL604_SR604,400_.jpg"
//       alt=""
//     />
//   );
// };

// const Title = () => <h1>Happy Mind, Happy Life</h1>;
// const Author = () => <h4>Dane Whitfield</h4>;
// INLINE CSS EXAMPLE
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     Dane Whitfield
//   </h4>
// );

// WITH JUST ONE COMPONENT
// SETUP VARS
// const firstBook = {
//   title: "Happy Mind, Happy Life",
//   author: "Dane Whitfield",
//   img: "https://images-eu.ssl-images-amazon.com/images/I/91yfl3awKiL._AC_UL604_SR604,400_.jpg",
// };
// const secondBook = {
//   title: "We're Going on an Egg Hunt",
//   author: "Martha Mumford",
//   img: "https://images-eu.ssl-images-amazon.com/images/I/917jQloBGNL._AC_UL604_SR604,400_.jpg",
// };

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//           explicabo id voluptate numquam pariatur! Quod quo nemo neque
//           assumenda? Voluptatum.
//         </p>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// };

// const Book = ({ img, title, author, children }) => {
//   // const { title, author, img } = props;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {childr}
//     </article>
//   );
// };

//
//

// REFACTORED EXAMPLE
const BookList = () => {
  return (
    <div>
      <header className="hero">BESTBUCK</header>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </div>
  );
};

render(<BookList />, document.getElementById("root"));
