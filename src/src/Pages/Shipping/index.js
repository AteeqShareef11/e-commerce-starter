import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const Shipping = () => {
  return (
    <Box py={5}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography fontSize={'20px'} fontWeight={700}>
            SHIPPING POLICY
          </Typography>
          <Stack spacing={2}>
            <Typography fontSize={'12px'} fontWeight={700}>
              WHEN WILL MY ORDER BE DELIVERED?
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400}>
              It takes us 4-5 business days to deliver your order to your doorsteps. Orders placed on Saturdays and
              Sundays, as well as any gazetted holidays, will be processed the next business day. Orders may be delayed
              temporarily during peak hours or due to delays in information verification. Orders placed through our
              online payment system are subject to a fraud check, and will be processed further once our payment
              processor has cleared them. For all cash on delivery methods, payments will be collected from the shipping
              address. You will receive an email with tracking information once your product has been sent; please check
              your junk/spam folders as well.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography fontSize={'12px'} fontWeight={700}>
              WHAT DOES SHIPPING COST?
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400}>
              We offer free shipping throughout Pakistan.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography fontSize={'12px'} fontWeight={700}>
              WHICH COURIER SERVICE DO YOU USE FOR DELIVERIES?
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400}>
              It is dependent on the delivery area and the package type. We will send you an e-mail with the courier
              information and tracking details once the shipment has left our warehouse.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography fontSize={'12px'} fontWeight={700}>
              WHAT IF I AM NOT IN THE HOUSE WHEN THE ORDER IS DELIVERED?
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400}>
              The courier will send you an SMS with the total payment due. When it comes to self-collection, make sure
              you are there at home. In the event of your absence, the parcel might be delivered to any designated
              person/family member.
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Typography fontSize={'12px'} fontWeight={700}>
              ORDER CANCELLATION
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400}>
              For cash on delivery orders, we verify orders with a maximum of two confirmation calls. If your order is
              left unattended, it will be cancelled. Orders can be cancelled at any time before they are completed at
              the request of the customer. Hometrends reserves the right to cancel orders for any reason, including out
              of stock items, wrong mobile numbers, or technical faults.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Shipping;
