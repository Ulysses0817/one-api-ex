import React from 'react';

const Chat = () => {
  // 从localStorage中获取存储的用户信息
  const userString = localStorage.getItem('user');
  // 将存储的用户信息解析为JavaScript对象
  const user = userString ? JSON.parse(userString) : null;
  // 从用户对象中获取username
  const username = user ? user.username : null;
  console.log("[localStorage uaername]:", username);

  const key = localStorage.getItem('skey');
  console.log("[localStorage key]:", key);

  let defaultUrl;

  if (key) {
    let serverAddress = "http://localhost:23000"
    defaultUrl = localStorage.getItem('chat_link') + `/#/?settings={"key":"sk-${key}","url":"${serverAddress}"}&tight=true`;
  } else {
    defaultUrl = localStorage.getItem('chat_link') + `/#/?code=${username}&tight=true`;
  }
  console.log("[defaultUrl]:", defaultUrl);

  return (
    <iframe
      src={defaultUrl}
      style={{ width: '100%', height: '85vh', border: 'none' }}
    />
  );
};


export default Chat;
