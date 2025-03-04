import { useEffect } from "react";
import useEvent from "./useEvent";

type DocumentEvent<Type extends keyof DocumentEventMap> =
  DocumentEventMap[Type];

interface ListenerOptions extends AddEventListenerOptions {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
  signal?: AbortSignal;
}

/**
 * Hook for adding an event listener to document with type-safe handling.
 * @template Type - Event type (e.g. 'click', 'keydown')
 * @param type - Event name
 * @param callback - Event handler function
 * @param options - (capture, passive, once, signal)
 * @example
 * useDocumentEvent('click', (e) => console.log(e.clientX), { passive: true });
 */

function useDocumentEvent<Type extends keyof DocumentEventMap>(
  type: Type,
  callback: (event: DocumentEvent<Type>) => void,
  options: ListenerOptions = { capture: true },
): void {
  const eventCallback = useEvent(callback);

  useEffect(() => {
    document.addEventListener(type, eventCallback, options);

    return () => {
      document.removeEventListener(type, eventCallback, options);
    };
  }, [type, eventCallback, options]);
}

export default useDocumentEvent;
