import React from 'react';
import { Input, QRCode, Space } from 'antd';
const QR = () => {
  const [text, setText] = React.useState('https://youtu.be/hHRz5USvrXY');
  return (
    <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />
      
    </Space>
  );
};
export default QR;