import React, { useState } from 'react';

export default function TextEl({ el }: { el: string }) {
  const [shows, setShows] = useState<boolean>(true);

  const handleBoxToggle = (): void => setShows((cur: any) => !cur);
  return (
    <li onMouseEnter={handleBoxToggle} className={shows ? '' : 'hide'}>
      {el}
    </li>
  );
}
