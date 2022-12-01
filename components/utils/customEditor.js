import { Transforms, Editor, Text  } from 'slate';
import { insertLink } from './customLink';


const CustomEditor = {
    isBoldMarkActive(editor) { // isBoldMarkActive checks if the selected text is already in bold or not and returns a true/false response
      const [match] = Editor.nodes(editor, {
        match: n => n.bold === true,
        universal: true,
      })
  
      return !!match
    },
  
    isItalicMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.italic === true,
        universal: true,
      })
  
      return !!match
    },
  
    isUnderlineMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.underline === true,
        universal: true,
      })
  
      return !!match
    },
  
    isHighLightMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.highlight === true,
        universal: true,
      })
      
      return !!match
    },

    isCodeBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'code',
      })
  
      return !!match
    },
  
    isCenterBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'center',
      })
  
      return !!match
    },
  
    isLeftBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'left',
      })
  
      return !!match
    },
    isRightBlockActive(editor) {
        const [match] = Editor.nodes(editor, {
          match: n => n.type === 'right',
        })
    
        return !!match
    },
    isNumberedListBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'numbered-list',
      })
  
      return !!match
    },
  
    toggleBoldMark(editor) { // toggles the bold state of selected text.
      const isActive = CustomEditor.isBoldMarkActive(editor)
      Transforms.setNodes(
        editor,
        { bold: isActive ? null : true }, // isActive true means, text is already bold, so me make it normal
        { match: n => Text.isText(n), split: true }
      )
    },
  
    toggleItalicMark(editor) {
      const isActive = CustomEditor.isItalicMarkActive(editor)
      Transforms.setNodes(
        editor,
        { italic: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },
  
    toggleUnderlineMark(editor) {
      console.log(editor);
      const isActive = CustomEditor.isUnderlineMarkActive(editor)
      Transforms.setNodes(
        editor,
        { underline: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },
  
    toggleHighLightMark(editor) {
      const isActive = CustomEditor.isHighLightMarkActive(editor)
      Transforms.setNodes(
        editor,
        { highlight: isActive ? null : true },
        { match: n => Text.isText(n), split: true },
      )
    },
  
    toggleCodeBlock(editor) {
      const isActive = CustomEditor.isCodeBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'code' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
  
    toggleCenterAlignBlock(editor) {
      const isActive = CustomEditor.isCenterBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? 'left' : 'center' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
  
    toggleLeftAlignBlock(editor) {
      const isActive = CustomEditor.isLeftBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'left' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },

    toggleRightAlignBlock(editor) {
        const isActive = CustomEditor.isRightBlockActive(editor)
        Transforms.setNodes(
          editor,
          { type: isActive ? null : 'right' },
          { match: n => Editor.isBlock(editor, n) }
        )
      },
   
    toggleNumberedListBlock(editor) {
      const isActive = CustomEditor.isNumberedListBlockActive(editor)
      Transforms.unwrapNodes(
        editor, 
        { match: n => n.type === 'numbered-list' ,split: true}
      )
  
      let newProperties = {
        type : isActive ? 'paragraph' : 'list-item'
      }
  
      Transforms.setNodes(
        editor,
        newProperties
      )
  
      if (!isActive) {
        const block = { type: 'numbered-list', children: [] }
        Transforms.wrapNodes(editor, block)
      }
    },
  
    // insertLink(editor, url){
    //     const text = {text :''}
    //     const link = {type : 'link',url,children:[text]}
    //     Transforms.insertNodes(editor,link);
    // },

    handleLinkInsert(editor){
      const url = prompt('Enter link:');
      if (!url){
        alert('Not a valid url');
        return;
      }
      // CustomEditor.insertLink(editor, url)
      insertLink(editor, url);
    },     
}

export default CustomEditor;