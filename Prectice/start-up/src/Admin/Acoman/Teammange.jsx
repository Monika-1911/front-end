import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { Slide, toast } from 'react-toastify'

function TeamMange() {

    const [team,setteam]= useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("http://localhost:3000/team")
        setteam(res.data)
    }

    // delete team  
    const deleteTeam=async(id)=>{
        const res = await axios.delete(`http://localhost:3000/team/${id}`)
        console.log(res.data)
        toast.success("delete successfully",{transition:Slide})
        fetchdata()
    }

    // model 
    const [models,setmodels]= useState(null)
    const [edit,setedit] = useState({
        id: "",
        name: "",
        image: "",
        designation: ""
    })

    const getmodel=(data)=>{
        setmodels(data)
        setedit(data)
    }

    const getchange=(e)=>{
        setedit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const Updateteam=async(e)=>{
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/team/${edit.id}`,edit)
            console.log(res.data)
            toast.success("Team data Change..",{transition:Slide})
            fetchdata()
            setmodels(null)
        } catch (error) {
            console.log("Api data not Foundd..",error)
        }
    }

  return (
    <div>
        <Aheader title="Team Manage" data="team manage" />
        <div className="container">
            <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">designation</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team && team.map((data,index)=>{
                                return(
                                        <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.designation}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2' onClick={()=>getmodel(data)}>update</button>
                                            <button className='btn btn-danger' onClick={()=>deleteTeam(data.id)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>

                {
                    models && (
                           <div className="container">
                <h1 className='text-center'>Team Update </h1>
                <div className="row g-5">
                    <div className="col-lg-12 py-5 " >
                        <form >
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text"  name='name' value={edit.name} onChange={getchange} className="form-control border-0 bg-light px-4" placeholder="Your  Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text"  name='designation' value={edit.designation} onChange={getchange} className="form-control border-0 bg-light px-4" placeholder="Your desination Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <input type="url"  name='image' value={edit.image} onChange={getchange} className="form-control border-0 bg-light px-4" placeholder="your Image" style={{ height: 55 }} />
                                </div>

                                <div className="col-12">
                                   <div className="row">
                                    <div className="col-6">
                                         <button className="btn btn-primary w-100 py-3" onClick={Updateteam} type="submit">Update Team</button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-primary w-100 py-3" onClick={()=>setmodels(null)} type="submit">cancle Team</button>
                                    </div>
                                   </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
                    )
                }
        </div>
    </div>
  )
}

export default TeamMange