import React from "react";
import css from "./home.module.css";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Phonebook!</h1>
      <h2>Add your contacts to your phone book. This app can:</h2>
      <ul className={css.rounded}>
        <li className={css.roundedItem}>Log in or register.</li>
        <li className={css.roundedItem}>Create a new contact.</li>
        <li className={css.roundedItem}>
          Use the contact search by name or number.
        </li>
        <li className={css.roundedItem}>Delete the unnecessary contact.</li>
      </ul>
    </div>
  );
};

export default Home;
