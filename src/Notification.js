import React, {useState} from 'react';
import {Header} from "antd/es/layout/layout";
import {Avatar, Badge} from "antd";
import {
  BellOutlined,
} from '@ant-design/icons';
import NotificationDrawer from "./NotificationDrawer";

const Notification = ({notifications}) => {
  const [open, setOpen] = useState(false);
  let count = localStorage.getItem("unSeen");
  const showDrawer = () => {
    setOpen(true);
    localStorage.setItem("unSeen", 0);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header
        style={{
          backgroundColor: '#cee7f0',
          fontSize: '16px',
          position: 'sticky',
          top: 0,
          zIndex: 9999999,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Badge
          count={count}
          onClick={showDrawer}
        >
  <span className={parseInt(count) === 0 ? "bell2" : "bell"}>
    <BellOutlined/>
  </span>

        </Badge>
      </Header>
      <NotificationDrawer
        count={count}
        open={open}
        onClose={onClose}
        notification={notifications}
      />
    </>
  );
};

export default Notification;
