// #region UserScript Metadata

// ==UserScript==

// #region Info

// @name        akkd-all-sites
// @namespace   https://openuserjs.org/users/93Akkord
// @version     0.0.4
// @description Akkd All Sites
// @copyright   2022+, Michael Barros (https://openuserjs.org/users/93Akkord)
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @license     GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @author      93Akkord
// @run-at      document-start
// @icon        data:image/png;base64,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
// @updateURL   https://openuserjs.org/meta/93Akkord/akkd-all-sites.meta.js
// @downloadURL https://openuserjs.org/install/93Akkord/akkd-all-sites.user.js

// #endregion Info

// #region Matches/Includes/Excludes

// @include     /^.*$/

// #endregion Matches/Includes/Excludes

// #region Grants

// @grant       GM_addElement
// @grant       GM_addStyle
// @grant       GM_addValueChangeListener
// @grant       GM_deleteValue
// @grant       GM_download
// @grant       GM_getResourceText
// @grant       GM_getResourceURL
// @grant       GM_getTab
// @grant       GM_getTabs
// @grant       GM_getValue
// @grant       GM_listValues
// @grant       GM_log
// @grant       GM_notification
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @grant       GM_removeValueChangeListener
// @grant       GM_saveTab
// @grant       GM_setClipboard
// @grant       GM_setValue
// @grant       GM_unregisterMenuCommand
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// @grant       window.close
// @grant       window.focus
// @grant       window.onurlchange

// #endregion Grants

// #region Resources

// #endregion Resources

// #region Requires

// @require     https://code.jquery.com/jquery-3.2.1.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.min.js
// @require     https://openuserjs.org/src/libs/93Akkord/loglevel.js
// @require     https://openuserjs.org/src/libs/93Akkord/akkd-common.js
// @require     https://openuserjs.org/src/libs/sizzle/GM_config.min.js

// #endregion Requires

// #region Other

// noframes
// @connect     *

// #endregion Other

// ==/UserScript==

// ==OpenUserJS==

// @author      93Akkord

// ==/OpenUserJS==

// #endregion UserScript Metadata

// #region Type References

/// <reference path='./node_modules/@types/tampermonkey/index.d.ts' />
/// <reference path='./node_modules/@types/jquery/index.d.ts' />
/// <reference path='./node_modules/@types/arrive/index.d.ts' />

// #endregion Type References

const logger = getLogger('akkd', { logLevel: log.levels.DEBUG });

function setupConfig(logger) {
    // demo: http://sizzlemctwizzle.github.io/GM_config/
    GM_config.init({
        id: `main-${location.host.replace(/\./g, '_')}`,
        title: 'Akkd All Sites Config',

        fields: {
            // test: https://www.codingwithjesse.com/demo/2007-05-16-detect-browser-window-focus/
            always_focus: {
                label: 'Always Focus',
                type: 'checkbox',
                default: false,
            },
        },

        events: {
            init: function () {
                init('loaded', () => alwaysOnFocus(GM_config.get('always_focus')));
            },
            open: function () {
                alwaysOnFocus(true);
            },
            save: function () {},
            close: function () {
                alwaysOnFocus(GM_config.get('always_focus'));
            },
            reset: function () {},
        },
    });
}

function registryConfigMenu() {
    let menuId = GM_registerMenuCommand(`Config`, () => {
        GM_config.open();
    });
}

