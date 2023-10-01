import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import {memo} from "react";
import {trimBody, trimTitle} from "@utils/string";

interface Props {
  id: number,
  title: string,
  body: string
}

export const PostItem = memo(({id, title, body}: Props) => {
  return (
    <ListItem key={id} sx={{width: "350px"}}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon data-testid={`ImageIcon-${id}`}/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={trimTitle(title)}
        secondary={trimBody(body)}
        data-testid={`ListItemText-${id}`}
      />
    </ListItem>
  )
})

PostItem.displayName = "PostItem"

