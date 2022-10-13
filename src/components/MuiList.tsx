import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton,Divider } from '@mui/material'
import { Mail } from '@mui/icons-material'
export const MuiList = () => {
    return (
        <Box sx={{ width: '400px', bgcolor: '#efefef' }} m={5}>
            <List>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 1' secondary="July 20, 2014" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton>

                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>

                        <ListItemText primary='List Item 2' secondary="Jan 9, 2014" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton>

                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>

                        <ListItemText primary='List Item 3' secondary="Jan 7, 2014" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}
