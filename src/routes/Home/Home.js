// Home.js
import React, { useState } from 'react';
import Styles from "./styles/HomeStyles.module.css";

import HomeLeft from '../HomeLeftBox/HomeLeft';
import HomeRight from '../HomeRightBox/HomeRight';
import HomeMid from '../HomeMidBox/HomeMid';
import TODOShowModal from '../../components/modals/TODOShowModal';
import {Link} from "react-router-dom"

function Home() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={Styles.outerScreen}>
            <div className={Styles.authButtons}>
                <Link to="/SignIn"><button className='btn btn-primary'>Login</button></Link>
                <Link to="/SignUp"><button className='btn btn-warning' style={{ color: "white" }}>Sign Up</button></Link>
            </div>
            <div className={Styles.innerScreen}>
                {/* modal */}
                <TODOShowModal show={showModal} closeModal={() => setShowModal(false)} />

                {/*home left */}
                <HomeLeft />

                {/*home mid */}
                <HomeMid openTodoModal={() => { setShowModal(true) }} />

                {/*home right */}
                <HomeRight />
            </div>
        </div>
    )
}

export default Home;
