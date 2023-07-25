import { Box, Grid, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 0,
    title: 'All Products',
    link: 'pages/All-Products',
    subcategories: [],
  },
  {
    id: 1,
    title: 'Home Decor',
    url: '/collections/home-decor',
    subcategories: [
      { title: 'Ashtrays', id: 1, link: '/pages/Ashtrays' },
      { title: 'Bowls', id: 2, link: 'pages/Ashtrays' },
      { title: 'Candle Stands', id: 3, link: 'pages/Candle-Stands' },
      { title: 'Candy Jars', id: 4, link: 'pages/Candy-Jars' },
      { title: 'Tissue Boxes', id: 5, link: 'pages/Tissue-Boxes' },
      { title: 'Miscellaneous Decor', id: 6, link: 'pages/Miscellaneous-Decor' },
      { title: 'Dry Fruit', id: 7, link: 'pages/Dry-Fruit' },
      { title: 'Jewelry Boxes', id: 8, link: 'pages/Jewelry-Boxes' },
      { title: 'Key Hangers', id: 9, link: 'pages/Key-Hangers' },
      { title: 'Kitchen Organizers', id: 10, link: 'pages/Kitchen-Organizers' },
      { title: 'Vases', id: 11, link: 'pages/Vases' },
      { title: 'Sculptures & Monuments', id: 12, link: 'pages/Sculptures-Monuments' },
      { title: 'Kitchen Utensils', id: 13, link: 'pages/Kitchen-Utensils' },
      { title: 'Magazine Racks', id: 14, link: 'pages/Magazine-Racks' },
      { title: 'Pen Holders', id: 15, link: 'pages/Pen-Holders' },
      { title: 'Powder Boxes', id: 16, link: 'pages/Powder-Boxes' },
      { title: 'Vessels', id: 17, link: 'pages/Vessels' },
      { title: 'Dhools/Tablas', id: 18, link: 'pages/Dhools' },
      { title: 'Serving Trays', id: 19, link: 'pages/Serving-Trays' },
      { title: 'Sugar Pots', id: 20, link: 'pages/Sugar-Pots' },
      { title: 'Tea Coasters', id: 21, link: 'pages/Tea-Coasters' },
      { title: 'Tea Sets', id: 22, link: 'pages/Tea-Sets' },
      { title: 'Waste Bins', id: 23, link: 'pages/Waste-Bins' },
    ],
  },
  {
    id: 2,
    title: 'Kitchen Decor',
    url: '/collections/kitchen-decor',
    subcategories: [
      {
        id: 1,
        title: 'HotPots',
        link: '/pages/HotPots',
      },
      {
        id: 2,
        title: 'Tea Coasters',
        link: '/pages/Tea-Coasters',
      },
      {
        id: 3,
        title: 'Kitchen Utensils',
        link: '/pages/Kitchen-Utensils',
      },
      {
        id: 4,
        title: 'Serving Trays',
        link: '/pages/Serving-Trays',
      },
      {
        id: 5,
        title: 'Kitchen Organizers',
        link: '/pages/Kitchen-Organizers',
      },
      {
        id: 6,
        title: 'Sugar Pots',
        link: '/pages/Sugar-Pots',
      },

      // Add more subcategories as needed
    ],
  },
  {
    id: 3,
    title: 'Wall Hangings',
    url: '/collections/wall-hanging',
    subcategories: [
      {
        id: 0,
        title: 'Wall Mirrors',
        link: 'pages/Sugar-Pots',
      },
      {
        id: 1,
        title: 'Hand Made Paintings',
        link: 'pages/Wall-Mirrors',
      },
      {
        id: 2,
        title: 'Wall Mounts',
        link: 'pages/Wall-Mounts',
      },

      { id: 3, title: 'Wall Plates', link: 'pages/Wall-Plates' },
      {
        id: 4,
        title: 'Wall Decors',
        link: 'pages/Wall-Decors',
      },
      {
        id: 5,
        title: 'Chimes',
        link: 'pages/Chimes',
      },

      { id: 6, title: 'Islamic Wall Art', link: 'pages/Islamic-Wall-Art' },
      {
        id: 7,
        title: 'Wall Clocks',
        link: 'pages/Wall-Clocks',
      },
      {
        id: 8,
        title: 'Copper Collection',
        link: 'pages/Copper-Collection',
      },
    ],
  },
  {
    id: 4,
    title: 'Home Furniture',
    url: '/collections/home-furniture',
    subcategories: [
      {
        id: 0,
        title: 'Sofas',
        link: 'pages/Sofas',
      },
      {
        id: 1,
        title: 'Accent Tables',
        link: 'pages/Accent-Tables',
      },
      {
        id: 2,
        title: ' Accent Chairs',
        link: 'pages/Accent-Chairs',
      },
      {
        id: 3,
        title: 'Benches and stools',
        link: 'pages/Benches-stoolss',
      },
      {
        id: 4,
        title: 'Nesting Tables',
        link: 'pages/Nesting-Tables',
      },
      {
        id: 5,
        title: 'Tea Trolley',
        link: 'pages/Tea-Trolley',
      },
    ],
  },
  {
    id: 5,
    title: 'Lighting',
    url: '/collections/home-furniture',
    subcategories: [
      {
        id: 0,
        title: 'Lamps',
        link: 'pages/Lamps',
      },
    ],
  },

  {
    id: 6,
    title: 'Truck Art',
    link: 'pages/Truck Art',
    subcategories: [],
  },
  {
    id: 7,
    title: 'Rugs',
    link: 'pages/Rugs',
  },

  // Add more categories as needed
];

