import React, { useState } from 'react';
import './TruncateTitle.css'

function TruncateTitle({ title, maxLength = 20 }) {
  const [showFullTitle, setShowFullTitle] = useState(false);

  const handleClick = () => {
    setShowFullTitle(!showFullTitle);
  };

  return (
    <p className="truncatedTitle" onClick={handleClick}>
      {showFullTitle ? title : `${title.substring(0, maxLength)}${title.length > maxLength ? '...' : ''}`}
    </p>
  );
}

export default TruncateTitle;
