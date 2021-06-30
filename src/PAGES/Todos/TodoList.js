export default function TodoList({todos, setTodos}) {
  return (
    <div>
      {todos.map((item) => (
        <div className="row">
          <div className="col-md-1">
            <input checked={item.completed} type="checkbox" name="" id={'checkbox'+item.id} />
          </div>
          <div className="col-md-6"><label htmlFor={'checkbox'+item.id}>{item.title}</label></div>
        </div>
      ))}
    </div>
  );
}
