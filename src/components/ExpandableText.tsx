import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const textLimit = 300;

  if (!children) {
    return null;
  }

  if (children.length < textLimit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded
    ? children
    : children.substring(0, textLimit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        colorScheme="yellow"
        marginLeft={2}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show more" : "Show less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
