export namespace Overlay {
  export interface IOptions {
    hostElement: Element;
    config: {
      position: string;
      top: string;
      left: string;
      width: string;
      height: string;
      borderRadius: string;
      'z-index': string;
      'text-align': string;
      color: string;
      innerHTML?: string;
      background: string;
      visibility: string;
    };
  }

  export function createOverlay(options: IOptions): void {
    const { hostElement, config } = options;

    // Create the overlay element
    const overlayElement = document.createElement('div');
    overlayElement.setAttribute('class', 'overlay');

    // Apply styles from config
    for (const [key, value] of Object.entries(config)) {
      overlayElement.style.setProperty(key, value);
    }

    // Append the overlay element to the host element
    hostElement.appendChild(overlayElement);
  }
}
