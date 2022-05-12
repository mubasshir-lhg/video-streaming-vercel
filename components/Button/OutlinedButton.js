import Button from '@mui/material/Button';
const OutlinedButton = ({text,width,color}) => {
  return (
    <Button variant='outlined' color={color}
      sx={{
        px: 2,
        color: 'white',
        minWidth: "120px",
        minHeight: "40px",
        width:`${width}`,
      }}  >
            {text}
        </Button>
  )
}

export default OutlinedButton