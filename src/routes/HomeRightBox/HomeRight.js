import React from 'react'
import Styles from "./styles/HomeRightStyles.module.css"


function HomeRight() {

    return (
        <div className={`${Styles.rightScreen} container`}>
            <div className={Styles.innerContainer}>
                <form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1vh", borderBottom: "0.5px black solid", paddingBottom: "2vh" }} >
                    <label>Enter your Title</label>
                    <br></br>
                    <input />
                    <br></br><br></br>
                    <label>Enter your Desc</label>
                    <br></br>
                    <textarea />
                    <br></br><br></br>
                    {/* <div className="form-check" style={{ justifyContent: "center", alignSelf: "flex-start", alignItems: "center", display: "flex", flexDirection: "row", gap: "0.5vh" }}>
                        <input className="form-check-input" type="radio" style={{ width: "2vh" }} />
                        <label className="form-check-label">
                            Completed
                        </label>
                    </div>
                    <div className="form-check" style={{ justifyContent: "center", alignItems: "center", alignSelf: "flex-start", display: "flex", flexDirection: "row", gap: "0.5vh" }}>
                        <input className="form-check-input" type="radio" style={{ width: "2vh" }} />
                        <label className="form-check-label">
                            Incomplete
                        </label>
                    </div> */}
                    <button className={"btn btn-primary"}>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default HomeRight