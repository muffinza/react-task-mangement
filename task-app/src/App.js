import Header from "./components/Header";
import Item from "./components/item";
import AddForm from "./components/AddForm";
import "./App.css";
import { useState , useEffect} from "react";

function App() {
  const [task, setTasks] = useState(JSON.parse(sessionStorage.getItem("task")) || []);
  const [title, setTitle] = useState("");
  const [isError, setError] = useState(false);
  const [editId, setEditId] = useState(null);
  const [theme,setTheme] = useState("light")
  let firstLoad = true


  // useEffect(() => {
  //  //โดนทุกๆตัว
  //console.log("use use")
  // });

  //useEffect(() => {
    //onMouted ทำงานตอนเปิดหน้าจอครั้งเเรก
   // console.log("use use")
   //},[]);


  // useEffect(() => {
  //   //ทำงานเเค่titelเปลี่ยน 
  //  console.log("use use")
  //  },[title]);
 

  useEffect(() => {
    sessionStorage.setItem("tasks",JSON.stringify(task))
  }, [task]);



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
     
      if(!firstLoad){
        setError(true);
        setEditId(null);
      }
      firstLoad = false
    }
    setTitle(val);
  };

  const editTask = (id) => {
    setEditId(id);
    const taskName = task.find((e) => e.id === id);
    setTitle(taskName.title);
  };

  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme}/>
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
