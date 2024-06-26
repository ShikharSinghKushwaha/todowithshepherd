type Bindings = {
    [key: string]: Array<{
        handler: () => void;
        ctx?: unknown;
        once?: boolean;
    }>;
};
type AnyHandler = (...args: any[]) => void;
export declare class Evented {
    bindings: Bindings;
    /**
     * Adds an event listener for the given event string.
     *
     * @param {string} event
     * @param {Function} handler
     * @param ctx
     * @param {boolean} once
     * @returns
     */
    on(event: string, handler: AnyHandler, ctx?: unknown, once?: boolean): this;
    /**
     * Adds an event listener that only fires once for the given event string.
     *
     * @param {string} event
     * @param {Function} handler
     * @param ctx
     * @returns
     */
    once(event: string, handler: AnyHandler, ctx?: unknown): this;
    /**
     * Removes an event listener for the given event string.
     *
     * @param {string} event
     * @param {Function} handler
     * @returns
     */
    off(event: string, handler: AnyHandler): this;
    /**
     * Triggers an event listener for the given event string.
     *
     * @param {string} event
     * @returns
     */
    trigger(event: string, ...args: any[]): this;
}
export {};
//# sourceMappingURL=evented.d.ts.map