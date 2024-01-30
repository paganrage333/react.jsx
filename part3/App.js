function App() {
    return (
      <div>
        <Person
          name="Page"
          age={27}
          hobbies={["reading", "watching tv", "music"]}
        />
        <Person name="Alex" age={27} hobbies={["crafting", "singing"]} />
        <Person
          name="Scooby"
          age={8}
          hobbies={["barking", "solving crimes", "eating"]}
        />
      </div>
    );
  }

  ReactDOM.render(<App/>, document.getElementById("root"));
