import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'
import Typography  from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Checkbox from '@mui/material/Checkbox'
import Button  from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'

function App() {

  const [data, setData] = useState({nombre:'', apellidos:'', edad:'', genero:'', equipo:'', puntuacion:0, checkbox:false})

  const [open, setOpen] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    const handleChangeNombre = (e) => {
        setData({
            ...data,
            nombre: e.target.value
        })
    }

   const handleChangeApellido = (e) => {
    setData({
        ...data,
        apellidos: e.target.value
    })
   }

   const handleChangeEdad = (e) => {
    setData({
        ...data,
        edad: e.target.value
    })
   }

   const handleChangeGenero = (e) => {
    setData({
        ...data,
        genero: e.target.value
    })
   }

    const handleChangeEquipo = (e) => {
        setData({
            ...data,
            equipo: e.target.value
        })
    }

    const handleChangePuntuacion = (event, newValue) => {
        setData({
            ...data,
            puntuacion: newValue,
        })
    }

    const handleChangeCheckbox = (e) => {
        setData({
            ...data,
            checkbox: e.target.checked
        })
    }

    const handleClear = () => {

        setData({nombre:'', apellidos:'', edad:'', genero:'', equipo:'', puntuacion:0, checkbox:false})
      }

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

  return (
    <>
     <Container>
            <Box
            component='form'
            onSubmit={handleSubmit}
            >
                <Grid container spacing={2}>
                    <Grid size={{xs:4, sm:4, md:5}}>
                        <TextField
                        required
                        label='Nombre'
                        variant='outlined'
                        fullWidth
                        value={data.nombre}
                        onChange={handleChangeNombre}
                    />
                    </Grid>
                    <Grid size={{xs:4, sm:4, md:5}}>
                        <TextField
                        required
                        label='Apellidos'
                        variant='outlined'
                        fullWidth
                        value={data.apellidos}
                        onChange={handleChangeApellido}
                    />
                    </Grid>
                <Grid size={{xs:4, sm:4, md:2}}>
                        <TextField
                        required
                        label='Edad'
                        variant='outlined'
                        type='number'
                        fullWidth
                        value={data.edad}
                        onChange={handleChangeEdad}
                    />
                    </Grid>
                    <Grid size={{xs:12, sm:12, md:5}}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Género </FormLabel>
                                <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={data.genero}
                                onChange={handleChangeGenero}
                                >
                                    <FormControlLabel value="Femenino" control={<Radio required />} label="Femenino" />
                                    <FormControlLabel value="Masculino" control={<Radio required />} label="Masculino" />
                                    <FormControlLabel value="Otro" control={<Radio required/>} label="Otro" />
                                </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid size={{xs:12, sm:12, md:7}}>
                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth required>
                                <InputLabel id="demo-simple-select-label">Equipo favorito</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.equipo}
                                label="Equipo favorito"
                                onChange={handleChangeEquipo}
                                >
                                    <MenuItem value={'UD Las Palmas'}>UD Las Palmas</MenuItem>
                                    <MenuItem value={'Real Madrid'}>Real Madrid</MenuItem>
                                    <MenuItem value={'FC Barcelona'}>FC Barcelona</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid size={{xs:12, sm:12, md:12}}>
                        <Divider></Divider>
                    </Grid>
                    <Grid size={{xs:12, sm:12, md:12}}>
                        <Box sx={{mt: 2}}>
                            <Typography variant="h6">Puntúa esta encuesta
                                <Rating 
                                name="survey-rating" 
                                precision={0.5}
                                value={data.puntuacion}
                                onChange={handleChangePuntuacion}
                                />
                            </Typography>
                        </Box>
                        </Grid>
                        <Grid size={{xs:12, sm:12, md:12}}>
                        <FormControlLabel
                        control={<Checkbox checked={data.checkbox} onChange={handleChangeCheckbox}/>}
                        label="He leído los términos y condiciones"
                        />
                        </Grid>
                        <Grid size={{xs:6, sm:6, md:6}}>
                        <React.Fragment>
                        <Button 
                        type='submit' 
                        variant='contained' 
                        fullWidth
                        disabled={!data.checkbox}
                        onClick={handleClickOpen}
                        >Registrar
                            </Button>
                                <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                              > 
                                    <DialogTitle id="alert-dialog-title">
                                    {"Confirmación"}
                                    </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                            ¿Estás seguro de mandar la encuesta?
                                        </DialogContentText>
                                    </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>NO</Button>
                                            <Button onClick={handleClose} autoFocus>SÍ</Button>
                                        </DialogActions>
                              </Dialog>
                        </React.Fragment>
                        </Grid>
                        <Grid size={{xs:6, sm:6, md:6}}>
                            <Button
                            variant='contained'
                            color='warning'
                            fullWidth
                            onClick={handleClear}
                            >Limpiar
                            </Button>
                        </Grid>
                    </Grid>
            </Box>
        </Container>
    </>
  )

}

export default App