import { useCallback, useMemo, useState } from 'react';

interface UseHoverProps {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverProps];

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return useMemo<UseHoverResult>(
    () => [isHovered, { isHovered, onMouseEnter, onMouseLeave }],
    [isHovered, onMouseEnter, onMouseLeave]
  );
};
