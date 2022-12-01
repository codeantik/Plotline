

import Link from 'next/link'
import { Transforms } from 'slate'
import { ReactEditor, useSlateStatic, useFocused, useSelected } from 'slate-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlink, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { removeLink } from '../../utils/customLink';
import styles from '../styles.module.css'


export const AlignElement = ({ attributes, children, element}) => {
    const style = {
        textAlign: element.type
    }
    return (
        <p {...attributes} style={style}>
            {children}
        </p>
    )
}

export const ParagraphElement = ({ attributes, children }) => {
    return (
        <p {...attributes} className={styles.paragraph}>
            {children}
        </p>
    )
} 

export const NumberedListElement = ({ attributes, children}) => {
    return (
      <ol {...attributes}>
        {children}
      </ol>
    )
  }
  
export const ListItemElement = ({ attributes, children }) => {
    return (
      <li type="1" {...attributes}>
        {children}
      </li>
    )
}

// export const LinkElement = ({ attributes, children, element}) => {
//   const editor = useSlateStatic()
//   const path = ReactEditor.findPath(editor, element)
//   return (
//     <>
//      <span style={{
//             marginLeft: "5px",
//             marginRight: "5px",
//             color: "black",
//             cursor: 'pointer'
//       }}
//       onClick = {() => Transforms.removeNodes(editor, { at: path })}
//       >x</span>
//      <a href={element.url} {...attributes}>
//       {children}
//       {element.url}
//      </a>
//     </>
//   )
// }

export const LinkElement = ({ attributes, element, children }) => {
  const editor = useSlateStatic();
  const selected = useSelected();
  const focused = useFocused();

  return (
    <div className={styles.elementLink}>
      <Link {...attributes} href='/' className={styles.elementLinkText} passHref>
        {children}
      </Link>
      {selected && focused && (
        <div className={styles.popup} contentEditable={false}>
          <Link href={element.href} rel="noreferrer" target="_blank" passHref className={styles.elementLinkText}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            {element.href}
          </Link>
          <button onClick={() => removeLink(editor)} className={styles.popupButton}>
            <FontAwesomeIcon icon={faUnlink} />
          </button>
        </div>
      )}
    </div>
  );
};





