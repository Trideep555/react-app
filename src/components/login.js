import { Box, Button, TextField } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LoginIcon from '@mui/icons-material/Login';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
function Login(){
    const [value, setValue] = useState('one');
    const [showPassword, setShowPassword] = useState(false);
    const [log,setlog]=useState({email:"",pass:"",msg:""})
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const [sign,setsign]=useState({email:"",phno:"",pass:"",cpass:"",msg:""})
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const SignChange = (event) => {
    setsign({...sign,[event.target.name]:event.target.value})
  };
  
  const LogChange = (event) => {
    setlog({...log,[event.target.name]:event.target.value})
  };
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
  const LogSubmit = ()=>{
    if(log.email==="")
    setlog({...log,"msg":"Enter Email Id"});
    else if(!validEmail.test(log.email))
    setlog({...log,"msg":"Enter Valid Email"});
    else if(log.pass==="")
    setlog({...log,"msg":"Enter Password"});
    else
    setlog({...log,"msg":""});
    
  }
  const SignSubmit = ()=>{
    if(sign.email==="")
    setlog({...sign,"msg":"Enter Email Id"});
    else if(!validEmail.test(sign.email))
    setlog({...sign,"msg":"Enter Valid Email"});
    else if(sign.phno==="")
    setlog({...sign,"msg":"Enter Phone Number"});
    
    else if(sign.pass==="")
    setlog({...sign,"msg":"Enter Password"});
    else if(sign.cpass==="")
    setlog({...sign,"msg":"Enter Confirm Password"});
    else
    setlog({...sign,"msg":""});
    
  }
    return (<>
    <div className='log-page'>
        <div className='log'>
    <Box
    
      sx={{
        width: 400,
        height: 450,
        borderRadius:'10px',
        backgroundColor: '#fafcfb',
        '&:hover': {
          backgroundColor: '#ebf0ec',
        },
      }}
    >
        <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
        <Tab value="one" label="Login" />
        <Tab value="two" label="Signup" />
        
      </Tabs>
    </Box>
    <div className='log-form' style={value=='two' ? {display:'none'}: {display:'block'} }>
    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
           
    <InputLabel color="secondary" htmlFor="outlined-required">Email</InputLabel>
          <OutlinedInput
          required
          color="secondary"
            id="outlined-required"
            type={'text'}
            name="email"
            value={log.email}
            onChange={LogChange}
            endAdornment={
              <InputAdornment position="end">
                
                    <AlternateEmailIcon></AlternateEmailIcon>
                 </InputAdornment>
            }
          label="Email"
          
        />
        </FormControl>
        <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
          <InputLabel color="secondary" htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          required
          color="secondary"
            id="outlined-required"
            type={showPassword ? 'text' : 'password'}
            value={log.pass}
            name="pass"
            
            onChange={LogChange}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" onClick={LogSubmit} color="secondary" style={{marginTop: '3%'}} endIcon={<LoginIcon></LoginIcon>}>Login</Button><br/><br/>
        <span style={{color:"red"}}>{log.msg}</span>
        
        </div>
        <div className='log-form' style={value=='one' ? {display:'none'}: {display:'block'} }>
    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
           
    <InputLabel color="secondary" htmlFor="outlined-required">Email</InputLabel>
          <OutlinedInput
          required
          color="secondary"
            id="outlined-required"
            type={'text'}
            name="email"
            value={sign.email}
            onChange={SignChange}
            endAdornment={
              <InputAdornment position="end">
                
                    <AlternateEmailIcon></AlternateEmailIcon>
                 </InputAdornment>
            }
          label="Email"
          
        />
        </FormControl>
        <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
           
    <InputLabel color="secondary" htmlFor="outlined-required">Phone Number</InputLabel>
          <OutlinedInput
          required
          color="secondary"
            id="outlined-required"
            type={'text'}
            name="phno"
            value={sign.phno}
            onChange={SignChange}
            endAdornment={
              <InputAdornment position="end">
                
                    <ContactPhoneIcon></ContactPhoneIcon>
                 </InputAdornment>
            }
          label="Phone Number"
          
        />
        </FormControl>
        <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
          <InputLabel color="secondary" htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          required
          color="secondary"
            id="outlined-required"
            type={showPassword ? 'text' : 'password'}
            name="pass"
            value={sign.pass}
            onChange={SignChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
          <InputLabel color="secondary" htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
          required
          color="secondary"
            id="outlined-required"
            type={showPassword ? 'text' : 'password'}
            name="cpass"
            value={sign.cpass}
            onChange={SignChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>

        <Button variant="contained"  color="secondary" onClick={SignSubmit} style={{marginTop: '3%'}} endIcon={<LoginIcon></LoginIcon>}>SignUp</Button><br /><br />
        <span style={{color:"red"}}>{sign.msg}</span>
        
        </div>
        </Box>
        </div>
    </div>
    </>)
}
export default Login;