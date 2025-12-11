
import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function CourseAdd() {

    const redirect = useNavigate()

    const [course, setcourse] = useState({
        id: "",
        cname: "",
        img: "",
        date: "",
        desc: "",
        author: "",
        title: ""
    })

    const getchange = (e) => {
        setcourse({
            ...course,
            // id create
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(course)
    }

    const AddCourse = async (e) => {
        e.preventDefault()

            if(course.cname == ""){
                console.log("pls field first")
                return false
            }

        try {
            
            const res = await axios.post("http://localhost:3000/courses", course)
            console.log(res.data)
            toast.success("coruse Add Successfully.")
            redirect("/course")
            setcourse({
                id: "",
                cname: "",
                img: "",
                date: "",
                desc: "",
                author: "",
                title: ""
            })
        } catch (error) {
            console.log("Api data not found", error)
        }
    }

    return (
        <div>
            <Aheader title="Course Add" data="Course add" />
            <div className="container">
                <h1 className='text-center'>Course Add </h1>
                <div className="row g-5">
                    <div className="col-lg-12 py-5 " >
                        <form onSubmit={AddCourse}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" name='author' onChange={getchange} value={course.author} className="form-control border-0 bg-light px-4" placeholder="Your Autho Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name='cname' onChange={getchange} value={course.cname} className="form-control border-0 bg-light px-4" placeholder="Your Course Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name='title' onChange={getchange} value={course.title} className="form-control border-0 bg-light px-4" placeholder="your Course title" style={{ height: 55 }} />
                                </div>
                                <div className="col-6">
                                    <input type="date" name='date' onChange={getchange} value={course.date} className="form-control border-0 bg-light px-4" placeholder="your Date" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <input type="url" name='img' onChange={getchange} value={course.img} className="form-control border-0 bg-light px-4" placeholder="your Image" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <textarea value={course.desc} name='desc' onChange={getchange} className="form-control border-0 bg-light px-4 py-3" rows={4} placeholder="Message" defaultValue={""} />
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

export default CourseAdd
