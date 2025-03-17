import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

export default function Input(){
  return(
     <>
     <br/>
        <form action="">
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Class" variant="outlined" />
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <TextField id="input-with-sx" label="With sx" variant="standard" />

        </form>
     </>
  );
}