function exposeGlobalVariables() {
    let variables = [
        // libs
        { name: 'jQuery', value: jQuery },
        { name: '$', value: $ },

        // functions/variables
        { name: 'pp', value: pp },
        { name: 'pformat', value: pformat },
        { name: 'getObjProps', value: getObjProps },
        { name: 'getUserDefinedGlobalProps', value: getUserDefinedGlobalProps },
        { name: 'getLocalStorageSize', value: getLocalStorageSize },
        { name: 'unsafeWindow', value: unsafeWindow },
        { name: 'getWindow', value: getWindow },
        { name: 'getTopWindow', value: getTopWindow },
        { name: 'getStyle', value: getStyle },

        { name: 'GM_info', value: GM_info },

        { name: 'alwaysOnFocus', value: alwaysOnFocus },
    ];

    GM_info.script.grant.forEach((grant) => {
        if (grant.includes('GM_')) {
            variables.push({
                name: grant,
                value: window[grant],
            });
        }
    });

    variables.forEach((variable, index, variables) => {
        try {
            setupWindowProps(getWindow(), variable.name, variable.value);
        } catch (error) {
            logger.error(`Unable to expose variable ${variable.name} into the global scope.`);
        }
    });
}

function startPerformanceMonitor() {
    // if (getWindow().top != getWindow().self) {
    // setTimeout(() => {
    let _window = 'unsafeWindow' in window ? getWindow() : window;

    class Stats {
        constructor({
            //
            containerId = 'performance-monitor-container',
            includeMem = true,
            includeMemOld = true,
            includeFps = true,
            includeMs = true,
        } = {}) {
            this.mode = 0;
            this.container = document.createElement('div');
            this.on = false;
            this.changing = false;

            this.includeMem = includeMem;
            this.includeMemOld = includeMemOld;
            this.includeFps = includeFps;
            this.includeMs = includeMs;

            this.container.id = containerId;
            this.container.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';
            this.container.style.display = 'none';
            this.container.addEventListener('click', (ev) => {
                if (!this.me.moving && !this.me.keyPressed) {
                    ev.preventDefault();

                    this.showPanel(++this.mode % this.container.children.length);
                }
            });

            this.beginTime = (performance || Date).now();
            this.prevTime = this.beginTime;
            this.frames = 0;

            this.memPanel;

            /** @type {Panel} */
            this.memPanelOld;

            /** @type {Panel} */
            this.fpsPanel;

            /** @type {Panel} */
            this.msPanel;

            if (_window.self.performance && _window.self.performance.memory) {
                if (this.includeMem) {
                    this.memPanel = new MemoryStats();

                    this.container.appendChild(this.memPanel.domElement);
                }

                if (this.includeMemOld) {
                    this.memPanelOld = this.addPanel(new Panel('MB', '#f08', '#201'));
                }
            }

            if (this.includeFps) {
                this.fpsPanel = this.addPanel(new Panel('FPS', '#0ff', '#002'));
            }

            if (this.includeMs) {
                this.msPanel = this.addPanel(new Panel('MS', '#0f0', '#020'));
            }

            this.showPanel(0);

            this.REVISION = 16;
            this.dom = this.container;
            this.domElement = this.container;
            this.setMode = this.showPanel;

            this.me = new MoveableElement(this.container, true);
            this.me.init();
        }

        showPanel(id) {
            for (let i = 0; i < this.container.children.length; i++) {
                this.container.children[i].style.display = i === id ? 'block' : 'none';
            }

            this.mode = id;
        }

        addPanel(panel) {
            this.container.appendChild(panel.dom);

            return panel;
        }

        begin() {
            this.beginTime = (performance || Date).now();
        }

        end() {
            let time = (performance || Date).now();
            this.frames++;

            if (this.msPanel) {
                this.msPanel.update(time - this.beginTime, 200);
            }

            if (time >= this.prevTime + 1000) {
                if (this.fpsPanel) {
                    this.fpsPanel.update((this.frames * 1000) / (time - this.prevTime), 100);
                }

                this.prevTime = time;
                this.frames = 0;

                if (this.memPanel) {
                    this.memPanel.update(performance.memory.usedJSHeapSize / 1048576, performance.memory.jsHeapSizeLimit / 1048576);
                }

                if (this.memPanelOld) {
                    this.memPanelOld.update(performance.memory.usedJSHeapSize / 1048576, performance.memory.jsHeapSizeLimit / 1048576);
                }
            }

            return time;
        }

        update() {
            this.beginTime = this.end();
        }

        start(cb) {
            if (!this.on) {
                this.on = true;

                this.showPanel(this.mode);

                this.container.style.display = 'block';

                this.animate(cb);
            }
        }

        stop() {
            this.on = false;

            this.container.style.display = 'none';
        }

        animate(cb) {
            let _animate = () => {
                this.begin();

                if (cb) {
                    cb();
                }

                this.end();

                if (this.on) {
                    requestAnimationFrame(_animate);
                }
            };

            requestAnimationFrame(_animate);
        }
    }

    class Panel {
        constructor(name, foreground, background) {
            this.name = name;
            this.foreground = foreground;
            this.background = background;

            this.min = Infinity;
            this.max = 0;
            this.PR = Math.round(_window.devicePixelRatio || 1);
            this.WIDTH = 80 * this.PR;
            this.HEIGHT = 48 * this.PR;
            this.TEXT_X = 3 * this.PR;
            this.TEXT_Y = 2 * this.PR;
            this.GRAPH_X = 3 * this.PR;
            this.GRAPH_Y = 15 * this.PR;
            this.GRAPH_WIDTH = 74 * this.PR;
            this.GRAPH_HEIGHT = 30 * this.PR;
            this.canvas = document.createElement('canvas');

            this.canvas.width = this.WIDTH;
            this.canvas.height = this.HEIGHT;
            this.canvas.style.cssText = 'width:80px;height:48px;cursor:pointer';

            this.context = this.canvas.getContext('2d');

            this.context.font = 'bold ' + 9 * this.PR + 'px Helvetica,Arial,sans-serif';
            this.context.textBaseline = 'top';
            this.context.fillStyle = this.background;

            this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);

            this.context.fillStyle = this.foreground;

            this.context.fillText(this.name, this.TEXT_X, this.TEXT_Y);
            this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);

            this.context.fillStyle = this.background;
            this.context.globalAlpha = 0.9;

            this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);

            this.dom = this.canvas;
        }

        update(value, maxValue) {
            this.min = Math.min(this.min, value);
            this.max = Math.max(this.max, value);
            this.context.fillStyle = this.background;
            this.context.globalAlpha = 1;

            this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y);

            this.context.fillStyle = this.foreground;

            this.context.fillText(Math.round(value) + ' ' + this.name + ' (' + Math.round(this.min) + '-' + Math.round(this.max) + ')', this.TEXT_X, this.TEXT_Y);
            this.context.drawImage(this.canvas, this.GRAPH_X + this.PR, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT, this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT);
            this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, this.GRAPH_HEIGHT);

            this.context.fillStyle = this.background;
            this.context.globalAlpha = 0.9;

            this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, Math.round((1 - value / maxValue) * this.GRAPH_HEIGHT));
        }
    }

    function MemoryStats() {
        let msMin = 100;
        let msMax = 0;
        let GRAPH_HEIGHT = 30;
        let GRAPH_WIDTH = 74;
        let redrawMBThreshold = GRAPH_HEIGHT;

        let container = document.createElement('div');
        container.style.display = 'none';
        container.id = 'stats';
        container.style.cssText = 'width:80px;height:48px;opacity:0.9;cursor:pointer;overflow:hidden;z-index:10000;will-change:transform;';

        let msDiv = document.createElement('div');
        msDiv.id = 'ms';
        msDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#020;';
        container.appendChild(msDiv);

        let msText = document.createElement('div');
        msText.id = 'msText';
        msText.style.cssText = 'color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
        msText.innerHTML = 'Memory';
        msDiv.appendChild(msText);

        let msGraph = document.createElement('div');
        msGraph.id = 'msGraph';
        msGraph.style.cssText = 'position:relative;width:74px;height:' + GRAPH_HEIGHT + 'px;background-color:#0f0';
        msDiv.appendChild(msGraph);

        while (msGraph.children.length < GRAPH_WIDTH) {
            let bar = document.createElement('span');
            bar.style.cssText = 'width:1px;height:' + GRAPH_HEIGHT + 'px;float:left;background-color:#131';
            msGraph.appendChild(bar);
        }

        let updateGraph = function (dom, height, color) {
            let child = dom.appendChild(dom.firstChild);
            child.style.height = height + 'px';
            if (color) child.style.backgroundColor = color;
        };

        let redrawGraph = function (dom, oHFactor, hFactor) {
            [].forEach.call(dom.children, function (c) {
                let cHeight = c.style.height.substring(0, c.style.height.length - 2);

                // Convert to MB, change factor
                let newVal = GRAPH_HEIGHT - ((GRAPH_HEIGHT - cHeight) / oHFactor) * hFactor;

                c.style.height = newVal + 'px';
            });
        };

        // polyfill usedJSHeapSize
        if (_window.performance && !performance.memory) {
            performance.memory = { usedJSHeapSize: 0, totalJSHeapSize: 0 };
        }

        // support of the API?
        if (performance.memory.totalJSHeapSize === 0) {
            logger.warn('totalJSHeapSize === 0... performance.memory is only available in Chrome .');
        }

        let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        let precision;
        let i;
        function bytesToSize(bytes, nFractDigit) {
            if (bytes === 0) return 'n/a';
            nFractDigit = nFractDigit !== undefined ? nFractDigit : 0;
            precision = Math.pow(10, nFractDigit);
            i = Math.floor(Math.log(bytes) / Math.log(1024));
            return Math.round((bytes * precision) / Math.pow(1024, i)) / precision + ' ' + sizes[i];
        }

        // TODO, add a sanity check to see if values are bucketed.
        // If so, remind user to adopt the --enable-precise-memory-info flag.
        // open -a "/Applications/Google Chrome.app" --args --enable-precise-memory-info

        let lastTime = Date.now();
        let lastUsedHeap = performance.memory.usedJSHeapSize;
        let delta = 0;
        let color = '#131';
        let ms = 0;
        let mbValue = 0;
        let factor = 0;
        let newThreshold = 0;

        return {
            domElement: container,

            update: function () {
                // update at 30fps
                if (Date.now() - lastTime < 1000 / 30) return;
                lastTime = Date.now();

                delta = performance.memory.usedJSHeapSize - lastUsedHeap;
                lastUsedHeap = performance.memory.usedJSHeapSize;

                // if memory has gone down, consider it a GC and draw a red bar.
                color = delta < 0 ? '#830' : '#131';

                ms = lastUsedHeap;
                msMin = Math.min(msMin, ms);
                msMax = Math.max(msMax, ms);
                msText.textContent = 'Mem: ' + bytesToSize(ms, 2);

                mbValue = ms / (1024 * 1024);

                if (mbValue > redrawMBThreshold) {
                    factor = (mbValue - (mbValue % GRAPH_HEIGHT)) / GRAPH_HEIGHT;
                    newThreshold = GRAPH_HEIGHT * (factor + 1);
                    redrawGraph(msGraph, GRAPH_HEIGHT / redrawMBThreshold, GRAPH_HEIGHT / newThreshold);
                    redrawMBThreshold = newThreshold;
                }

                updateGraph(msGraph, GRAPH_HEIGHT - mbValue * (GRAPH_HEIGHT / redrawMBThreshold), color);
            },
        };
    }

    let stats = new Stats({
        includeMemOld: false,
        // includeFps: false,
        // includeMs: false,
    });

    function initPerformanceMonitor() {
        if (!document.body) {
            setTimeout(() => {
                initPerformanceMonitor();
            }, 250);
        } else {
            function setupIFrameEvents() {
                setTimeout(() => {
                    let iframes = document.querySelectorAll('iframe');

                    for (let i = 0; i < iframes.length; i++) {
                        try {
                            const iframe = iframes[i];

                            /** @type {Window} */
                            let _window = iframe.contentWindow;

                            _window.document.addEventListener('keydown', function (e) {
                                if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() == 'm') {
                                    e.cancelBubble = true;
                                    e.preventDefault();
                                    e.stopImmediatePropagation();

                                    _window.parent.postMessage('performance-monitor-keybind', '*');
                                }
                            });
                        } catch (error) {}
                    }
                }, 5000);
            }

            document.body.appendChild(stats.dom);

            let changing = false;

            function startOrStop() {
                if (!changing) {
                    changing = true;

                    if (!stats.on) {
                        stats.start();
                    } else {
                        stats.stop();
                    }

                    setTimeout(() => {
                        changing = false;
                    }, 500);
                }
            }

            document.addEventListener('keydown', function (e) {
                if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() == 'm') {
                    e.cancelBubble = true;
                    e.preventDefault();
                    e.stopImmediatePropagation();

                    startOrStop();
                }
            });

            setupIFrameEvents();

            /**
             *
             *
             * @author Michael Barros <michaelcbarros@gmail.com>
             * @param {MessageEvent} ev
             */
            function messageEvent(ev) {
                if (ev.data === 'performance-monitor-keybind' || ev.message === 'performance-monitor-keybind') {
                    startOrStop();
                }
            }

            _window.removeEventListener('message', messageEvent);
            _window.addEventListener('message', messageEvent);
        }
    }

    if (getTopWindow() === getWindow()) {
        initPerformanceMonitor();
    }
}

