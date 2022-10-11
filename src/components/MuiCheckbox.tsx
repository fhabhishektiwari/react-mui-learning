import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup,FormHelperText } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const MuiCheckbox = () => {
    const [acceptTnc, setAcceptTnc] = useState(false)
    // console.log({acceptTnc})
    const [skills, setSkills] = useState<string[]>([])
    console.log({ skills })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnc(event.target.checked)
    }
    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }
    return (
        <Box margin={12}>
            <Box>
                <FormControlLabel
                    label='I accept terms and conditions'
                    control={<Checkbox color='secondary' size='small' checked={acceptTnc} onChange={handleChange} />} />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={acceptTnc}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row >
                        <FormControlLabel label='HTML' control={<Checkbox value='html' size='small' checked={skills.includes('html')} onChange={handleSkillsChange} />} />
                        <FormControlLabel label='CSS' control={<Checkbox value='css' size='small' checked={skills.includes('css')} onChange={handleSkillsChange} />} />
                        <FormControlLabel label='JavaScript' control={<Checkbox value='javaScript' size='small' checked={skills.includes('javaScript')} onChange={handleSkillsChange} />} />
                    </FormGroup>
                    <FormHelperText>Invalid Selections</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}
