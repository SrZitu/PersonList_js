import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const PersonList = () => {
  return (
    <section className="PersonList">
      <Person img="44" name="John" job="developer" />
      <Person img="64" name="Bob" job="Engineer">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          voluptas quos illum nemo tenetur id deleniti, alias quisquam
          distinctio cupiditate.
        </p>
      </Person>
      <Person img="9" name="Charles" job="doctor" />
    </section>
  );
};

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/men/${img}.jpg`;
  return (
    <article className="Person">
      <img src={url} alt="image not found" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<PersonList />, document.getElementById("root"));
