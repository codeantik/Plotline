
import { SpeakerBox } from './speakerUtils/speakerBox'
import { useState, useContext, useEffect } from 'react';
import styles from './styles.module.css';
import pp1 from '../../assets/pp1.png'
import pp2 from '../../assets/pp2.png'
import pp3 from '../../assets/pp3.png'
import SpeakerContext from '../../contexts/SpeakerContext/SpeakerContext';
import { CustomModal } from '../index';

const INITIAL_VALUE = [{
  type: 'paragraph',
  children: [
    { text: 
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim mollitia 
      dicta architecto, assumenda maiores temporibus nisi consequuntur! Reprehenderit, minima.`
    }],
  },
]

const INITIAL_STATE = [
  {name: 'Speaker 1', value: INITIAL_VALUE, timestamp: "09: 45 am", profilepic: pp1},
  {name: 'Speaker 2', value: INITIAL_VALUE, timestamp: "06: 35 pm", profilepic: pp2},
  {name: 'Speaker 3', value: INITIAL_VALUE, timestamp: "07: 30 pm", profilepic: pp3},
]

export const Speaker = () => {

  const { speakers } = useContext(SpeakerContext)
  const [tags, setTags] = useState(Array.from(new Array(speakers.length)).map(() => []))
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState([])
  // console.log('speaker-context', speakers)

  // useEffect(() => {
  //   setSpeakers(INITIAL_STATE)
  // })

  const handleModal = (data) => {
    setModalData(data)
    setModalOpen(true)
  }

  return (
    <div className={styles.speakerBox}>
        <h4>
            Box 1
        </h4>

        {speakers && speakers.length > 0 ? (
          <div>
            {speakers.map((speaker, idx) => (
              <div className={styles.speakerContent}  key={idx}>
                  <SpeakerBox
                    setTags={setTags}
                    tags={tags}
                    index = {idx}
                    name={speaker.name || `Speaker ${idx}`}
                    value={speaker.value || INITIAL_VALUE}
                    timestamp={speaker.timestamp || new Date(Date.now()).toLocaleTimeString(undefined, {timeZone: 'asia/kolkata'})}
                    profilepic={speaker.profilepic || pp1}
                />
                {tags && tags.length >= 1 && tags[idx] && tags[idx].length >= 1 && 
                <div 
                  className={styles.tagContainer}
                  onClick={() => handleModal(tags[idx])}
                >
                  {tags[idx][0].substring(0, Math.min(12, tags[idx][0].length))} ...
                </div>}
                {tags && tags[idx] && tags[idx].length > 0 && 
                <CustomModal 
                  open={modalOpen} 
                  setOpen={setModalOpen} 
                  tags={modalData} 
                  name={speaker.name || `Speaker ${idx}`}
                />}
              </div>
            ))}
            {/* {tags.map((tag) => (
              <div style={{ border: '2px solid black'}}>
                {tag && tag.length >= 1 && tag[0].substring(0, Math.min(12, tag[0].length))} ...
              </div>
            ))} */}
          </div>
        ) : (
          <div>
            <h3 className={styles.noSpeakers}>No speakers available</h3>
          </div>
        )}
    </div>
  )
}
