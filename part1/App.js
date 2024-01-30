const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Page" />
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));