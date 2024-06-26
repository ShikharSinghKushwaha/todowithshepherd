import { Evented } from './evented.ts';
import { Step, type StepOptions } from './step.ts';
import DataRequest from './utils/datarequest.ts';
type TourConfirmCancel = boolean | (() => boolean) | Promise<boolean> | (() => Promise<boolean>);
/**
 * The options for the tour
 */
export interface TourOptions {
    /**
     * If true, will issue a `window.confirm` before cancelling.
     * If it is a function(support Async Function), it will be called and wait for the return value,
     * and will only be cancelled if the value returned is true.
     */
    confirmCancel?: TourConfirmCancel;
    /**
     * The message to display in the `window.confirm` dialog.
     */
    confirmCancelMessage?: string;
    /**
     * The prefix to add to the `shepherd-enabled` and `shepherd-target` class names as well as the `data-shepherd-step-id`.
     */
    classPrefix?: string;
    /**
     * Default options for Steps ({@link Step#constructor}), created through `addStep`.
     */
    defaultStepOptions?: StepOptions;
    /**
     * Exiting the tour with the escape key will be enabled unless this is explicitly
     * set to false.
     */
    exitOnEsc?: boolean;
    /**
     * Explicitly set the id for the tour. If not set, the id will be a generated uuid.
     */
    id?: string;
    /**
     * Navigating the tour via left and right arrow keys will be enabled
     * unless this is explicitly set to false.
     */
    keyboardNavigation?: boolean;
    /**
     * An optional container element for the modal.
     * If not set, the modal will be appended to `document.body`.
     */
    modalContainer?: HTMLElement;
    /**
     * An optional container element for the steps.
     * If not set, the steps will be appended to `document.body`.
     */
    stepsContainer?: HTMLElement;
    /**
     * An array of step options objects or Step instances to initialize the tour with.
     */
    steps?: Array<StepOptions> | Array<Step>;
    /**
     * An optional "name" for the tour. This will be appended to the the tour's
     * dynamically generated `id` property.
     */
    tourName?: string;
    /**
     * Whether or not steps should be placed above a darkened
     * modal overlay. If true, the overlay will create an opening around the target element so that it
     * can remain interactive
     */
    useModalOverlay?: boolean;
}
export declare class ShepherdPro extends Evented {
    apiKey?: string;
    apiPath?: string;
    dataRequester?: DataRequest;
    isProEnabled: boolean;
    /**
     * Extra properties to pass to Shepherd Pro
     */
    properties?: {
        [key: string]: unknown;
    };
    activeTour?: Tour | null;
    Step: typeof Step;
    Tour: typeof Tour;
    /**
     * Call init to take full advantage of ShepherdPro functionality
     * @param {string} apiKey The API key for your ShepherdPro account
     * @param {string} apiPath
     * @param {object} properties Extra properties to be passed to Shepherd Pro
     */
    init(apiKey?: string, apiPath?: string, properties?: {
        [key: string]: unknown;
    }): Promise<void>;
    createNewActor(): Promise<void>;
    /**
     * Checks if a given tour's id is enabled
     * @param tourId A string denoting the id of the tour
     */
    isTourEnabled(tourId: string): Promise<boolean | undefined>;
}
/**
 * Class representing the site tour
 * @extends {Evented}
 */
export declare class Tour extends Evented {
    trackedEvents: string[];
    classPrefix: string;
    currentStep?: Step | null;
    focusedElBeforeOpen?: HTMLElement | null;
    id?: string;
    modal?: Record<string, unknown> | null;
    options: TourOptions;
    steps: Array<Step>;
    constructor(options?: TourOptions);
    /**
     * Adds a new step to the tour
     * @param {StepOptions} options - An object containing step options or a Step instance
     * @param {number | undefined} index - The optional index to insert the step at. If undefined, the step
     * is added to the end of the array.
     * @return The newly added step
     */
    addStep(options: StepOptions | Step, index?: number): Step | StepOptions;
    /**
     * Add multiple steps to the tour
     * @param {Array<StepOptions> | Array<Step> | undefined} steps - The steps to add to the tour
     */
    addSteps(steps?: Array<StepOptions> | Array<Step>): this;
    /**
     * Go to the previous step in the tour
     */
    back(): void;
    /**
     * Calls _done() triggering the 'cancel' event
     * If `confirmCancel` is true, will show a window.confirm before cancelling
     * If `confirmCancel` is a function, will call it and wait for the return value,
     * and only cancel when the value returned is true
     */
    cancel(): Promise<void>;
    /**
     * Calls _done() triggering the `complete` event
     */
    complete(): void;
    /**
     * Gets the step from a given id
     * @param {number | string} id - The id of the step to retrieve
     * @return The step corresponding to the `id`
     */
    getById(id: number | string): Step | undefined;
    /**
     * Gets the current step
     */
    getCurrentStep(): Step | null | undefined;
    /**
     * Hide the current step
     */
    hide(): void;
    /**
     * Check if the tour is active
     */
    isActive(): boolean;
    /**
     * Go to the next step in the tour
     * If we are at the end, call `complete`
     */
    next(): void;
    /**
     * Removes the step from the tour
     * @param {string} name - The id for the step to remove
     */
    removeStep(name: string): void;
    /**
     * Show a specific step in the tour
     * @param {number | string} key - The key to look up the step by
     * @param {boolean} forward - True if we are going forward, false if backward
     */
    show(key?: number | string, forward?: boolean): void;
    /**
     * Start the tour
     */
    start(): Promise<void>;
    /**
     * Called whenever the tour is cancelled or completed, basically anytime we exit the tour
     * @param {string} event - The event name to trigger
     * @private
     */
    _done(event: string): void;
    /**
     * Make this tour "active"
     */
    _setupActiveTour(): void;
    /**
     * setupModal create the modal container and instance
     */
    setupModal(): void;
    /**
     * Called when `showOn` evaluates to false, to skip the step or complete the tour if it's the last step
     * @param {Step} step - The step to skip
     * @param {boolean} forward - True if we are going forward, false if backward
     * @private
     */
    _skipStep(step: Step, forward: boolean): void;
    /**
     * Before showing, hide the current step and if the tour is not
     * already active, call `this._setupActiveTour`.
     * @private
     */
    _updateStateBeforeShow(): void;
    /**
     * Sets this.id to a provided tourName and id or `${tourName}--${uuid}`
     * @param {string} optionsId - True if we are going forward, false if backward
     * @private
     */
    _setTourID(optionsId: string | undefined): void;
}
declare const Shepherd: ShepherdPro;
export { Shepherd };
//# sourceMappingURL=tour.d.ts.map