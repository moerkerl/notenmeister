/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag: {
      (command: 'config', targetId: string, config?: { [key: string]: any }): void;
      (command: 'event', eventName: string, config?: { [key: string]: any }): void;
      (command: 'js', date: Date): void;
      (command: 'consent', action: string, config?: { [key: string]: any }): void;
      (command: 'set', config: { [key: string]: any }): void;
      (command: 'set', targetProperty: string, config: { [key: string]: any }): void;
    };
  }
}

export {};