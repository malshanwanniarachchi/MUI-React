import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, CardMedia, Box, List, ListItem, ListItemText } from '@mui/material';

const articles = [
  {
    title: 'Billionaire Charoen To Open Nobu Restaurant Atop Bangkok Skyscraper',
    content: 'Billionaire Charoen Sirivadhanabhakdi’s Asset World Plans To Open A Nobu Restaurant On The Roof Deck Of Its Empire Mixed-Used Office, Residential And Commercial Tower In Central Bangkok To Tap On The Tourism Boom.',
  },
  {
    title: 'Billionaire Charoen To Open Nobu Restaurant Atop Bangkok Skyscraper',
    content: 'Billionaire Charoen Sirivadhanabhakdi’s Asset World Plans To Open A Nobu Restaurant On The Roof Deck Of Its Empire Mixed-Used Office, Residential And Commercial Tower In Central Bangkok To Tap On The Tourism Boom.',
  },
  {
    title: 'Billionaire Charoen To Open Nobu Restaurant Atop Bangkok Skyscraper',
    content: 'Billionaire Charoen Sirivadhanabhakdi’s Asset World Plans To Open A Nobu Restaurant On The Roof Deck Of Its Empire Mixed-Used Office, Residential And Commercial Tower In Central Bangkok To Tap On The Tourism Boom.',
  },
  {
    title: 'Billionaire Charoen To Open Nobu Restaurant Atop Bangkok Skyscraper',
    content: 'Billionaire Charoen Sirivadhanabhakdi’s Asset World Plans To Open A Nobu Restaurant On The Roof Deck Of Its Empire Mixed-Used Office, Residential And Commercial Tower In Central Bangkok To Tap On The Tourism Boom.',
  },
  {
    title: 'Billionaire Charoen To Open Nobu Restaurant Atop Bangkok Skyscraper',
    content: 'Billionaire Charoen Sirivadhanabhakdi’s Asset World Plans To Open A Nobu Restaurant On The Roof Deck Of Its Empire Mixed-Used Office, Residential And Commercial Tower In Central Bangkok To Tap On The Tourism Boom.',
  },
  {
    title: 'Billionaire Charoen To Open Nobu Restaurant Atop Bangkok Skyscraper',
    content: 'Billionaire Charoen Sirivadhanabhakdi’s Asset World Plans To Open A Nobu Restaurant On The Roof Deck Of Its Empire Mixed-Used Office, Residential And Commercial Tower In Central Bangkok To Tap On The Tourism Boom.',
  },
  
];

const Blog = () => {
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
          <Button className='home' color="inherit" href="/">Home</Button>
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
          Blogs
        </Typography>
        <Grid container spacing={4} marginTop={'5%'}>
          {articles.map((article, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.content}
                  </Typography>
                </CardContent>
              </Card>
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

export default Blog;
