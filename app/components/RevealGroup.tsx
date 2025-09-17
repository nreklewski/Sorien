"use client";

import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ComponentProps,
} from "react";
import Reveal from "./Reveal";

type RevealGroupProps = {
  children: React.ReactNode;
  /** base delay in ms for the first child */
  delayMs?: number;
  /** additional delay per item in ms */
  intervalMs?: number;
  /** whether children should animate once */
  once?: boolean;
  /** threshold and rootMargin pass-through */
  threshold?: number;
  rootMargin?: string;
};

export default function RevealGroup({
  children,
  delayMs = 0,
  intervalMs = 100,
  once = true,
  threshold,
  rootMargin,
}: RevealGroupProps) {
  const items = Children.toArray(children);
  type RevealPropsFromComponent = ComponentProps<typeof Reveal>;

  function isRevealElement(
    node: unknown
  ): node is ReactElement<RevealPropsFromComponent> {
    return isValidElement(node) && (node as ReactElement).type === Reveal;
  }

  return (
    <>
      {items.map((child, index) => {
        const itemDelay = delayMs + index * intervalMs;
        // If child is already a Reveal, just add CSS var delay if not set
        if (isRevealElement(child)) {
          const revealChild = child;
          const newProps: Partial<RevealPropsFromComponent> = {
            delayMs: revealChild.props.delayMs ?? itemDelay,
          };
          return (
            <React.Fragment key={index}>
              {cloneElement(revealChild, newProps)}
            </React.Fragment>
          );
        }
        // Wrap non-Reveal nodes in Reveal
        return (
          <Reveal
            key={index}
            delayMs={itemDelay}
            once={once}
            threshold={threshold}
            rootMargin={rootMargin}
          >
            {child}
          </Reveal>
        );
      })}
    </>
  );
}


