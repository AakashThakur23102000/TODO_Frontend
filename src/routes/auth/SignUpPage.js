import React, { useState } from 'react'

function SignUpPage() {

    const [state, setState] = useState({
        sfirst: "",
        slast: "",
        semail: "",
        spassword: ""
    })

    const signUpHandler = (e) => {
        e.preventDefault();
        if (state.sfirst === "" || state.slast === "" || state.semail === "" || state.spassword === "") {
            alert("Fill all Columns first.")
        } else {
            console.log(state);
        }
    }

    return (
        <section style={{ border: "1px black solid", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
                <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-3 fw-bold ls-tight">
                                The best offer <br />
                                <span className="text-primary">for your business</span>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                quibusdam tempora at cupiditate quis eum maiores libero
                                veritatis? Dicta facilis sint aliquid ipsum atque?
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card">
                                <div className="card-body py-5 px-md-5">
                                    <form>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">First name</label>
                                                    <input type="text" id="form3Example1" className="form-control" value={state.sfirst} onChange={(e) => { setState({ ...state, sfirst: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label">Last name</label>
                                                    <input type="text" id="form3Example2" className="form-control" value={state.slast} onChange={(e) => { setState({ ...state, slast: e.target.value }) }} />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <label className="form-label">Email address</label>
                                            <input type="email" id="form3Example3" className="form-control" value={state.semail} onChange={(e) => { setState({ ...state, semail: e.target.value }) }} />
                                        </div>


                                        <div className="form-outline mb-4">
                                            <label className="form-label">Password</label>
                                            <input type="password" id="form3Example4" className="form-control" value={state.spassword} onChange={(e) => { setState({ ...state, spassword: e.target.value }) }} />
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={signUpHandler}>
                                            Sign up
                                        </button>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SignUpPage