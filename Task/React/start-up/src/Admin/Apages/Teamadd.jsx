
import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { Slide, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function TeamAdd() {

    const redirect = useNavigate()

    const [team, setteam] = useState({
        id: "",
        name: "",
        image: "",
        designation: ""
    })

    const getchange = (e) => {
        setteam({
            ...team,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const addTeam = async (e) => {
        e.preventDefault()

        if(team.designation == "" || team.image == "" || team.name == ""){
            console.log("pls field data")
            toast.error("pls field first data",{transition:Slide})
            return false
        }

        try {

            const res = await axios.post("http://localhost:3000/team", team)
            console.log(res.data)
            toast.success("Team Member Add", { transition: Slide })
            setteam({
                id:"",
                name: "",
                image: "",
                designation: ""
            })
            redirect("/teamMange")

        } catch (error) {
            console.log("Api data not Found ... ", error)
        }
    }

    return (
        <div>
            <Aheader title="Team Add" data="team add" />
            <div className="container">
                <h1 className='text-center'>Team Add </h1>
                <div className="row g-5">
                    <div className="col-lg-12 py-5 " >
                        <form onSubmit={addTeam}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" value={team.name} name='name' onChange={getchange} className="form-control border-0 bg-light px-4" placeholder="Your  Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" value={team.designation} name='designation' onChange={getchange} className="form-control border-0 bg-light px-4" placeholder="Your desination Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <input type="url" value={team.image} name='image' onChange={getchange} className="form-control border-0 bg-light px-4" placeholder="your Image" style={{ height: 55 }} />
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Add Course</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TeamAdd
