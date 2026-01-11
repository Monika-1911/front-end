import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function RoomAdd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        guests: "",
        price: "",
        type: "",
        img: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            // id new
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const addRoom = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/rooms", form)
            // console.log(res.data)
            setform({
                id: "",
                name: "",
                guests: "",
                price: "",
                type: "",
                img: ""
            })
            redirect("/roommage")
        } catch (error) {
            console.log("Api data not Show", error)
        }
    }

    return (
        <div>
            <Aheader />
            <div className="container">
                <div className="row justify-content-center my-5" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-lg-10">
                        <div className="contact-form-wrapper">
                            <h2 className="text-center mb-4">Room Add data</h2>
                            <form  method="post" onSubmit={addRoom} className="php-email-form">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input value={form.name} type="text" onChange={getchange} className="form-control" name="name" placeholder="Enter Room Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input value={form.type} type="text" onChange={getchange} className="form-control" name="type" placeholder="Enter your type" required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <select value={form.guests} className="form-select" onChange={getchange} id="" name="guests" required>
                                                <option value hidden>Choose guests</option>
                                                <option value={1}>1 guests</option>
                                                <option value={2}>2 guests</option>
                                                <option value={3}>3 guests</option>
                                                <option value={4}>4 guests</option>
                                                <option value={5}>5 guests</option>
                                                <option value={6}>6 guests</option>
                                                <option value={7}>7 guests</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" value={form.price} className="form-control" onChange={getchange} name="price" placeholder="Enter your Price" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="url" value={form.img} className="form-control" onChange={getchange} name="img" placeholder="Enter your img" required />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary">Add Rooms</button>
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

export default RoomAdd