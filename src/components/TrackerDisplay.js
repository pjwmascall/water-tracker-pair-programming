import PieChart from './PieChart';
import {useContext, useState} from 'react';
import UserContext from '../context/UserContext';

const TrackerDisplay = ({glasses}) => {

    // const [name, setName] = useState('')
    // const [goal, setGoal] = useState('')

    const {name, setName, goal, setGoal} = useContext(UserContext);

    return (
        <>
            <p>{name}'s daily goal: {goal}</p>
            <p>Glasses drunk: {glasses}</p>
            <PieChart glasses={glasses} goal={goal} />
            { glasses >= goal ? "Goal reached! 🥳" : null }
            <br></br>
        </>
    )
}

export default TrackerDisplay;
