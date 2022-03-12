import { Button } from '@mui/material'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {selectedUser} from '../../redux/actions/UserActions'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function ButtonComponent() {
    const users=useSelector((state)=>state.allUsers.users)

    
  
  const dispatch = useDispatch();
  const fetchUserDetail = async (id) => {
    const response = await axios
      .get(`https://reqres.in/api/users/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      //console.log(response.data)
    dispatch(selectedUser(response.data.data));
  };

    //console.log(users,"users here")
    const renderList=users.map((user)=>{
    const {id}=user
return(
     
        <Grid item xs={2} sm={4} md={4} key={id}>
            <Item>
                <Button size='medium' variant='outlined' value={id} style={{color:'black'}} onClick={(e)=>{
                    var t=(e.target.value)
                    // console.log(e.target.value)
                    fetchUserDetail(t)
                }}>
        {id}
    </Button>
    </Item>
          </Grid>
    
        
    )})
  return (
      <div style={{color:'black',display:'flex',flexDirection:'row',justifyContent:'center',margin:10,padding:10}}>
           <Box sx={{ flexGrow: 1,justifyContent:'center' }}>
      <Grid container spacing={{ xs:1, md: 1 }} columns={{ xs: 'auto', sm: 'auto', md: 'auto' }}>
      {renderList}
      </Grid>
    </Box>
      </div>
  )
}

export default ButtonComponent