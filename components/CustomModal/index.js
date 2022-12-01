import styles from './styles.module.css';
import { useState } from 'react';
import { 
    Box, 
    Button, 
    Typography, 
    Modal,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export const CustomModal = ({ open, setOpen, name, tags = [] }) => {

//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modalBox}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center'}}>
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <List>
                {tags?.map((tag, idx) => (
                    <ListItemButton key={idx}>
                        <ListItemIcon>
                            <FiberManualRecordSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary={tag} />
                    </ListItemButton>
                ))}
            </List>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
