import {PostItem} from "@pages/post/PostItem";
import {PostItemSkeleton} from "@pages/post/PostItemSkeleton";
import {memo} from "react";
import {useGetPostsQuery} from "@api/posts/jsonPlaceholderApi";

export const PostList = memo(() => {
  const {data: components = []} = useGetPostsQuery(null)
  console.log('data components: ', components)

  if (components.length === 0) {
    return (
      <>
        {Array.from(Array(4).keys()).map((_, index) => (
          <PostItemSkeleton key={index}/>
        ))
        }
      </>
    )
  } else {
    return (
      <>
        {
          components.map(({id, body, title}) => (
            <PostItem
              key={id}
              id={id}
              body={body}
              title={title}
            />
          ))
        }
      </>
    )
  }
})

PostList.displayName = "PostList"