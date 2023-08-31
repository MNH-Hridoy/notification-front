import {Alert, Drawer, Empty} from "antd";

export default function NotificationDrawer({count, open, onClose, notification}) {
  const renderItems = () => {
    return notification.map((data, index) => (
      <Alert
        key={index}
        message={data}
        type="success"
        showIcon
        closable
        style={{
          marginBottom: '15px',
          borderRadius: '15px',
          boxShadow:
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        }}
      />

    ));
  };

  return (
    <Drawer
      title="Notifications"
      placement="left"
      onClose={onClose}
      open={open}
    >
      {count !== 0 ? (
        renderItems()
      ) : (
        <Empty
          style={{
            marginTop: '250px',
          }}
          description="No Notifications"
        />
      )}
    </Drawer>
  );
}