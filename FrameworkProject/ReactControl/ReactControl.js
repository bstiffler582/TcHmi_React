// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.133/runtimes/native1.12-tchmi/TcHmi.d.ts" />

/*
 * Generated 5/22/2025 9:12:26 AM
 * Copyright (C) 2025
 */
var TcHmi;
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    let Controls;
    (function (/** @type {globalThis.TcHmi.Controls} */ Controls) {
        let FrameworkProject;
        (function (FrameworkProject) {
            class ReactControl extends TcHmi.Controls.System.TcHmiControl {

                /*
                 Attribute philosophy
                 --------------------
                 - Local variables are not set in the class definition, so they have the value 'undefined'.
                 - During compilation, the Framework sets the value that is specified in the HTML or in the theme (possibly 'null') via normal setters.
                 - Because of the "changed detection" in the setter, the value is only processed once during compilation.
                 - Attention: If we have a Server Binding on an Attribute, the setter will be called once with null to initialize and later with the correct value.
                 */

                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);

                    // react component state
                    this.__componentState = {
                        title: "Title",
                        running: false,
                        startBtn: this.__startBtnClicked.bind(this),
                        stopBtn: this.__stopBtnClicked.bind(this),
                        speed: 0,
                        speedSp: 0,
                        key: 0,
                        setSpeedBtn: this.__setSpeedBtnClicked.bind(this)
                    };

                    this.__reactRoot;
                    this.__startCmd = null;
                    this.__stopCmd = null;
                }
                /**
                 * Raised after the control was added to the control cache and the constructors of all base classes were called.
                 * This function is only to be used by the System. Other function calls are not intended.
                 */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_FrameworkProject_ReactControl-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }

                    // create ReactDOM root
                    this.__reactRoot = ReactDOM.createRoot(this.__elementTemplateRoot.get(0));

                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialization after the attribute setters have been called. 
                 * This function is only to be used by the System. Other function calls are not intended.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                 * Is called by the system after the control instance is inserted into the active DOM.
                 * This function is only to be used by the System. Other function calls are not intended.
                 */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                    this.__onSetpointChanged = TcHmi.EventProvider.register(this.getId() + '.onSetpointChanged',
                        function (evnt, data) { });

                    // initial render
                    this.__renderComponent();
                }
                /**
                 * Is called by the system when the control instance is no longer part of the active DOM.
                 * This function is only to be used by the System. Other function calls are not intended.
                 */
                __detach() {
                    super.__detach();

                    /**
                     * Disable everything that is not needed while the control is not part of the active DOM.
                     * For example, there is usually no need to listen for events!
                     */
                    this.__onSetpointChanged();
                }
                /**
                 * Destroy the current control instance.
                 * Will be called automatically if the framework destroys the control instance!
                 */
                destroy() {
                    /**
                     * Ignore while __keepAlive is set to true.
                     */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                     * Free resources like child controls etc.
                     */
                }

                __renderComponent() {
                    // render / re-render component
                    // cd to 'reac-app' dir
                    // 'npm run bundle' to create bundled component js
                    // '../../react-app/bundled/Faceplate.js' referenced in 'Description.json'
                    const element = React.createElement(window.Component.default, this.__componentState);
                    this.__reactRoot.render(element);
                }

                __startBtnClicked() {
                    if (!this.__startCmd) return;

                    // toggle value
                    this.__startCmd.write(true, (data) => { });
                    this.__startCmd.write(false, (data) => { });
                }

                __stopBtnClicked() {
                    if (!this.__stopCmd) return;

                    // toggle value
                    this.__stopCmd.write(true, (data) => { });
                    this.__stopCmd.write(false, (data) => { });
                }

                __setSpeedBtnClicked(sp) {
                    this.__componentState.speedSp = sp;
                    this.__componentState.key = sp;

                    // raise write-back event
                    TcHmi.EventProvider.raise(this.getId() + '.onSetpointChanged');
                }

                getTitle() {
                    return this.__componentState.title;
                }

                setTitle(value) {
                    this.__componentState.title = value;
                    this.__renderComponent();
                }

                getIsRunning() {
                    return this.__componentState.running;
                }

                setIsRunning(value) {
                    this.__componentState.running = value;
                    this.__renderComponent();
                }

                getStartCmd() {
                    return this.__startCmd;
                }

                setStartCmd(value) {
                    this.__startCmd = value;
                }

                getStopCmd() {
                    return this.__stopCmd;
                }

                setStopCmd(value) {
                    this.__stopCmd = value;
                }

                getSpeedActual() {
                    return this.__componentState.speed;
                }

                setSpeedActual(value) {
                    this.__componentState.speed = value;
                    this.__renderComponent();
                }

                getSpeedSetpoint() {
                    return this.__componentState.speedSp;
                }

                setSpeedSetpoint(value) {
                    this.__componentState.speedSp = value;
                    this.__componentState.key = value;
                    this.__renderComponent();
                }

            }
            FrameworkProject.ReactControl = ReactControl;
        })(FrameworkProject = Controls.FrameworkProject || (Controls.FrameworkProject = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));

/*
 * Register Control
 */
TcHmi.Controls.registerEx('ReactControl', 'TcHmi.Controls.FrameworkProject', TcHmi.Controls.FrameworkProject.ReactControl);
