import "./item.css"
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
export default function Item(props){
  const  {task,deleteTask,editTask} = props
  return (
    <div className="list-item">
      <p className="title">{task.title}</p>
      <div className="btn-container">
            <BsFillTrash3Fill className="btn" onClick={()=>deleteTask(task.id)} />
            <BsPencilFill className="btn" onClick={()=>editTask(task.id)} />
      </div>
    </div>
  );
}
