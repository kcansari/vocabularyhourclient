import { DoneAll, Whatshot, Widgets } from '@mui/icons-material'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const gridItems = [
  { Icon: DoneAll, header: 'Easy to use', content: ' Lorem ipsum dolor' },
  {
    Icon: Whatshot,
    header: 'Sustainable',
    content: 'Donec nec lacus vel ligula',
  },
  { Icon: Widgets, header: 'Flexibility', content: 'Donec mollis nulla' },
]

const TextXl = 4
const TextLg = 4
const TextMd = 4
const TextSm = 4
const TextXs = 2

const Features = () => {
  return (
    <Box
      id='features'
      sx={{
        bgcolor: '#CFB997',
        width: '100%',
        height: '720px',
        display: 'flex',
        // flexWrap: 'wrap',
      }}
    >
      <Grid
        container
        direction={{
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
        }}
        wrap='nowrap'
        sx={{ overflow: 'auto' }}
        justifyContent='center'
        alignItems='center'
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {gridItems.map(({ Icon, header, content }, index) => (
          <Grid
            container
            item
            justifyContent='flex-start'
            alignItems='center'
            direction='column'
            xs={TextXs}
            sm={TextSm}
            md={TextMd}
            lg={TextLg}
            xl={TextXl}
            key={index}
          >
            {<Icon sx={{ fontSize: 60, color: '#A75D5D', mb: 3 }} />}

            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#143F6B',
              }}
            >
              {header}
            </Typography>
            <Typography
              variant='h6'
              gutterBottom
              sx={{
                fontStyle: 'oblique',
                color: '#6B728E',
              }}
            >
              {content}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Features
