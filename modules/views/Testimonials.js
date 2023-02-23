import React from 'react'
import { Box, CssBaseline, Container, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

var items = [
  {
    name: 'Dreux Lamour',
    description: 'I seem to learn something new word every day.',
    image: '../../images/testimonial1.jpg',
    alt: 'testimonial1',
  },
  {
    name: 'David Bach',
    description: 'I think it is enjoyable working with vocabulary hour!',
    image: '../../images/testimonial2.jpg',
    alt: 'testimonial2',
  },
  {
    name: 'Ludmila Skálová',
    description: 'I see myself use new vocabulary in my work constantly.',
    image: '../../images/testimonial3.jpg',
    alt: 'testimonial3',
  },
  {
    name: 'Alex Alves Dias',
    description: 'I love when I can use new words I learned in here.',
    image: '../../images/testimonial4.jpg',
    alt: 'testimonial4',
  },
]

const brands = [
  {
    image: '../../images/mashable.png',
    alt: 'mashable',
  },
  {
    image: '../../images/TechCrunch.png',
    alt: 'TechCrunch',
  },
  {
    image: '../../images/tnw.png',
    alt: 'tnw',
  },
]

const ItemsXl = 12
const ItemsLg = 12
const ItemsMd = 12
const ItemsSm = 12
const ItemsXs = 12
const BrandsXl = 12
const BrandsLg = 12
const BrandsMd = 12
const BrandsSm = 12
const BrandsXs = 12

const Testimonials = () => {
  return (
    <Box
      sx={{
        bgcolor: '#FAD6A5',
        flexGrow: 1,
        height: 700,
      }}
    >
      <CssBaseline>
        <Container>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ height: 700 }}
          >
            <Grid
              item
              xs={ItemsXs}
              sm={ItemsSm}
              md={ItemsMd}
              lg={ItemsLg}
              xl={ItemsXl}
            >
              <Carousel
                animation={'slide'}
                autoPlay={'true'}
                indicators={'false'}
                interval={7000}
                duration={1000}
                indicatorContainerProps={{
                  style: {
                    marginTop: '50px', // 5
                  },
                }}
              >
                {items.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      // bgcolor: '#44f',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box
                      component='img'
                      src={item.image}
                      alt={item.alt}
                      sx={{
                        maxWidth: {
                          xs: '12rem',
                          sm: '12rem',
                          md: '11rem',
                          lg: '12rem',
                          xl: '12rem',
                        },
                        height: 'auto',
                        borderRadius: '50%',
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        color: '#143F6B',
                        typography: {
                          xs: 'h4',
                          sm: 'h2',
                          md: 'h2',
                          lg: 'h2',
                          xl: 'h2',
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: 'oblique',
                        color: '#7B8FA1',
                        typography: {
                          xs: 'h6',
                          sm: 'h6',
                          md: 'h5',
                          lg: 'h5',
                          xl: 'h5',
                        },
                        textAlign: 'center',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Carousel>
            </Grid>
            <Grid
              container
              item
              xs={BrandsXs}
              sm={BrandsSm}
              md={BrandsMd}
              lg={BrandsLg}
              xl={BrandsXl}
              justifyContent='center'
              alignItems={'center'}
            >
              {brands.map((brand, i) => (
                <Grid key={i} Item>
                  <Box
                    component='img'
                    src={brand.image}
                    alt={brand.alt}
                    sx={{
                      maxWidth: {
                        xs: '7rem',
                        sm: '9rem',
                        md: '10rem',
                        lg: '12rem',
                        xl: '12rem',
                      },
                      height: 'auto',
                      mx: 2,
                      my: 2,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </CssBaseline>
    </Box>
  )
}

export default Testimonials
