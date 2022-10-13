import React from 'react'
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'
export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{marginTop:6,maxHeight:'360px'}}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>IP Address</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row=>(
                        <TableRow key={row.id} sx={{'&:last-child td,&:last-child th':{border:0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                            <TableCell>{row.gender}</TableCell>
                            <TableCell>{row.ip_address}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData=[{
    "id": 1,
    "first_name": "Deeanne",
    "last_name": "Trent",
    "email": "dtrent0@biblegateway.com",
    "gender": "Female",
    "ip_address": "202.113.200.194"
  }, {
    "id": 2,
    "first_name": "Liesa",
    "last_name": "Dorot",
    "email": "ldorot1@soup.io",
    "gender": "Female",
    "ip_address": "16.249.0.82"
  }, {
    "id": 3,
    "first_name": "Marianna",
    "last_name": "Furness",
    "email": "mfurness2@skyrock.com",
    "gender": "Female",
    "ip_address": "125.145.164.237"
  }, {
    "id": 4,
    "first_name": "Walliw",
    "last_name": "Piotrowski",
    "email": "wpiotrowski3@washington.edu",
    "gender": "Female",
    "ip_address": "252.205.108.205"
  }, {
    "id": 5,
    "first_name": "Shirline",
    "last_name": "Garrigan",
    "email": "sgarrigan4@home.pl",
    "gender": "Female",
    "ip_address": "241.115.224.37"
  }, {
    "id": 6,
    "first_name": "Andie",
    "last_name": "Burrow",
    "email": "aburrow5@dion.ne.jp",
    "gender": "Female",
    "ip_address": "173.100.94.215"
  }, {
    "id": 7,
    "first_name": "Zared",
    "last_name": "Huntar",
    "email": "zhuntar6@dedecms.com",
    "gender": "Male",
    "ip_address": "97.224.199.123"
  }, {
    "id": 8,
    "first_name": "Ricoriki",
    "last_name": "Staterfield",
    "email": "rstaterfield7@skyrock.com",
    "gender": "Male",
    "ip_address": "10.119.72.180"
  }, {
    "id": 9,
    "first_name": "Eleanor",
    "last_name": "Oventon",
    "email": "eoventon8@webeden.co.uk",
    "gender": "Female",
    "ip_address": "172.145.91.211"
  }, {
    "id": 10,
    "first_name": "Fulton",
    "last_name": "Habbergham",
    "email": "fhabbergham9@umich.edu",
    "gender": "Male",
    "ip_address": "253.227.23.134"
  }]  
