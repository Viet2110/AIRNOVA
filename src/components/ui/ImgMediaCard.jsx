import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import LOGO from "../../assets/LOGO.png"
import { RiImageAddFill } from 'react-icons/ri';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
export default function ImgMediaCard({ imgUrl, handleImge }) {
    return (
        <>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                sx={{ mt: 2, }}
                tabIndex={-1}
                startIcon={<RiImageAddFill />}
            >
                <VisuallyHiddenInput
                    type="file"
                    onChange={handleImge}
                    multiple
                />
            </Button>
            <Card sx={{ maxWidth: 345, m: "auto", mt: 3 }}>
                <CardMedia
                    component="img"
                    alt="Paella dish"
                    height="140"
                    image={imgUrl}
                />
            </Card>
        </>

    );
}
