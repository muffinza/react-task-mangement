import Header from "./components/Header";
import Item from "./components/item";
import AddForm from "./components/AddForm";
import "./App.css";
import { useState /*,useEffect*/ } from "react";

function App() {
  const [task, setTasks] = useState([
    { id: 1, title: "เก็บห้อง" },
    { id: 2, title: "ล้างกรงก้า" },
    { id: 3, title: "ซักผ้า" },
    { id: 4, title: "ล้างจาน" },
  ]);

  const [title, setTitle] = useState("");
  const [isError, setError] = useState(false);
  const [editId, setEditId] = useState(null);

  // useEffect(() => {

  //   if(!title){
  //     setError(true)
  //   }else{
  //     setError(false)
  //   }
  // }, [title]);

  const deleteTask = (id) => {
    const taskList = [...task];
    const removeTask = taskList.filter((e) => e.id !== id);
    setTasks(removeTask);
  };

  const saveTask = (e) => {
    e.preventDefault(); //ไม่ให้โหลดหน้าใหม่
    if (!title) {
      setError(true);
      return;
    } else {
      setError(false);
      const id = editId ? editId : Math.floor(Math.random() * 1000);
      const taskList = [...task];
      if (editId) {
        //edit
        taskList.forEach((e) => {
          if (e.id === id) {
            e.title = title;
          }
        });
      } else {
        //add
        taskList.push({ id: id, title: title });
      }
      setTasks(taskList);
      setTitle("");
      setEditId(null);
    }
  };

  const onInputTitle = (val) => {
    if (val) {
      setError(false);
    } else {
      setError(true);
      setEditId(null);
    }
    setTitle(val);
  };

  const editTask = (id) => {
    setEditId(id);
    const taskName = task.find((e) => e.id === id);
    setTitle(taskName.title);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          isError={isError}
          onInputTitle={onInputTitle}
          editId={editId}
        />
        <section>
          {task.map((e) => (
            <Item
              key={e.id}
              task={e}
              deleteTask={deleteTask}
              setTitle={setTitle}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
