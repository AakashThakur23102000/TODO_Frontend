import React from 'react'
import Styles from "./styles/HomeMidStyles.module.css"
import WelcomeAndStatus from '../../components/reusable/WelcomeAndStatus'
import TasksBox from '../../components/reusable/TasksBox'


function HomeMid(props) {
    
    return (
        <div className={Styles.midScreen}>
            {/* heading and current active status */}
            <WelcomeAndStatus />

            <div className={Styles.showsAllTasks}>
                <TasksBox openTodoModal={props.openTodoModal} />
                <TasksBox openTodoModal={props.openTodoModal} />
                <TasksBox openTodoModal={props.openTodoModal} />
                <TasksBox openTodoModal={props.openTodoModal} />
                <TasksBox openTodoModal={props.openTodoModal} />
                <TasksBox openTodoModal={props.openTodoModal} />
                <TasksBox openTodoModal={props.openTodoModal} />
                <TasksBox openTodoModal={props.openTodoModal} />


            </div>
        </div>
    )
}

export default HomeMid