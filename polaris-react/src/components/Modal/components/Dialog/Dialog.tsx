import React, {useRef} from 'react';
import type {SetStateAction, Dispatch} from 'react';
import {Transition, CSSTransition} from 'react-transition-group';
import {motion} from '@shopify/polaris-tokens';

import {classNames} from '../../../../utilities/css';

import styles from './Dialog.scss';

type CSSTransitionProps = React.ComponentProps<typeof CSSTransition>;

export interface DialogProps {
  labelledBy?: string;
  instant?: boolean;
  children?: React.ReactNode;
  limitHeight?: boolean;
  large?: boolean;
  small?: boolean;
  onClose(): void;
  onEntered?(): void;
  onExited?(): void;
  in?: boolean;
  fullScreen?: boolean;
  setClosing?: Dispatch<SetStateAction<boolean>>;
}

export function Dialog({
  instant,
  labelledBy,
  children,
  onClose,
  onExited,
  onEntered,
  large,
  small,
  limitHeight,
  fullScreen,
  setClosing,
  ...props
}: DialogProps) {
  const dialogNode = useRef<HTMLDialogElement>(null);
  const classes = classNames(
    styles.Modal,
    small && styles.sizeSmall,
    large && styles.sizeLarge,
    limitHeight && styles.limitHeight,
    fullScreen && styles.fullScreen,
  );
  const TransitionChild = instant ? Transition : FadeUp;

  return (
    <TransitionChild
      {...props}
      nodeRef={dialogNode}
      mountOnEnter
      unmountOnExit
      timeout={parseInt(motion['duration-200'], 10)}
      onEntered={onEntered}
      onExited={onExited}
    >
      <dialog
        className={classes}
        data-polaris-layer
        data-polaris-overlay
        ref={dialogNode}
        aria-label={labelledBy}
        aria-labelledby={labelledBy}
      >
        {children}
      </dialog>
    </TransitionChild>
  );
}

const fadeUpClasses = {
  appear: classNames(styles.animateFadeUp, styles.entering),
  appearActive: classNames(styles.animateFadeUp, styles.entered),
  enter: classNames(styles.animateFadeUp, styles.entering),
  enterActive: classNames(styles.animateFadeUp, styles.entered),
  exit: classNames(styles.animateFadeUp, styles.exiting),
  exitActive: classNames(styles.animateFadeUp, styles.exited),
};

function FadeUp({children, ...props}: CSSTransitionProps) {
  return (
    <CSSTransition {...props} classNames={fadeUpClasses}>
      {children}
    </CSSTransition>
  );
}
