interface Task {
  item: string;
  text: string;
  onClick: () => void;
}

const TaskList: React.FC<Task> = ({ item, text, onClick }) => {
  return (
    <div className="items">
      <li>{item}</li>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export { TaskList };
