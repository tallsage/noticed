import React, { useContext } from 'react';
import {Context} from "../../render";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Create from "@mui/icons-material/Create";
import { CardActionArea, CardActions } from '@mui/material';

function Noticed(props) {

    const { deleteNoticed, state } = useContext(Context)

    const handleDelete = () => {
        state.noticed.findIndex(el => el.typography === props.key)
        console.log(state.noticed.findIndex(el => el.typography === props.key));
        // deleteNoticed()
    }

    return (
        <Card sx={{ width: 345, margin: 1, minHeight: 130 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.typography.length < 241 ? props.typography : props.typography.slice(0,239)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
            {props.counter}
        </Typography>
        {props.admin ? (
            <div>
                <IconButton aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="rewrite">
                    <Create />
                </IconButton>
            </div>
        ) : <></>}
        <Typography variant="body2" color="text.secondary" style={{marginLeft: '200px'}}>
            {props.date}
        </Typography>
      </CardActions>
    </Card>
  );
}

Noticed.defaultProps = {
    typography: 'typography',
    text: 'text text text',
    counter: '3.141592',
    date: '29-05-2013'
}

export default Noticed;