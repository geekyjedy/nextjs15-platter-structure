import { createApi } from "@reduxjs/toolkit/query/react";
import { endpoints } from "../apiendpoints";
import baseQueryWithAuth from "../Basequeryauth";

export const crudApiSlice = createApi({
  reducerPath: "crudApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["chat"],
  endpoints: (builder) => ({
    createChat: builder.mutation({
      query: (credentials) => ({
        url: endpoints?.chat?.createChat,
        method: "POST",
        body: credentials,
      }),
    }),
    sendMessage: builder.mutation({
      query: (credentials) => ({
        url: endpoints?.chat?.sendMessage,
        method: "POST",
        body: credentials,
      }),
    }),
    getMessage: builder.query({
      query: ({ id, page, limit }) => ({
        url: endpoints?.chat?.getMessage(id,page,limit),
        method: "GET",
      }),
    }),
    getMessagebyuser: builder.query({
      query: ({ id, artist }) => ({
        url: `find-chat/${id}/${artist}`,
        method: "GET",
      }),
    }),
    chatList: builder.query({
      query: ({ page, limit }) => ({
        url: `user-chats?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateChatMutation,
  useSendMessageMutation,
  useLazyGetMessageQuery,
  useLazyGetMessagebyuserQuery,
  useChatListQuery,
} = crudApiSlice;
