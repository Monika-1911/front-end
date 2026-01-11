import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'

function AminitesMan() {

    const [amit,setamit] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("http://localhost:3000/amenities")
        console.log(res.data)
        setamit(res.data)
    }

  return (
    <div>
        <Aheader />
      <div className="container">
            <h1 className='text-center mt-3'>Aemities Manage</h1>
              <table class="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">img</th>
                            <th scope="col">Name</th>
                            <th scope="col">Time</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            amit && amit.map((data, index) => {
                               
                                return (
                                    <tr key={index} className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "100px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.time}</td>
                                      
                                        <td>
                                            <button  className='btn btn-info' >View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
      </div>
    </div>
  )
}

export default AminitesMan