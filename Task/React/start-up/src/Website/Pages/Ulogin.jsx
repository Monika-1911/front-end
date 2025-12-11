
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Slide, toast } from 'react-toastify'

function Ulogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/")
        }
    },[])

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            const { email, password } = form

            if (email == "" || password == "") {
                console.log("Pls field first data")
                toast.error("Pls field first data")
                return false
            }

            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)

            if (res.data.length === 0) {
                console.log("email does not match")
                toast.error("email does not match.", { transition: Slide })
                return false
            }
            

            const user = res.data[0]

            if (password != user.password) {
                console.log("Password does not match")
                toast.error("Password does not match", { transition: Slide })
                return false
            }

            if(user.status == "block"){
                console.log("Account blocked..")
                toast.error("Account bloced")
                return false
            }

            localStorage.setItem("Uid", user.id)
            localStorage.setItem("Uname", user.name)
            redirect("/")
            toast.success("Login succesfully")
            console.log("login success")

        } catch (error) {

        }
    }

    return (
        <div>
            <section className="bg-light py-3 py-md-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="card border border-light-subtle rounded-3 shadow-sm">
                                <div className="card-body p-3 p-md-4 p-xl-5">

                                    <h2 className="fs-6 fw-normal text-center text-secondary mb-4">login user</h2>
                                    <form >
                                        <div className="row gy-2 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="email" value={form.email} onChange={getchange} className="form-control" name="email" id="email" placeholder="name@example.com" required />
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="password" value={form.password} onChange={getchange} className="form-control" name="password" id="password" placeholder="Password" required />
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex gap-2 justify-content-between">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue name="rememberMe" id="rememberMe" />
                                                        <label className="form-check-label text-secondary" htmlFor="rememberMe">
                                                            Keep me logged in
                                                        </label>
                                                    </div>
                                                    <a href="#!" className="link-primary text-decoration-none">Forgot password?</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <button className="btn btn-primary btn-lg" onClick={getsubmit} type="submit">Log in</button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <p className="m-0 text-secondary text-center">Don't have an account? <Link to="/new" className="link-primary text-decoration-none">Sign up</Link></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ulogin
