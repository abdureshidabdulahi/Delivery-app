 import { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = () => {
  const url = `http://localhost:4000`
  const [list,setList] = useState([])
  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/food/list`) 
    if(response.data.success){
      setList(response.data.data)
    }else{
      toast.error('Error')
    }
  }

  useEffect(()=>{
    fetchList()

  },[])
  return (
    <div className='list flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map(()=>(
          
        ))}
      </div>
    </div>
  )
}

export default List
