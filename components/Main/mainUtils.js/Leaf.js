

export const Leaf = ({ attributes, children, leaf }) => {

    if (leaf.bold) {
      children = <strong>{children}</strong>
    }
  
    if (leaf.italic) {
      children = <i><em>{children}</em></i>
    }
  
    if (leaf.underline) {
      children = <u>{children}</u>
    }
    
    if (leaf.highlight) {
      children = <span style={{ background: 'purple' }}>{children}</span>   
    }
    
    
    return (
        <span {...attributes}>
            {children}
        </span>
    )
  
}