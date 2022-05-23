import React, { useContext, useState } from 'react';
import {Context} from "../../render";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function CreateNotice(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { updateStringTypography, updateStringText, updateStringCounter, updateStringDate, createN} = useContext(Context)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        var now = new Date().
          toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).
          replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');

        createN()
        updateStringTypography(data.get('typography'))
        updateStringText(data.get('text'))
        updateStringCounter(0)
        updateStringDate(now)        

    }

  return (
    <div>
      <Button onClick={handleOpen}>НАПИСАТЬ УВЕДОМЛЕНИЕ</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            НАПИШИТЕ УВЕДОМЛЕНИЕ
          </Typography>
          <TextField required id="typography" label="заголовок" name="typography" variant="outlined" style={{margin: "10px", width: '97%'}}/>
          <TextField required id="text" label="текст" name="text" variant="outlined" style={{margin: "10px", width: '97%'}}/>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Добавить уведомление
            </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateNotice;