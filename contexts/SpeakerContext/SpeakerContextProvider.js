import { useState } from "react";
import SpeakerContext from "./SpeakerContext";
import pp1 from '../../assets/pp1.png';
import pp2 from '../../assets/pp2.png';
import pp3 from '../../assets/pp3.png';

const INITIAL_VALUE = [{
    type: 'paragraph',
    children: [
    { text: 
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim mollitia dicta architecto, assumenda maiores temporibus nisi consequuntur! Reprehenderit, minima.`
    }],
    },
]
  
const INITIAL_STATE = [
    {name: 'Speaker 1', value: INITIAL_VALUE, timestamp: "09: 45 am", profilepic: pp1},
    {name: 'Speaker 2', value: INITIAL_VALUE, timestamp: "06: 35 pm", profilepic: pp2},
    {name: 'Speaker 3', value: INITIAL_VALUE, timestamp: "07: 30 pm", profilepic: pp3},
]


const SpeakerContextProvider = ({ children }) => {

    const [speakers, setSpeakers] = useState(INITIAL_STATE)

    return (
        <SpeakerContext.Provider value={{ speakers, setSpeakers }}>
            {children}
        </SpeakerContext.Provider>
    )
}

export default SpeakerContextProvider;