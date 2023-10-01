import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PostDTO} from "@models/post/Post";

export const jsonPlaceholderApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["jsonPlaceholder"],
	reducerPath: 'jsonPlaceholderApi',
	endpoints: (builder) => ({
		getPosts: builder.query<PostDTO[], null>({
			query: () => ({
				url: `/posts`,
			}),
		}),
	}),
})

export const {useGetPostsQuery} = jsonPlaceholderApi
