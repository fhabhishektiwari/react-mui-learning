import React,{useState} from 'react'
import {Stack,Autocomplete,TextField} from '@mui/material'
type Skill={
    id:number,
    label:string
}
const skills=['HTML','CSS','JavaScript','TypeScript','React']
const skillsOptions=skills.map((skill,index)=>({
    id:index+1,
    label:skill,
}))

export const MuiAutocomplete = () => {
    const [value, setValue] = useState<string|null>(null);
    const [skill, setSkill] = useState<Skill | null>(null);

    console.log({value})
    console.log({skill})
  return (
    <Stack width={250} spacing={4} margin={4}>
        <Autocomplete
         options={skills}
         renderInput={(params)=><TextField {...params} label='Skills'/>}
         value={value}
         onChange={(event:any,newValue:string|null)=>setValue(newValue)}
         freeSolo
         size='small'
         />
         <Autocomplete
         options={skillsOptions}
         renderInput={(params)=><TextField {...params} label='Skills'/>}
         value={skill}
         onChange={(event:any,newValue: Skill | null)=>setSkill(newValue)}
         size='small'
         />
    </Stack>
  )
}
