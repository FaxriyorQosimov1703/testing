import { useEffect, useState } from "react";
import { doGet } from "../services";
import TodoList from "./TodoList";
import SelectUser from '../SelectUser'

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState('')
  const [completed, setCompleted] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [page, setPage] =  useState(1)

  async function getTodos() {
    const res = await doGet("/todos");
    const filterRes = res.filter((item, index)=> index >= 0 && index < 10)
    setTodos(filterRes );
    setData(res);

  }

  function filter(userId, completed, page) {
      
    return data.filter(
        (item) => (item.userId == userId || userId == "") && 
        (item.completed == completed || !isFiltering )).filter((item, index)=> index>(page-1)*10 && index < (page * 10));
        
  }

  function onChangeSelect(userId) {
    let res = filter(userId, completed, page);
    setTodos(res);
    setCurrentUser(userId)
  }

  function handleCheck(event) {
      let checked = event.target.checked 
       const res = filter(currentUser, checked, page)
        setTodos(res)
        setCompleted(checked)
  }

  function todosReset() {
      setTodos(data);
      setCurrentUser('')
      setCompleted(false)
      setIsFiltering(false)
  }

  function onNext() {
    
    let res = filter(currentUser, completed, page)
    if(res.length == 0) {
        setPage(1)
    }else {
        setPage(prevState=>prevState+1)
    }
  }

  function onPrev() {
    let res = filter(currentUser, completed, page)
    if(res.length == 0){
        setPage(12)
    }else {
      setPage(prevState=>prevState-1)

    }
}

useEffect(()=>{
    let res = filter(currentUser, completed, page)
    setTodos(res)
    
}, [page])
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <SelectUser onChange={onChangeSelect} />
        </div>
        <div className="col-md-3">
          <label htmlFor="check">
            completed
            <input
              checked={completed}
              onChange={handleCheck}
              type="checkbox"
              name=""
              id="check"
            />
          </label>
        </div>
        <div className="col-md-2">
            <button className="btn btn-danger" onClick={todosReset}>Reset</button>
        </div>
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
      <div className="row">
          <div className="col-md-2">
              <button className="btn btn-dark"onClick={onPrev}>prev</button>
           
          </div>
            <div className="col-md-1"><h2>{page}</h2></div>
          <div className="col-md-2">
              <button className="btn btn-dark" onClick={onNext}>next</button>
          </div>
      </div>
    </div>
  );
}
