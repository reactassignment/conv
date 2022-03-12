import React,{useState,useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton';
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import {setUsers} from '../../redux/actions/UserActions'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


      
function UserCard() {
    
    const [user,selectedUser] = useState(null)
    const newUser=useSelector(((state) => state.selectedUser))
    //console.log("user select",newUser)
    if(newUser===[])
    {
        console.log("gotu")
    }
   // var f=0
    //const dispatch=useDispatch()
    const [loading,setLoading]=useState(0)
    const dispatch=useDispatch()
    const fetchApi=async()=>{
        setLoading(1)
        var response=await axios.get("https://reqres.in/api/users").catch((e)=>
          console.log(e)
        )
        //console.log(response)
    
        if(response)
        {
          response=response.data.data
        }
        
        //console.log(response)

        var response2=await axios.get("https://reqres.in/api/users?page=2").catch((e)=>
          console.log(e)
        )
        //console.log(response2)
        if(response2)
        {
          response2=response2.data.data
        }
        //console.log(response2)
        response=response.concat(response2)
        //console.log(response)

        dispatch(setUsers(response))
        setLoading(0)
        //f=1
      }

      const fetchUser=()=>{
        

        selectedUser(newUser)
        //console.log("merea",user)
        

      }

      


      

      useEffect(()=>{
        setLoading(1)
        setTimeout(fetchApi ,800)
        
         
        //fetchPizzas()
        //setTimeout(fetchPizzas,600)
       // dispatch(setPizzas(pizzas))
      },[])

      useEffect(()=>{
          
        setTimeout(fetchUser ,50)
      })
    return (
    <><div style={{height:'60%',width:'100%',justifyContent:'center'}}>
        {(loading===1)?
            <div style={{height:'100%',width:'95%',backgroundColor:'#fff',display:'flex',justifyContent:'center',alignItems:'center'}}>
                 <div className="container" style={{height:'100%',width:'100%',display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
                     <div style={{height:'100%',width:'100%',display:'flex',flex:1,justifyContent:'center',alignItems:'center',marginLeft:'20%'}}>
                     <Skeleton variant="rectangular" animation="wave" width={'75%'} height={'90%'} />
                    </div>
                 
                    <div style={{flexDirection:'column',height:'100%',width:'100%',display:'flex',marginLeft:'-50%',flex:1,justifyContent:'center',alignItems:'center'}}>
                    <h4 className='top-left' style={{paddingLeft:10,paddingRight:10,width:'60%',backgroundColor: 'rgba(71, 70, 70, 0.807)',height:25,borderRadius:15 ,marginLeft:'-45%'}}>

<Skeleton variant='text'  width={'100%'} height={'100%'}  sx={{bgcolor:'hsla(230, 9%, 80%,0.9)'}}></Skeleton>


</h4>
                    
                    <h2 style={{marginLeft:'-45%'}}>Loading...</h2>
                    <h4 className='top-left' style={{paddingLeft:10,paddingRight:10,width:'50%',height:25,backgroundColor: 'rgba(71, 70, 70, 0.807)',borderRadius:15 ,marginLeft:'-45%'}}>

                        <Skeleton variant='text'  width={'100%'} height={'100%'}  sx={{bgcolor:'hsla(230, 9%, 80%,0.9)'}}></Skeleton>

                        
                    </h4>
                    
                    </div>
                </div>
                
            </div>
            :
            <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                <Card sx={{ minWidth:'50%' ,height:'90%',marginTop:'1.5%',backgroundColor:'#f7f4af'}}>
                    {user===null?
                    <>
                <CardContent style={{marginTop:50}}><h1>Select a user to view user details.</h1></CardContent>
                <CardContent><h2>User Details will appear here</h2></CardContent>
                </>:
                <>
                <CardContent style={{marginTop:-25}}><h2>Name : {user.first_name} {user.last_name}</h2></CardContent>
                <h2 style={{marginTop:-30,textDecorationLine:'underline'}}>User Info</h2>
                <CardContent style={{textAlign:'left',width:'80%',backgroundColor:'hsla(80,50%,20%,0.4)',marginLeft:'7%',marginTop:-20}}>
                    
                <h3>Id : {user.id}</h3>
                
                <h4>Email: {user.email}</h4>
                <img src={user.avatar} alt="user avatar" style={{borderRadius:15,height:130}}/>
                </CardContent>
                </>
}
                </Card>
            </div>
        }
    </div>
    </>
  )
}

export default UserCard