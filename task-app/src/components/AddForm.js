import "./AddForm.css";
import ErrorMessage from "./ErrorMessage";
export default function AddForm(props) {
  const { title,saveTask ,isError,onInputTitle,editId} = props;

  const displayErr ={
    display: isError ? '':'none'
  }
  return (
    <>
      <h2>เเบบฟอร์มจัดการงาน</h2>
      {isError}
      <form>
        <div className="form-control">
          <input
            type="text"
            value={title}
            className="text-input"
            onChange={(e) => onInputTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={(e)=>saveTask(e)} >
            {editId ? "เเก้ไขงาน":"เพิ่มงาน"}
          </button>
        </div>
      </form>
      <div style={{height: '50px'}}>
        <div style={displayErr}>
            <ErrorMessage />
        </div> 
      </div>
    </>
  );
}
