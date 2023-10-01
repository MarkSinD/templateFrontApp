import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import {memo} from "react";
import {Skeleton} from "@mui/material";

export const PostItemSkeleton = memo(() => {
  return (
    <ListItem sx={{width: "350px"}}>
      <ListItemAvatar>
        <Skeleton animation="wave" variant="circular" width={40} height={40}/>
      </ListItemAvatar>
      <ListItemText
        primary={<Skeleton variant="rectangular" animation="wave" height={24} sx={{marginBottom: 1}}/>}
        secondary={<Skeleton variant="rectangular" animation="wave" height={40}/>}
      />
    </ListItem>
  )
})

PostItemSkeleton.displayName = "PostItem"

