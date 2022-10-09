import { Typography } from '@mui/material'

import useClasses from '@/hooks/useClasses'

import styles from './styles'

const Home = () => {
  const classes = useClasses(styles)

  return (
    <div className={classes.content}>
      <Typography className={classes.title} variant='h1' component='h2'>
        Home
      </Typography>
    </div>
  )
}

export default Home
