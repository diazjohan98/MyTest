import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import { RiAddBoxLine } from "react-icons/ri"
import { useEffect, useState, useRef } from "react";
import axios from "axios";
// import { DataGrid } from '@mui/x-data-grid';


// const columns = [
//     { field: 'ID', headerName: 'ID', width: 70 },
//     { field: 'Foto', headerName: '', width: 130 },
//     { field: 'Nombre', headerName: 'name', width: 130 },
//     {
//       field: 'Correo',
//       headerName: 'email',
//       width: 90,
//     },
//     {
//       field: 'Acciones',
//       headerName: 'Actions',
      
//     },
//   ];

function Users(selectedProject) {
    console.log(selectedProject.selectedProject)
    const token = localStorage.getItem("token");

    const projectId = selectedProject.selectedProject.proyecto_id;

    console.log("project id este es: ", projectId)
    const [users, setUsers] = useState([]);

    const getUsers = useRef();

    useEffect(() => {
        getUsers.current = async () => {
          try {
            const response = await axios.get(
              `https://proyecto-mytest.fly.dev/v1/manage/usersByProject/${projectId}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            const dataUsers = response.data;
            setUsers(dataUsers);
            console.log("datos de usuario: ", dataUsers);
          } catch (error) {
            console.error("Error fetching", error);
          }
        };
    
        // Solo se ejecutará una vez al montar el componente
        getUsers.current();
      }, [projectId, token]);

  return (
    <div><Box sx={{ paddingBottom: 5, display: "flex", width: "1000px", justifyContent: "space-between", alignItems: "center" }}>
    <Typography variant="h3" >
      Users
    </Typography>
    <Button sx={{color: "#5030E5", fontSize: "16px", textTransform: "none", border: "none", height: "30px"}} variant="outlined" startIcon={<RiAddBoxLine />}>
        Invite
    </Button>
  </Box>
    
    <Divider></Divider>
    
    {users.map((user, index) => (
        <Box key={index}>
            <Typography>
                {user.usuario.nombre}
            </Typography>
        </Box>
    ))}
    
    </div>
    
  )
}

export default Users