import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import RichTextEditor from '../RichTextEditor';

const categories = [
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

const initialValues = {
  title: '',
  rating: '',
  oldPrice: '',
  newPrice: '',
  categorey: '',
  description: '',
  subcategorey: '',
  coverimage: '',
};

const EditProduct = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [categorey, setCatgorey] = useState();
  const [imageCover, setImageCover] = useState();
  const subcategories = categories?.filter((item) => item.title === values.categorey);
  const [images, setImages] = useState([]);
  const [body, setBody] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCoverImage = (e) => {
    const file = e.target.files[0];
    // setImageCover(file);
    TransformFile(file);
  };
  //   const handleinputimage = (e) => {
  //     const file = e.target.files[0];
  //     setImg(file);
  //     TransformFile(file);
  //   };

  const handleMoreImages = (e) => {
    const imagefile = e.target.files[0];
    setImages([...images, imagefile]);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageCover(reader.result);
      };
    } else {
      setImageCover('');
    }
  };
  const handleDeletImg = (index) => {
    const res = images.filter((item, ind) => ind !== index);
    setImages(res);
  };
  return (
    <Stack gap={2}>
      <Typography>Edit Product</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.title}
                name="title"
                value={values.title}
                onChange={handleChange}
                error={errors.title}
                fullWidth
                label="Product Title"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.rating}
                name="rating"
                value={values.rating}
                onChange={handleChange}
                error={errors.rating}
                fullWidth
                label="Rating"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.oldPrice}
                name="oldPrice"
                value={values.oldPrice}
                onChange={handleChange}
                error={errors.oldPrice}
                fullWidth
                label="Old Price"
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.newPrice}
                name="newPrice"
                value={values.newPrice}
                onChange={handleChange}
                error={errors.newPrice}
                type="number"
                fullWidth
                label="New Price"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                helperText={errors.description}
                name="description"
                value={values.description}
                onChange={handleChange}
                error={errors.description}
                multiline
                rows={4}
                fullWidth
                label="Product Description"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-standard-label">Categorey</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  name="categorey"
                  value={values.categorey}
                  onChange={handleChange}
                  error={errors.categorey}
                  label="Categorey"
                >
                  {categories &&
                    categories?.map((item) => (
                      <MenuItem value={item.title} key={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                </Select>
                {errors.categorey && (
                  <p style={{ color: 'red', fontSize: '12px', paddingLeft: '5%' }}>{errors.categorey}</p>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-standard-label">Sub Categorey</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  name="subcategorey"
                  value={values.subcategorey}
                  onChange={handleChange}
                  error={errors.subcategorey}
                  label="Sub Categorey"
                >
                  {subcategories[0]?.subcategories &&
                    subcategories[0]?.subcategories?.map((item) => (
                      <MenuItem value={item.title} key={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                </Select>
                {errors.subcategorey && (
                  <p style={{ color: 'red', fontSize: '12px', paddingLeft: '5%' }}>{errors.subcategorey}</p>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <RichTextEditor body={body} setBody={setBody} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Typography>Select Cover Image For Product</Typography>

            {imageCover && (
              <Box display={'flex'} justifyContent={'center'}>
                <img width={'50%'} src={imageCover} alt="" />
              </Box>
            )}
            <Box display={'flex'} justifyContent={'center'}>
              <input name="cover" type="file" onChange={handleCoverImage} />
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Typography>Add More Images</Typography>
            <Box display={'flex'} width={'80%'} flexWrap={'wrap'} justifyContent={'space-between'} gap={4}>
              {images.map((item, index) => (
                <Box display={'flex'} position={'relative'} key={index}>
                  <img
                    style={{ width: '128px', height: '128px', borderRadius: '10px' }}
                    src={URL.createObjectURL(item)}
                    alt=""
                  />
                  <Box
                    style={{
                      position: 'absolute',
                      top: 2,
                      right: 2,
                      cursor: 'pointer',
                      borderRadius: '50px',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'red',
                    }}
                    onClick={() => handleDeletImg(index)}
                  >
                    x
                  </Box>
                </Box>
              ))}
            </Box>

            <Box display={'flex'} justifyContent={'center'}>
              <input name="more" type="file" onChange={handleMoreImages} />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default EditProduct;
