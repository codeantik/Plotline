import { useEffect, useState, useCallback } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { Selection } from 'slate';
import { withHistory } from 'slate-history';
import Image from 'next/image';
import styles from '../styles.module.css';
import CustomEditor from '../../utils/customEditor';
import { AlignElement, LinkElement, ListItemElement, NumberedListElement, ParagraphElement } from '../../Main/mainUtils.js/Element';
import { Leaf } from '../../Main/mainUtils.js/Leaf';

export const SpeakerBox = (props) => {
  const [editor] = useState(() => withHistory(withReact(createEditor())), []);
  const {name, value, timestamp, profilepic, index, tags, setTags } = props
  const [selectedText, setSelectedText] = useState([])

//   useEffect(() => {
//     console.log(Selection)
//   }, [Selection])

 const handleAddedText = () => {
    const data = editor.children[0].children.filter(child => child.highlight)
    setSelectedText(data)
    let tmpTags = [...tags];
    tmpTags[index] = data.map((tag) => tag.text)
    setTags(tmpTags)
 }

 console.log(selectedText)

//  const handleRender = useCallback((props) => {
//     return <ParagraphElement {...props} />
//  }, [])

const renderElement = useCallback((props) => {
    // renders block element in slate editor
    switch (props.element.type) {
        case "numbered-list":
            return <NumberedListElement {...props} />
        case "list-item":
            return <ListItemElement {...props} />
        case "link":
            return <LinkElement {...props} />
        case "left":
            return <AlignElement {...props} />
        case "right":
            return <AlignElement {...props} />
        case "center":
            return <AlignElement {...props} />
        default:
            return <ParagraphElement {...props} />
    }
  }, []);
  
  const renderLeaf = useCallback((props) => {
    // renders inline element in slate editor
    return <Leaf {...props} />;
  }, []);

  return (
    <>
        <div className={styles.speaker}>
            <div className={styles.speakerInfo}>
                <Image src={profilepic.src} alt="ppic" height={10} width={10} />
                <h4>
                    {name} {" "}
                    <span className={styles.speakerTimestamp}>
                        {timestamp}
                    </span>
                    <button
                        className={styles.addTagBtn}
                        onClick={() => CustomEditor.toggleHighLightMark(editor)}
                    >
                        Add Tags
                    </button>
                </h4>
                </div>
                <div className={styles.speakerComment}>
            <Slate 
                editor={editor}
                value={value}
                onChange={handleAddedText}
            >
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    spellCheck = {false}
                />
            </Slate>
            </div>
        </div>
    </>
  )
}