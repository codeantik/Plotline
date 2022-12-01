
import styles from '../styles.module.css';
import Image from 'next/image';

export const Icon = (props) => {

    const { icon, handleClick, editor, setShowPicker, title, id, height, rotate } = props

    const handlePicker = () => {

      if (setShowPicker){
        setShowPicker((val) => !val);
      }
      else{
        handleClick(editor);
      }
    }
    // console.log(editor)

    return (
        <Image
          src={icon.src} 
          alt={title} 
          onClick={handlePicker} 
          id={id} 
          style={height ? {height : height} : {}}
          height={icon.height}
          width={icon.width}
          title={title}  
          className={`${styles.icon} ${rotate && styles.rightAlignLogo}`}
      />
    )
  }