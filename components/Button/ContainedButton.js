import Button from '@mui/material/Button';
const ContainedButton = ({text,width,color}) => {
  return (
      <Button sx={{
          minHeight: "40px",
          width:`${width}`,
          px:5,
        }} variant='contained' color={color}  >
            {text}
        </Button>
  )
}

export default ContainedButton