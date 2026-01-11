import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AmitiAdd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        img: "",
        desc: "",
        time: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getdata = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:3000/amenities", form)
            console.log(res.data)
            setform({
                id: "",
                name: "",
                img: "",
                desc: "",
                time: ""
            })
            redirect("/amitimange")
        } catch (error) {
            console.log("api data not Found..", error)
        }
    }

    return (
        <div>
            <Aheader />

            <div className="container">
                <div className="row justify-content-center my-5" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-lg-10">
                        <div className="contact-form-wrapper">
                            <h2 className="text-center mb-4">Amities Add data</h2>
                            <form method="post" onSubmit={getdata} className="php-email-form">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input value={form.name} onChange={getchange} type="text" className="form-control" name="name" placeholder="Enter Amities Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input value={form.time} onChange={getchange} type="time" className="form-control" name="time" required />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <input value={form.img} onChange={getchange} type="url" className="form-control" name="img" placeholder="Enter your img" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea value={form.desc} onChange={getchange} className="form-control" name="desc" placeholder="Enter your Desc" required />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary">Add Amities</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmitiAdd