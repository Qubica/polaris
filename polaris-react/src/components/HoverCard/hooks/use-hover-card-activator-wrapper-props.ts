import {useRef, useEffect, useState, useCallback} from 'react';

import {useEphemeralPresenceManager} from '../../../utilities/ephemeral-presence-manager';
import {useBreakpoints} from '../../../utilities/breakpoints';
import {classNames} from '../../../utilities/css';
import styles from '../HoverCard.scss';

const HOVER_OUT_TIMEOUT = 150;

export function useHoverCardActivatorWrapperProps({
  hoverDelay,
  snapToParent,
  ref: providedRef,
  toggleActive,
}: {
  hoverDelay?: number;
  snapToParent?: boolean;
  ref?: React.RefObject<HTMLElement | null>;
  toggleActive?(active: boolean): void;
}) {
  const hoverDelayTimeout = useRef<NodeJS.Timeout | null>(null);
  const hoverOutTimeout = useRef<NodeJS.Timeout | null>(null);
  const mouseEntered = useRef(false);
  const dynamicRef = useRef<HTMLElement | null>(null);

  const {mdUp} = useBreakpoints();

  const {presenceList, addPresence, removePresence} =
    useEphemeralPresenceManager();

  const [activatorNode, setActivatorNode] = useState<HTMLElement | null>(null);
  const [freezeActive, setFreezeActive] = useState(false);

  useEffect(() => {
    if (!activatorNode && providedRef && providedRef.current) {
      setActivatorNode(providedRef.current);
    }
  }, [providedRef, activatorNode]);

  useEffect(() => {
    const currentHoverDelayTimeout = hoverDelayTimeout?.current;
    const currentHoverOutTimeout = hoverOutTimeout?.current;

    return () => {
      if (currentHoverDelayTimeout) {
        clearTimeout(currentHoverDelayTimeout);
      }
      if (currentHoverOutTimeout) {
        clearTimeout(currentHoverOutTimeout);
      }
    };
  }, []);

  const handleOpen = useCallback(() => {
    toggleActive?.(true);
    addPresence('hovercard');
  }, [toggleActive, addPresence]);

  const handleClose = useCallback(() => {
    hoverOutTimeout.current = setTimeout(() => {
      removePresence('hovercard');
    }, HOVER_OUT_TIMEOUT);

    toggleActive?.(false);
  }, [toggleActive, removePresence]);

  const handleMouseLeaveActivator = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (freezeActive) {
        dynamicRef.current = event.currentTarget;
        return;
      }
      if (hoverDelayTimeout.current) {
        clearTimeout(hoverDelayTimeout.current);
        hoverDelayTimeout.current = null;
      }

      dynamicRef.current = null;
      mouseEntered.current = false;
      handleClose();
    },
    [freezeActive, handleClose, hoverDelayTimeout, mouseEntered],
  );

  const handleMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!mdUp) return;

      dynamicRef.current = event.currentTarget;
      mouseEntered.current = true;

      if (hoverDelay && !presenceList.hovercard) {
        hoverDelayTimeout.current = setTimeout(() => {
          handleOpen();
        }, hoverDelay);
      } else {
        handleOpen();
      }
    },
    [handleOpen, hoverDelay, hoverDelayTimeout, presenceList, mdUp],
  );

  // https://github.com/facebook/react/issues/10109
  // Mouseenter event not triggered when cursor moves from disabled button
  const handleMouseEnterFix = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!mouseEntered.current) {
        handleMouseEnter(event);
      }
    },
    [handleMouseEnter],
  );

  const handleMouseEnterOverlay = () => {
    setFreezeActive(true);
  };

  const handleMouseLeaveOverlay = () => {
    setFreezeActive(false);
  };

  const className = classNames(
    styles.ActivatorWrapper,
    snapToParent && styles.snapToParent,
  );

  return {
    className,
    freezeActive,
    isDesktop: mdUp,
    present: presenceList.hovercard,
    activatorElement: dynamicRef?.current ?? activatorNode,
    setActivatorNode,
    handleMouseLeaveActivator,
    handleMouseEnterActivator: handleMouseEnterFix,
    handleMouseEnterOverlay,
    handleMouseLeaveOverlay,
  };
}