function alwaysOnFocusOld() {
    let on = GM_getValue('always_focus', false);
    let focusMenuCommandID;

    /**
     *
     *
     * @author Michael Barros <michaelcbarros@gmail.com>
     * @param {boolean} [init=false]
     */
    function registerAlwaysFocusMenuCommand(init = false) {
        if (!init) {
            on = !on;

            GM_setValue('always_focus', on);
        }

        if (focusMenuCommandID != undefined) {
            GM_unregisterMenuCommand(focusMenuCommandID);
        }

        focusMenuCommandID = GM_registerMenuCommand(`Always Focus: ${on ? 'on' : 'off'}`, () => {
            registerAlwaysFocusMenuCommand();
        });

        _alwaysOnFocus(on);
    }

    function _alwaysOnFocus(on) {
        if (!('originalFocusValues' in getWindow())) {
            getWindow().originalFocusValues = {
                'unsafeWindow.onblur': unsafeWindow.onblur,
                'unsafeWindow.blurred': unsafeWindow.blurred,
                'unsafeWindow.document.hasFocus': unsafeWindow.document.hasFocus,
                'unsafeWindow.window.onfocus': unsafeWindow.window.onfocus,

                'document.hidden': document.hidden,
                'document.mozHidden': document.mozHidden,
                'document.msHidden': document.msHidden,
                'document.webkitHidden': document.webkitHidden,
                'document.visibilityState': document.visibilityState,

                'unsafeWindow.document.onvisibilitychange': unsafeWindow.document.onvisibilitychange,
            };
        }

        if (!('__eventHandler__' in getWindow())) {
            getWindow().__eventHandler__ = function (event) {
                event.stopImmediatePropagation();
            };
        }

        function getNestedDot(obj, dotStr) {
            let parts = dotStr.split('.');

            while (parts.length > 0) {
                let part = parts.shift();

                obj = obj[part];
            }

            return obj;
        }

        if (on) {
            unsafeWindow.onblur = null;
            unsafeWindow.blurred = false;

            unsafeWindow.document.hasFocus = function () {
                return true;
            };
            unsafeWindow.window.onfocus = function () {
                return true;
            };

            Object.defineProperty(document, 'hidden', { value: false, configurable: true });
            Object.defineProperty(document, 'mozHidden', { value: false, configurable: true });
            Object.defineProperty(document, 'msHidden', { value: false, configurable: true });
            Object.defineProperty(document, 'webkitHidden', { value: false, configurable: true });
            Object.defineProperty(document, 'visibilityState', {
                get: function () {
                    return 'visible';
                },
                configurable: true,
            });

            unsafeWindow.document.onvisibilitychange = undefined;

            let events = [
                'visibilitychange',
                'webkitvisibilitychange',
                'blur', // may cause issues on some websites
                'mozvisibilitychange',
                'msvisibilitychange',
            ];

            for (let i = 0; i < events.length; i++) {
                const event = events[i];

                window.addEventListener(event, getWindow().__eventHandler__, true);
            }
        } else {
            let orig = getWindow().originalFocusValues;

            unsafeWindow.onblur = orig['unsafeWindow.onblur'];
            unsafeWindow.blurred = orig['unsafeWindow.blurred'];

            unsafeWindow.document.hasFocus = orig['unsafeWindow.document.hasFocus'];
            unsafeWindow.window.onfocus = orig['unsafeWindow.window.onfocus'];

            // Object.defineProperty(document, 'hidden', { value: orig['document.hidden'] });
            // Object.defineProperty(document, 'mozHidden', { value: orig['document.mozHidden'] });
            // Object.defineProperty(document, 'msHidden', { value: orig['document.msHidden'] });
            // Object.defineProperty(document, 'webkitHidden', { value: orig['document.webkitHidden'] });
            document.hidden = orig['document.hidden'];
            document.mozHidden = orig['document.mozHidden'];
            document.msHidden = orig['document.msHidden'];
            document.webkitHidden = orig['document.webkitHidden'];
            document.visibilityState = orig['document.visibilityState'];

            unsafeWindow.document.onvisibilitychange = orig['unsafeWindow.document.onvisibilitychange'];

            let events = [
                'visibilitychange',
                'webkitvisibilitychange',
                'blur', // may cause issues on some websites
                'mozvisibilitychange',
                'msvisibilitychange',
            ];

            for (let i = 0; i < events.length; i++) {
                const event = events[i];

                window.removeEventListener(event, getWindow().__eventHandler__, true);
            }
        }
    }

    registerAlwaysFocusMenuCommand(true);
}

