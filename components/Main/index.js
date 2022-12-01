import React, { useState, useCallback, useMemo, useEffect } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import Picker from "emoji-picker-react";
import { Header, ToolBar, Speaker } from '../index'
// import NavBar from "../Components/NavBar/NavBar";
// import ToolBar from "../Components/ToolBar/ToolBar";
import CustomEditor from "../utils/customEditor";
import pipe from "lodash/fp/pipe";
// import { withImages } from "../Modules/Utility_Functions";
// import LinkElement from "../Components/LinkElement/LinkElement";
// import AlignElement from "../Components/AlignElement/AlignElement";
// import Tag from '../Components/Tag/Tag'
// import {
//   ListItem,
//   NumberedList,
// } from "../Components/ListComponents/ListComponents";
// import Leaf from "../Components/Leaf/Leaf";
// import Paragraph from "../Components/Paragraph/Paragraph";
// import Image from "../Components/Image/Image";
// import SpeakerBox from "../Components/SpeakerBox/SpeakerBox";
// import "./HomePage.css";
import { AlignElement, LinkElement, ParagraphElement, NumberedListElement, ListItemElement } from './mainUtils.js/Element.js'
import { Leaf } from "./mainUtils.js/Leaf";
import { withLinks } from "../utils/customLink";
import styles from './styles.module.css';

const initialValue = [
  {
    type: "paragraph",
    children: [
      {
        text: "There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randomised wowhich don`t look even slightly believable. If you are going to use a passage. There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variation passages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randowowhich don`t look even slightly believable. If you are going to use a passage.",
      },
    ],
  },
];

const createEditorWithPlugins = pipe(
  withReact,
  withHistory,
  withLinks,
);

export const Main = () => {
  // const [editor] = useState(() => withReact(createEditor()))
  const editor = useMemo(() => createEditorWithPlugins(createEditor()), []);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

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

  
  const handleKeyDownEvent = (event) => {
    if (!event.ctrlKey) {
      return;
    }
    switch (event.key) {
      case "b": {
        event.preventDefault();
        CustomEditor.toggleBoldMark(editor)
        break
      }
      case "i": {
        event.preventDefault();
        CustomEditor.toggleItalicMark(editor)
        break
      }
      case "u": {
        event.preventDefault()
        CustomEditor.toggleUnderlineMark(editor)
        break
      }

      default:
        break
    }
  };

  const handleEmojiClick = (emoji) => {
    editor.insertText(emoji.emoji)
    setShowEmojiPicker(!showEmojiPicker)
  };




  
  return (
    <>
      <div className={styles.container}>
        <h1>Ankit Singh Interview</h1>
        <Slate 
            editor={editor} 
            value={initialValue} 
            style={{width :"200vh"}} 
        >
          <ToolBar
            customEditor={CustomEditor}
            editor={editor}
            setShowPicker={setShowEmojiPicker}
          />

          {showEmojiPicker && (
            <Picker
              width={"100%"}
              onEmojiClick={handleEmojiClick}
            />
          )}

          
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={handleKeyDownEvent}
            onSelectCapture={(e) => {
              console.log('e', e)
            }
            }
            placeholder="Enter some text..."
            spellCheck={false}
            onClick={() => {
              setShowEmojiPicker(false)
            }}
            
          />
          
          <Speaker />
        </Slate>
      </div>
    </>
  );
}
