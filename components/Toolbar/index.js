import React, { useContext } from "react";
import { Icon } from "./toolbarUtils/Icon";
import styles from './styles.module.css';
import boldLogo from '../../assets/bold.png'
import italicLogo from '../../assets/italics.png'
import underlineLogo from '../../assets/underline.png'
import left from '../../assets/left.png'
import center from '../../assets/center.png'
import plus from '../../assets/plus.png'
import link from '../../assets/link.png'
import smiley from '../../assets/smiley.png'
import numberedList from '../../assets/numberedList.png'
import SpeakerContext from "../../contexts/SpeakerContext/SpeakerContext";

export const ToolBar = (props) => {

    // const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    const { setSpeakers } = useContext(SpeakerContext)
    const { customEditor, editor, setShowPicker } = props

    const handleAddBlock = (editorArea) => {
        setSpeakers((prevSpeakers) => [
            ...prevSpeakers,
            {name: null, value: editorArea.children, timestamp: new Date(Date.now()).toLocaleTimeString(undefined, {timeZone: 'Asia/Kolkata'}), profilepic: null}
        ])
    }

    return (
        <div className={styles.toolbar}>
            <Icon
                icon={boldLogo}
                handleClick={customEditor.toggleBoldMark}
                editor={editor}
                title="bold"
            />
            <Icon
                icon={italicLogo}
                handleClick={customEditor.toggleItalicMark}
                editor={editor}
                title="italic"
            />
            <Icon
                icon={underlineLogo}
                handleClick={customEditor.toggleUnderlineMark}
                editor={editor}
                title="underline"
            />
            <Icon
                icon={left}
                handleClick={customEditor.toggleLeftAlignBlock}
                editor={editor}
                title="align left"
            />
            <Icon
                icon={center}
                handleClick={customEditor.toggleCenterAlignBlock}
                editor={editor}
                title="align center"
            />
            <Icon
                icon={left}
                rotate
                handleClick={customEditor.toggleRightAlignBlock}
                editor={editor}
                title="align right"
            />
            <Icon
                icon={numberedList}
                handleClick={customEditor.toggleNumberedListBlock}
                editor={editor}
                title="numbered list"
            />
            <Icon
                icon={link}
                handleClick={customEditor.handleLinkInsert}
                editor={editor}
                title="insert link"
                className={styles.link}
                id="#link"
            />
            <Icon
                icon={smiley}
                setShowPicker={setShowPicker}
                title="add emoji"
                className={styles.emoji}
                id="#emoji"
            />
            <Icon
                icon={plus}
                handleClick={handleAddBlock}
                editor={editor}
                title="add block"
            />
        
        </div>
    );
}