/**
 *
 *
 * @author Michael Barros <michaelcbarros@gmail.com>
 * @param {boolean} on
 */
function alwaysOnFocus(on) {
    if (!('originalFocusValues' in getWindow())) {
        getWindow().originalFocusValues = {
            'unsafeWindow.onblur': unsafeWindow.onblur,
            'unsafeWindow.blurred': unsafeWindow.blurred,
            'unsafeWindow.document.hasFocus': unsafeWindow.document.hasFocus,
            'unsafeWindow.window.onfocus': unsafeWindow.window.onfocus,

            'document.hidden': document.hidden,
            'document.mozHidden': document.mozHidden,
            'document.msHidden': document.msHidden,
            'document.webkitHidden': document.webkitHidden,
            'document.visibilityState': document.visibilityState,

            'unsafeWindow.document.onvisibilitychange': unsafeWindow.document.onvisibilitychange,
        };
    }

    if (!('__eventHandler__' in getWindow())) {
        getWindow().__eventHandler__ = function (event) {
            event.stopImmediatePropagation();
        };
    }

    function getNestedDot(obj, dotStr) {
        let parts = dotStr.split('.');

        while (parts.length > 0) {
            let part = parts.shift();

            obj = obj[part];
        }

        return obj;
    }

    if (on) {
        unsafeWindow.onblur = null;
        unsafeWindow.blurred = false;

        unsafeWindow.document.hasFocus = function () {
            return true;
        };
        unsafeWindow.window.onfocus = function () {
            return true;
        };

        Object.defineProperty(document, 'hidden', { value: false, configurable: true });
        Object.defineProperty(document, 'mozHidden', { value: false, configurable: true });
        Object.defineProperty(document, 'msHidden', { value: false, configurable: true });
        Object.defineProperty(document, 'webkitHidden', { value: false, configurable: true });
        Object.defineProperty(document, 'visibilityState', {
            get: function () {
                return 'visible';
            },
            configurable: true,
        });

        unsafeWindow.document.onvisibilitychange = undefined;

        let events = [
            'visibilitychange',
            'webkitvisibilitychange',
            'blur', // may cause issues on some websites
            'mozvisibilitychange',
            'msvisibilitychange',
        ];

        for (let i = 0; i < events.length; i++) {
            const event = events[i];

            window.addEventListener(event, getWindow().__eventHandler__, true);
        }
    } else {
        let orig = getWindow().originalFocusValues;

        unsafeWindow.onblur = orig['unsafeWindow.onblur'];
        unsafeWindow.blurred = orig['unsafeWindow.blurred'];

        unsafeWindow.document.hasFocus = orig['unsafeWindow.document.hasFocus'];
        unsafeWindow.window.onfocus = orig['unsafeWindow.window.onfocus'];

        // Object.defineProperty(document, 'hidden', { value: orig['document.hidden'] });
        // Object.defineProperty(document, 'mozHidden', { value: orig['document.mozHidden'] });
        // Object.defineProperty(document, 'msHidden', { value: orig['document.msHidden'] });
        // Object.defineProperty(document, 'webkitHidden', { value: orig['document.webkitHidden'] });
        document.hidden = orig['document.hidden'];
        document.mozHidden = orig['document.mozHidden'];
        document.msHidden = orig['document.msHidden'];
        document.webkitHidden = orig['document.webkitHidden'];
        document.visibilityState = orig['document.visibilityState'];

        unsafeWindow.document.onvisibilitychange = orig['unsafeWindow.document.onvisibilitychange'];

        let events = [
            'visibilitychange',
            'webkitvisibilitychange',
            'blur', // may cause issues on some websites
            'mozvisibilitychange',
            'msvisibilitychange',
        ];

        for (let i = 0; i < events.length; i++) {
            const event = events[i];

            window.removeEventListener(event, getWindow().__eventHandler__, true);
        }
    }
}