const NavLinks = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryHover = (categoryId) => {
    setHoveredCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
  };
  return (
    <Stack sx={{ backgroundColor: 'white' }} paddingX={4} direction={'row'} spacing={4}>
      {data.map((category) => (
        <Box
          key={category.id}
          onMouseEnter={() => handleCategoryHover(category.id)}
          onMouseLeave={handleCategoryLeave}
          sx={{
            cursor: 'pointer',
            position: 'relative',
            zIndex: 10,
            '&:hover': {
              color: 'rgb(219, 27, 27)',
            },
          }}
        >
          <Stack paddingY={4} spacing={1} direction={'row'} alignItems={'center'}>
            {category.title === 'All Products' || category.title === 'Truck Art' || category.title === 'Rugs' ? (
              <Link
                style={{
                  color: 'gray',
                }}
                to={category.link}
                variant="subtitle2"
                color="textSecondary"
              >
                {category.title}
              </Link>
            ) : (
              <Typography fontSize={'14px'} fontWeight={400}>
                {category.title}
              </Typography>
            )}

            {category.title === 'All Products' || category.title === 'Truck Art' || category.title === 'Rugs' ? null : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </Stack>
          {hoveredCategory === category.id && (
            <>
              {category.title === 'All Products' ||
              category.title === 'Truck Art' ||
              category.title === 'Rugs' ? null : category.title === 'Home Decor' ? (
                <Grid
                  container
                  spacing={4}
                  sx={{
                    position: 'absolute',
                    top: 95,
                    left: -80,
                    width: 990,
                    backgroundColor: 'white',
                    borderTop: '1px solid #d3d3d3',
                  }}
                >
                  {category.subcategories.map((subcategory) => (
                    <Grid item xs={6} sm={3} key={subcategory.id}>
                      <Link
                        style={{
                          color: 'gray',
                        }}
                        to={subcategory.link}
                        variant="subtitle2"
                        color="textSecondary"
                      >
                        {subcategory.title}
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Stack
                  spacing={3}
                  sx={{
                    position: 'absolute',
                    top: 65,
                    backgroundColor: 'white',
                    padding: 2,
                    width: 250,
                    borderTop: '1px solid #d3d3d3',
                  }}
                >
                  {category?.subcategories?.map((subcategory) => (
                    <Link
                      key={subcategory.id}
                      style={{
                        color: 'gray',
                      }}
                      to={subcategory.link}
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      {subcategory.title}
                    </Link>
                  ))}
                </Stack>
              )}
            </>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default NavLinks;
