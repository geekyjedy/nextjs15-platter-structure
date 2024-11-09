export const endpoints = {
    auth: {
      login: () => "user/login",
      forgotPassword: () => "user/forgot-password",
      verifyOtp: () => "user/send-otp-email",
      resetPassword: () => "user/reset-password",
      socialLogin: () => "user/social-login",
    },
    register: {
      createUser: () => "user/create",
      registerArtist: () => "artist/register",
      socialMedia: () => "user/social",
    },
    user: {
      details: () => "user/user-details",
    },
    chat: {
      createChat: () => "create-chat",
      sendMessage: () => "message",
      getMessage: (id, page, limit) => `message/${id}?page=${page}&limit=${limit}`,
      getMessageByUser: (id, artist) => `find-chat/${id}/${artist}`,
      chatList: (page, limit) => `user-chats?page=${page}&limit=${limit}`,
    },
  };