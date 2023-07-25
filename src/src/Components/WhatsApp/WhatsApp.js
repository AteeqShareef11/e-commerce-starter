import React from 'react';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsApp = () => {
  return (
    <div className="shadow-3xl">
      <FloatingWhatsApp phoneNumber="+923024911096" accountName="Ateeq Shareef" avatar="/DA-24.jpg" />
    </div>
  );
};

export default WhatsApp;
