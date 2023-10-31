const App = () => {
  return (
    <div className="container">
      <section className="container__tasks">
        <h1>Todo</h1>
        <input type="text" />
        <button>Add</button>
      </section>
      <section className="container__todo-list">
        <ul>Todo list</ul>
      </section>
    </div>
  );
};

export default App;
