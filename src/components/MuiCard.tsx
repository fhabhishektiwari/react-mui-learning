import { Box, Card, CardContent, Typography,CardActions,Button,CardMedia,Stack } from '@mui/material'

export const MuiCard = () => {
    return (
        <Stack direction='row' spacing={4}>
        <Box width='300px'>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image='https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React</Typography>
                    <Typography variant='body2' color='text.primary'>
                        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

                        Declarative views make your code more predictable and easier to debug.
                    </Typography>
                    <CardActions>
                        <Button size='small' variant='contained'>Share</Button>
                        <Button size='small' variant='contained'>Read More</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
        <Box width='300px'>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image='https://media.istockphoto.com/photos/coding-language-development-icon-on-yellow-background-software-picture-id1372764637?b=1&k=20&m=1372764637&s=612x612&w=0&h=dQeATLH3mWfGQ_6YklV7jX5lFWd_gZKPsj30Dz68mnI='
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React</Typography>
                    <Typography variant='body2' color='text.primary'>
                        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

                        Declarative views make your code more predictable and easier to debug.
                    </Typography>
                    <CardActions>
                        <Button size='small' variant='contained'>Share</Button>
                        <Button size='small' variant='contained'>Read More</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
        <Box width='300px'>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image='https://source.unsplash.com/random'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React</Typography>
                    <Typography variant='body2' color='text.primary'>
                        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

                        Declarative views make your code more predictable and easier to debug.
                    </Typography>
                    <CardActions>
                        <Button size='small' variant='contained'>Share</Button>
                        <Button size='small' variant='contained'>Read More</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
        </Stack>
    )
}
