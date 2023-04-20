import React, { useState } from "react";
import List from "./List";
import data from "./Data";

const App = () => {
    const [people, setPeople] = useState(data);
    return (
        <main>
            <section className="container">
                <h3>{people.length} Birthdays today</h3>
                <List people={people} />
                <button onClick={() => setPeople([])}>Clear all</button>
            </section>
        </main>
    );
};

export default App;
