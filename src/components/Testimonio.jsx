import React, {useState} from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Testimonio({id, imageUrl, name, country, occupation, description}) {
    const [liked, setLiked] = useState(false)

    function handleLiked() {
        setLiked(!liked)
    }

    return (
        <div align="center">
            <Card sx={{maxWidth: 600}}>
                <CardMedia
                    sx={{height: 300}}
                    image={imageUrl}
                    title={'Imagen de ' + name}
                    alt={'Imagen de ' + name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name} en {country}
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                        {occupation}
                    </Typography>
                    <Typography variant="body2" align="justify" sx={{color: 'text.secondary'}}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton color='error' onClick={handleLiked}>
                        {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                    </IconButton>
                </CardActions>
            </Card>
            <br/>
        </div>
    )
}

export default Testimonio