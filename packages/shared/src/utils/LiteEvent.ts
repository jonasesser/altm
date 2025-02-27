export interface ILiteEvent {
  on(event: string, handler: (...args: string[]) => void): void;
  off(event: string, handler: (...args: string[]) => void): void;
  emit(event: string, ...args: string[]): void;
}

export class LiteEvent implements ILiteEvent {
  private eventHandlers: Map<string, Set<(...args: string[]) => void>> = new Map();

  /**
   * Registers a new event handler for a specific event.
   * @param event The name of the event.
   * @param handler The function to be called when the event is emitted.
   */
  public on(event: string, handler: (...args: string[]) => void): void {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, new Set());
    }
    this.eventHandlers.get(event)!.add(handler);
  }

  /**
   * Unregisters an existing event handler for a specific event.
   * @param event The name of the event.
   * @param handler The function to be removed from the event handlers.
   */
  public off(event: string, handler: (...args: string[]) => void): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.delete(handler);
      if (handlers.size === 0) {
        this.eventHandlers.delete(event); // Clean up if no handlers are left
      }
    }
  }

  /**
   * Emits the event, calling all registered handlers with the provided arguments.
   * @param event The name of the event.
   * @param args The arguments to pass to the event handlers.
   */
  public emit(event: string, ...args: string[]): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.forEach(handler => {
        handler(...args);
      });
    }
  }

  /**
   * Exposes the current instance of LiteEvent.
   * @returns The current instance of LiteEvent.
   */
  public expose(): ILiteEvent {
    return this;
  }
}
