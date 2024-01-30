function App() {
    return (
        <div>
            <Tweet
            name="Page"
            username="pagepage"
            date={new Date().toDateString()}
            message="Hello World"
            />
            <Tweet
            name="Page"
            username="pagepage"
            date={new Date().toDateString()}
            message="Hello whirled"
            />
            <Tweet
            name="Page"
            username="pagepage"
            date={new Date().toDateString()}
            message="Hell, oh World"
            />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
