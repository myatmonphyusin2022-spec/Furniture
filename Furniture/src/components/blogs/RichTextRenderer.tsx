import React from "react";
import Dompurify from "dompurify";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}
function RichTextRenderer({ content, className }: Props) {
  const santiizedContent = Dompurify.sanitize(content);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: santiizedContent }}
      className={className}
    />
  );
}

export default RichTextRenderer;
