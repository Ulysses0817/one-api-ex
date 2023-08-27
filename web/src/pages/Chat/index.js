import React from 'react';

const Chat = () => {
  // 从localStorage中获取存储的用户信息
  const userString = localStorage.getItem('user');
  // 将存储的用户信息解析为JavaScript对象
  const user = userString ? JSON.parse(userString) : null;
  // 从用户对象中获取username
  const username = user ? user.username : null;
  console.log("[localStorage uaername]:", username);
  const chatLink = localStorage.getItem('chat_link') + `/#/?code=${username}`;

  return (
    <iframe
      src={chatLink}
      style={{ width: '100%', height: '85vh', border: 'none' }}
    />
  );
};


export default Chat;
