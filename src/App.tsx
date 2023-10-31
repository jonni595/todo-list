const App = () => {
  return (
    <div className="container">
      <section className="container__tasks">
        <h1>Todo</h1>
        <input type="text" />
        <button>
          <span className="button-text">+</span>
        </button>
      </section>
      <section className="container__todo-list">
        <ul>Todo list</ul>
      </section>
    </div>
  );
};

export default App;
