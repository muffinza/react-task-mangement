import "./item.css"
export default function Item(props){
  const  {task,deleteTask,editTask} = props
  return (
    <div className="list-item">
      <p className="title">{task.title}</p>
      <div className="btn-container">
            <button className="btn" onClick={()=>deleteTask(task.id)}>
                    ลบ
            </button>
            <button className="btn" onClick={()=>editTask(task.id)}>
                    เเก้ไข
            </button>
      </div>
    </div>
  );
}
