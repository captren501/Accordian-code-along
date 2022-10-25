import { useState } from "react";
import person from "./utils/data";
import SinglePerson from "./Components/Person";
import React from 'react';


function App() {
    const[persons, setQuestions] = useState(person);
    console.log(person)
  return (
    <main>
    <div className="contaner">
        <h3>question and answers login</h3>
        <section className="info">
            {persons.map((persons) => {
                return (
                    <SinglePerson key={persons.id}
                    {...persons}></SinglePerson>
                );
            })}
        </section>
    </div>
    </main>
  );
}

export default App

