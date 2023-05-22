import { Link } from "react-router-dom";


const FormEdit = ({title, description, id}) => {

  console.log(title);
  console.log(id);

  const handleEdit = () => {
    console.log("edit");
  }

  const handleDelete = async () => {
    // console.log("delete");
    try {

      const data = await fetch(`http://localhost:5000/posts/${id}`, {
          method:'DELETE'
      })


  const res = await data.json()
  console.log(res);

  if(res.message === "Deleted"){
      window.location.reload();
  }    
      
  } catch (error) {
      console.log(error);
  }
  }

  return (
    <div className='formEdit'>
        <div className='form_title'>{title}</div>
        <div className='form_content'>{description}</div>
        <div>
            <button onClick ={handleDelete}>Delete</button>
            <div className='form_link'><Link className='button_link' to={`/myforms/${id}`}>Edit</Link></div>
        </div>
    </div>
  )
}

export default FormEdit;