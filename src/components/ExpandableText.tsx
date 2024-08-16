import { useState } from "react"
import { Button } from "./ui/button";

interface ExpTextProps {
  children: string;
}

const ExpandableText = ({children}: ExpTextProps) => {

  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <p>{children}</p>

  const summary = expanded ? children : children.substring(0, limit) + '...';

  return (
    <p>{summary} <Button onClick={() => setExpanded(!expanded)} size='sm' className="h-7">{expanded ? 'Show Less' : 'Read More'}</Button></p>
  )
}

export default ExpandableText;