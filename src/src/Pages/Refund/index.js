import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const Refund = () => {
  return (
    <Box py={4}>
      <Container maxWidth="sm">
        <Typography textAlign={'center'} fontSize={'40px'} fontWeight={700}>
          Refund policy{' '}
        </Typography>
        <Stack mt={3} spacing={2}>
          <Typography fontSize={'12px'} fontWeight={400}>
            We have a 7-day return policy, which means you have 7 days after receiving your item to request a return.
          </Typography>
          <Typography fontSize={'12px'} fontWeight={400}>
            To be eligible for a return, your item must be in the same condition that you received it, unworn or unused,
            with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
          </Typography>
          <Typography fontSize={'12px'} fontWeight={400}>
            To start a return, you can contact us at hometrendspakistan@gmail.com. If your return is accepted, we’ll
            send you a return shipping label, as well as for instructions on how and where to send your package. Items
            sent back to us without first requesting a return will not be accepted.
          </Typography>
          <Typography fontSize={'12px'} fontWeight={400}>
            You can always contact us for any return questions at hometrendspakistan@gmail.com.
          </Typography>
        </Stack>
        <Stack mt={3} spacing={1}>
          <Typography fontSize={'12px'} fontWeight={700}>
            Damages and issues
          </Typography>
          <Stack mt={3} spacing={2}>
            <Typography fontSize={'12px'} fontWeight={400}>
              Please inspect your order upon reception and contact us immediately if the item is defective, damaged or
              if you receive the wrong item so that we can evaluate the issue and make it right.
            </Typography>
          </Stack>
        </Stack>
        <Stack mt={3} spacing={1}>
          <Typography fontSize={'12px'} fontWeight={700}>
            Exceptions / non-returnable items
          </Typography>
          <Stack fontSize={'12px'} fontWeight={400} spacing={2}>
            <Typography fontSize={'12px'} fontWeight={400}>
              Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants),
              custom products (such as special orders or personalized items), and personal care goods (such as beauty
              products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get
              in touch if you have questions or concerns about your specific item.
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400}>
              Unfortunately, we cannot accept returns on sale items or gift cards.
            </Typography>
          </Stack>
        </Stack>

        <Stack mt={3} spacing={1}>
          <Typography fontSize={'12px'} fontWeight={700}>
            Exchanges{' '}
          </Typography>
          <Stack fontSize={'12px'} fontWeight={400} spacing={2}>
            <Typography fontSize={'12px'} fontWeight={400}>
              The fastest way to ensure you get what you want is to return the item you have, and once the return is
              accepted, make a separate purchase for the new item.
            </Typography>
          </Stack>
        </Stack>

        <Stack mt={3} spacing={1}>
          <Typography fontSize={'12px'} fontWeight={700}>
            Refunds{' '}
          </Typography>
          <Stack fontSize={'12px'} fontWeight={400} spacing={2}>
            <Typography fontSize={'12px'} fontWeight={400}>
              We will notify you once we’ve received and inspected your return, and let you know if the refund was
              approved or not. If approved, you’ll be automatically refunded on your original payment method. Please
              remember it can take some time for your bank or credit card company to process and post the refund too.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Refund;
