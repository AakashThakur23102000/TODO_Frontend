import React from 'react'
import Styles from "./styles/TasksBoxStyles.module.css"
// import { MdFileDownloadDone } from "react-icons/md";
// import { IoCloseOutline } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";

function TasksBox(props) {

    return (
        <div className={Styles.container}>
            <h3 className={Styles.tasksHeading}>dhqwbb</h3>
            <AiFillEdit size={32} onClick={() => props.openTodoModal()} />
        </div>
    )
}

export default TasksBox