/**
 *
 *
 * @author Michael Barros <michaelcbarros@gmail.com>
 */
async function init(when) {
    const DEFAULT_OPTIONS = {
        use_vanilla: false,
    };

    let options = typeof arguments[1] == 'object' ? arguments[1] : {};
    let func = typeof arguments[1] == 'object' ? arguments[2] : arguments[1];
    let args = typeof arguments[1] == 'object' ? arguments[3] : arguments[2];

    options = Object.assign(DEFAULT_OPTIONS, options);

    async function runCallback() {
        if (args && args.length > 0) {
            await func(...args);
        } else {
            await func();
        }
    }

    if (when == 'start') {
        await runCallback();
    } else if (when == 'ready') {
        if (!options.use_vanilla) {
            $(document).ready(async (e) => {
                await runCallback();
            });
        } else {
            document.addEventListener('DOMContentLoaded', async (e) => {
                await runCallback();
            });
        }
    } else if (when == 'loaded') {
        if (!options.use_vanilla) {
            $(document).on('readystatechange', async (e) => {
                if (e.target.readyState == 'complete') {
                    await runCallback();
                }
            });
        } else {
            document.addEventListener('readystatechange', async (e) => {
                if (e.target.readyState === 'complete') {
                    await runCallback();
                }
            });
        }
    }
}

(async function () {
    setupConfig(logger);
    registryConfigMenu();

    GM_getTab((tab) => {
        tab.title = document.title;

        GM_saveTab(tab);
    });

    exposeGlobalVariables();
    startPerformanceMonitor();
})();
