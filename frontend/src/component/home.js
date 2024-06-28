import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Grid, Paper, Link, Box, List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar>
          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 1, 
              background: 'linear-gradient(45deg, #000000 30%, #FF8E53 90%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}
          >
            <a href='/'>LYXUX MAGAZINE</a> 
          </Typography>
          <Button color="inherit" href="#">Home</Button>
          <Button color="inherit" href="/blog">Blogs</Button>
          <Button color="inherit" href="/news">News</Button>
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>Subscribe</Button>
        </Toolbar>
      </AppBar>

      <Box mt={4} flexGrow={1}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            textAlign: 'center', 
            background: 'linear-gradient(45deg, #9900e6 30%, #17dcff 70%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}
        >
          LYXUX MAGAZINE
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Latest News</Typography>
        <Grid container spacing={2}>
          {['First', 'Second', 'Third', 'Fourth'].map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Paper elevation={3} sx={{ p: 2, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
                <Typography variant="body1">{`Mike Johnson Says House Republicans Will Fire Brief Backing Steve Bannon... | 7 Minutes Ago`}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Big News Of The Day</Typography>
            <Paper elevation={3} sx={{ p: 2, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
              <Link href="https://example.com/link-to-article" underline="none">
                <Box display="flex">
                  <img src="https://imageio.forbes.com/specials-images/imageserve/649aeb64570483ef955d4176/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="Business Elite Awards 2024" style={{ width: '100%', height: 'auto', marginRight: '16px' }} />
                </Box>
                <Box mt={2}>
                  <Typography variant="h5">Business Elite Awards 2024 Happening 24th July</Typography>
                  <Typography variant="body2">By Zinnia Lee | 2 Hours Ago</Typography>
                </Box>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Trending Blogs</Typography>
            {['First', 'Second', 'Third', 'Fourth'].map((item, index) => (
              <Paper elevation={3} sx={{ p: 2, mb: 2, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }} key={index}>
                <Typography variant="body1">{`HPE Discover: Bringing AI To The Enterprise In A Consumable Way | By Zinnia Lee | ${index + 2} Hours Ago`}</Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Box mt={4}>
        <Grid container spacing={2}>
          {['First', 'Second', 'Third'].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
                <img src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2019/09/CM_MagazineHeader_HowManyFrench.png?resize=960%2C540" alt={`Feature ${item}`} style={{ width: '100%' }} />
                <Box p={2}>
                  <Typography>Billionaire Charoen To Open Nobu Restaurant Atop Bangkok Skyscraper</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={4} flexShrink={0}>
        <footer>
          <Box display="flex" justifyContent="space-between" p={2} bgcolor="grey.200">
            <Box>
              <Typography variant="h6">Our Services</Typography>
              <List>
                {['IOS Development', 'Web Development', 'Enterprise Solution', 'Blockchain Development', 'IOT Solutions', 'Digital Marketing', 'Multimedia Creations'].map((service, index) => (
                  <ListItem key={index}><ListItemText primary={service} /></ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Typography variant="h6">Quick Links</Typography>
              <List>
                {['Home', 'Blogs', 'News', 'Services', 'Contact Us'].map((link, index) => (
                  <ListItem key={index}><ListItemText primary={link} /></ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Typography variant="h6">Contact Us</Typography>
              <Typography>+44 70 955 110 88</Typography>
              <Typography>+34 60 343 55 48</Typography>
              <Typography>info@lyxux.com</Typography>
              <Typography>London, United Kingdom</Typography>
            </Box>
          </Box>
          <Box textAlign="center" p={2} bgcolor="grey.300">
            <Typography>&copy; 2024 LYXUX LTD All rights reserved</Typography>
          </Box>
        </footer>
      </Box>
    </Container>
  );
};

export default Home;
