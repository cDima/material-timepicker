(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Object.assign polyfill
 *
 * @param {object} target Target object to merge properties onto
 * @param {...object} sources  Source object to merge properties from
 * @return {object} Target object with merged properties
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function assign(target) {
    if (target === 'undefined' || target === null) {
        throw new TypeError('Cannot convert first argument to object');
    }

    var to = Object(target);

    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    for (var inc = 0; inc < sources.length; inc += 1) {
        var nextSource = sources[inc];

        if (nextSource === 'undefined' || nextSource === null) {
            continue;
        }

        nextSource = Object(nextSource);

        var keysArray = Object.keys(nextSource);

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== 'undefined' && desc.enumerable) {
                to[nextKey] = nextSource[nextKey];
            }
        }
    }

    return to;
}

exports['default'] = assign;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = "\n<div class=\"mtp-overlay\" style=\"display:none\">\n    <div class=\"mtp-wrapper\">\n        <div class=\"mtp-display\">\n            <span class=\"mtp-display__time\">12:00</span>\n            <span class=\"mtp-display__meridiem\">am</span>\n        </div><!-- END .mtp-display -->\n        <div class=\"mtp-picker\">\n            <div class=\"mtp-meridiem\">\n                <span class=\"mtp-clock--active\">am</span>\n                <span>pm</span>\n            </div><!-- END .mtp-meridiem -->\n            <div class=\"mtp-clock\">\n                <div class=\"mtp-clock__center\"></div>\n                <div class=\"mtp-clock__hand\"></div>\n                <ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__hours\" style=\"display:none\">\n                    <li>3</li>\n                    <li>4</li>\n                    <li>5</li>\n                    <li>6</li>\n                    <li>7</li>\n                    <li>8</li>\n                    <li>9</li>\n                    <li>10</li>\n                    <li>11</li>\n                    <li class=\"mtp-clock--active\">12</li>\n                    <li>1</li>\n                    <li>2</li>\n                </ul>\n                <ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__minutes\" style=\"display:none\">\n                    <li>15</li>\n                    <li>20</li>\n                    <li>25</li>\n                    <li>30</li>\n                    <li>35</li>\n                    <li>40</li>\n                    <li>45</li>\n                    <li>50</li>\n                    <li>55</li>\n                    <li class=\"mtp-clock--active\">0</li>\n                    <li>5</li>\n                    <li>10</li>\n                </ul>\n                <ul class=\"mtp-clock__time mtp-clock__hours-military\" style=\"display:none\">\n                    <div class=\"mtp-clock__inner\">\n                        <li>3</li>\n                        <li>4</li>\n                        <li>5</li>\n                        <li>6</li>\n                        <li>7</li>\n                        <li>8</li>\n                        <li>9</li>\n                        <li>10</li>\n                        <li>11</li>\n                        <li class=\"mtp-clock--active\">00</li>\n                        <li>1</li>\n                        <li>2</li>\n                    </div>\n                    <div class=\"mtp-clock__outer\">\n                        <li>15</li>\n                        <li>16</li>\n                        <li>17</li>\n                        <li>18</li>\n                        <li>19</li>\n                        <li>20</li>\n                        <li>21</li>\n                        <li>22</li>\n                        <li>23</li>\n                        <li>12</li>\n                        <li>13</li>\n                        <li>14</li>\n                    </div>\n                </ul>\n            </div><!-- END .mtp-clock -->\n            <div class=\"mtp-actions\">\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__cancel\">Cancel</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__back\" style=\"display:none\">Back</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__ok\">OK</button>\n            </div><!-- END .mtp-actions -->\n        </div><!-- END .mtp-picker -->\n    </div><!-- END .mtp-wrapper -->\n</div><!-- END .mtp-overlay -->\n";

exports["default"] = template;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _assign = require('./assign');

var _assign2 = _interopRequireDefault(_assign);

var TimePicker = (function () {

    /**
     * Initialize new TimePicker instance
     *
     * @return {TimePicker} New TimePicker instance
     */

    function TimePicker() {
        _classCallCheck(this, TimePicker);

        this.template = _template2['default'];
        this.setupTemplate();
        this.currentStep = 0;
        this.defaultOptions = {};
        // `standard` or `military` display hours
        this.defaultOptions.timeFormat = 'standard';
        this.cachedEls = {};
        this.cachedEls.overlay = document.getElementsByClassName('mtp-overlay')[0];
        this.cachedEls.wrapper = this.cachedEls.overlay.getElementsByClassName('mtp-wrapper')[0];
        this.cachedEls.picker = this.cachedEls.wrapper.getElementsByClassName('mtp-picker')[0];
        this.cachedEls.meridiem = this.cachedEls.wrapper.getElementsByClassName('mtp-meridiem')[0];
        this.cachedEls.meridiemSpans = this.cachedEls.meridiem.getElementsByTagName('span');
        this.cachedEls.displayTime = this.cachedEls.wrapper.getElementsByClassName('mtp-display__time')[0];
        this.cachedEls.displayMeridiem = this.cachedEls.wrapper.getElementsByClassName('mtp-display__meridiem')[0];
        this.cachedEls.buttonCancel = this.cachedEls.picker.getElementsByClassName('mtp-actions__cancel')[0];
        this.cachedEls.buttonBack = this.cachedEls.picker.getElementsByClassName('mtp-actions__back')[0];
        this.cachedEls.buttonOk = this.cachedEls.picker.getElementsByClassName('mtp-actions__ok')[0];
        this.cachedEls.clockHours = this.cachedEls.picker.getElementsByClassName('mtp-clock__hours')[0];
        this.cachedEls.clockMinutes = this.cachedEls.picker.getElementsByClassName('mtp-clock__minutes')[0];
        this.cachedEls.clockMilitaryHours = this.cachedEls.picker.getElementsByClassName('mtp-clock__hours-military')[0];
        this.cachedEls.clockHand = this.cachedEls.picker.getElementsByClassName('mtp-clock__hand')[0];
        this.cachedEls.clockHoursLi = this.cachedEls.clockHours.getElementsByTagName('li');
        this.cachedEls.clockMinutesLi = this.cachedEls.clockMinutes.getElementsByTagName('li');
        this.cachedEls.clockMilitaryHoursLi = this.cachedEls.clockMilitaryHours.getElementsByTagName('li');

        this.setEvents();

        return this;
    }

    /**
     * Bind event to the input element to open when `focus` event is triggered
     *
     * @param {string|HTMLElement} inputEl Selector element to be queried or existing HTMLElement
     * @param {object} options Options to merged with defaults and set to input element object
     * @return {void}
     */

    _createClass(TimePicker, [{
        key: 'bindInput',
        value: function bindInput(inputEl) {
            var _this = this;

            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var element = inputEl instanceof HTMLElement ? inputEl : document.querySelector(inputEl);

            element.mtpOptions = (0, _assign2['default'])({}, this.defaultOptions, options);
            element.addEventListener('focus', function (event) {
                return _this.showEvent(event);
            });
        }

        /**
         * Open picker with the input provided in context without binding events
         *
         * @param {string|HTMLElement} inputEl Selector element to be queried or existing HTMLElement
         * @param {object} options Options to merged with defaults and set to input element object
         * @return {void}
         */
    }, {
        key: 'openOnInput',
        value: function openOnInput(inputEl) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            this.inputEl = inputEl instanceof HTMLElement ? inputEl : document.querySelector(inputEl);
            this.inputEl.mtpOptions = (0, _assign2['default'])({}, this.defaultOptions, options);
            this.show();
        }

        /**
         * Setup the template in DOM if not already
         *
         * @return {void}
         */
    }, {
        key: 'setupTemplate',
        value: function setupTemplate() {
            if (!this.isTemplateInDOM()) {
                document.body.insertAdjacentHTML('beforeend', _template2['default']);
            }
        }

        /**
         * Set the events on picker elements
         *
         * @return {void}
         */
    }, {
        key: 'setEvents',
        value: function setEvents() {
            var _this2 = this;

            if (!this.hasSetEvents()) {
                // close
                this.cachedEls.overlay.addEventListener('click', function (event) {
                    return _this2.hideEvent(event);
                });
                this.cachedEls.buttonCancel.addEventListener('click', function (event) {
                    return _this2.hideEvent(event);
                });

                // next/prev step actions
                this.cachedEls.buttonOk.addEventListener('click', function () {
                    return _this2.changeStep(_this2.currentStep + 1);
                });
                this.cachedEls.buttonBack.addEventListener('click', function () {
                    return _this2.changeStep(0);
                });

                // meridiem select events
                [].forEach.call(this.cachedEls.meridiemSpans, function (span) {
                    span.addEventListener('click', function (event) {
                        return _this2.meridiemSelectEvent(event);
                    });
                });

                // time select events
                [].forEach.call(this.cachedEls.clockHoursLi, function (hour) {
                    hour.addEventListener('click', function (event) {
                        _this2.timeSelectEvent(event, _this2.cachedEls.clockHours, _this2.cachedEls.clockHoursLi, 0);
                    });
                });
                [].forEach.call(this.cachedEls.clockMinutesLi, function (minute) {
                    minute.addEventListener('click', function (event) {
                        _this2.timeSelectEvent(event, _this2.cachedEls.clockMinutes, _this2.cachedEls.clockMinutesLi, 1);
                    });
                });
                [].forEach.call(this.cachedEls.clockMilitaryHoursLi, function (hour) {
                    hour.addEventListener('click', function (event) {
                        _this2.timeSelectEvent(event, _this2.cachedEls.clockMilitaryHours, _this2.cachedEls.clockMilitaryHoursLi, 0);
                    });
                });

                this.cachedEls.wrapper.classList.add('mtp-events-set');
            }
        }

        /**
         * Show the picker in the DOM
         *
         * @return {void}
         */
    }, {
        key: 'show',
        value: function show() {
            var isMilitaryFormat = this.isMilitaryFormat();

            // blur input to prevent onscreen keyboard from displaying
            this.inputEl.blur();
            this.toggleHoursVisible(true, isMilitaryFormat);
            this.toggleMinutesVisible();
            this.setDisplayTime(isMilitaryFormat ? '00' : '12', 0);
            this.setDisplayTime('0', 1);

            this.cachedEls.displayMeridiem.style.display = isMilitaryFormat ? 'none' : 'inline';
            this.cachedEls.meridiem.style.display = isMilitaryFormat ? 'none' : 'block';
            this.cachedEls.overlay.style.display = 'block';
        }

        /**
         * Event handle for input focus
         *
         * @param {Event} event Event object passed from listener
         * @return {void}
         */
    }, {
        key: 'showEvent',
        value: function showEvent(event) {
            this.inputEl = event.target;
            this.show();
        }

        /**
         * Hide the picker in the DOM
         *
         * @return {void}
         */
    }, {
        key: 'hide',
        value: function hide() {
            this.cachedEls.overlay.style.display = 'none';
            this.inputEl.dispatchEvent(new Event('blur'));
            this.resetState();
        }

        /**
         * Hide the picker element on the page
         *
         * @param {Event} event Event object passed from event listener callback
         * @return {void}
         */
    }, {
        key: 'hideEvent',
        value: function hideEvent(event) {
            var _this3 = this;

            event.stopPropagation();

            // only allow event based close if event.target contains one of these classes
            // hack to prevent overlay close event from triggering on all elements
            var allowedClasses = ['mtp-overlay', 'mtp-actions__cancel'];
            var classList = event.target.classList;

            allowedClasses.some(function (allowedClass) {
                if (classList.contains(allowedClass)) {
                    _this3.hide();
                    return true;
                }
            });
        }

        /**
         * Reset picker state to defaults
         *
         * @return {void}
         */
    }, {
        key: 'resetState',
        value: function resetState() {
            this.currentStep = 0;
            this.toggleHoursVisible(true, this.isMilitaryFormat());
            this.toggleMinutesVisible();
            this.cachedEls.clockHoursLi[9].dispatchEvent(new Event('click'));
            this.cachedEls.clockMinutesLi[9].dispatchEvent(new Event('click'));
            this.cachedEls.clockMilitaryHoursLi[9].dispatchEvent(new Event('click'));
            this.cachedEls.meridiemSpans[0].dispatchEvent(new Event('click'));
        }

        /**
         * Set the displayed time, which will be used to fill input value on completetion
         *
         * @param {string} value Newly selected time value
         * @param {integer} index Index of value to replace [0 = hours, 1 = minutes]
         * @return {void}
         */
    }, {
        key: 'setDisplayTime',
        value: function setDisplayTime(value, index) {
            var time = this.cachedEls.displayTime.innerHTML.split(':');

            // prepend with zero if selecting minutes and value is single digit
            time[index] = index === 1 && value < 10 ? '0' + value : value;
            this.cachedEls.displayTime.innerHTML = time.join(':');
        }

        /**
         * Rotate the hand element to selected time
         *
         * @param {integer} nodeIndex Index of active element
         * @return {void}
         */
    }, {
        key: 'rotateHand',
        value: function rotateHand() {
            var nodeIndex = arguments.length <= 0 || arguments[0] === undefined ? 9 : arguments[0];

            // rotation is done in increments of 30deg
            // nodeIndex 0 is 3 elements behind 0deg so subtract 90 from the sum
            var rotateDeg = nodeIndex * 30 - 90;
            var styleVal = 'rotate(' + rotateDeg + 'deg)';

            this.cachedEls.clockHand.style.transform = styleVal;
            this.cachedEls.clockHand.style['-webkit-transform'] = styleVal;
            this.cachedEls.clockHand.style['-ms-transform'] = styleVal;
        }

        /**
         * Change to the specified step
         *
         * @param {integer} step Index of step to change to
         * @return {void}
         */
    }, {
        key: 'changeStep',
        value: function changeStep(step) {
            var _this4 = this;

            var isMilitaryFormat = this.isMilitaryFormat();
            var hourEls = isMilitaryFormat ? this.cachedEls.clockMilitaryHoursLi : this.cachedEls.clockHoursLi;
            var minuteEls = this.cachedEls.clockMinutesLi;
            var changeStepAction = [function () {
                _this4.toggleHoursVisible(true, isMilitaryFormat);
                _this4.toggleMinutesVisible();
                _this4.rotateHand(_this4.getActiveIndex(hourEls));
            }, function () {
                _this4.toggleHoursVisible();
                _this4.toggleMinutesVisible(true);
                _this4.rotateHand(_this4.getActiveIndex(minuteEls));
            }, function () {
                _this4.timeSelected();
                _this4.hide();
            }][step];

            this.currentStep = step;
            changeStepAction();
        }

        /**
         * Toggle hour (both military and standard) clock visiblity in DOM
         *
         * @param {boolean} isVisible Is clock face toggled visible or hidden
         * @param {boolean} isMilitaryFormat Is using military hour format
         * @return {void}
         */
    }, {
        key: 'toggleHoursVisible',
        value: function toggleHoursVisible() {
            var isVisible = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
            var isMilitaryFormat = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            this.cachedEls.clockHours.style.display = isVisible && !isMilitaryFormat ? 'block' : 'none';
            this.cachedEls.clockMilitaryHours.style.display = isVisible && isMilitaryFormat ? 'block' : 'none';
        }

        /**
         * Toggle minute clock visiblity in DOM
         *
         * @param {boolean} isVisible Is clock face toggled visible or hidden
         * @return {void}
         */
    }, {
        key: 'toggleMinutesVisible',
        value: function toggleMinutesVisible() {
            var isVisible = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            this.cachedEls.clockMinutes.style.display = isVisible ? 'block' : 'none';
            this.cachedEls.buttonBack.style.display = isVisible ? 'inline-block' : 'none';
        }

        /**
         * Get the active time element index
         *
         * @param {HTMLCollection} timeEls Collection of time elements to find active in
         * @return {integer} Active element index
         */
    }, {
        key: 'getActiveIndex',
        value: function getActiveIndex(timeEls) {
            var activeIndex = 0;

            [].some.call(timeEls, function (timeEl, index) {
                if (timeEl.classList.contains('mtp-clock--active')) {
                    activeIndex = index;
                    return true;
                }
            });

            return activeIndex > 11 ? activeIndex - 12 : activeIndex;
        }

        /**
         * Set selected time to input element
         *
         * @return {void}
         */
    }, {
        key: 'timeSelected',
        value: function timeSelected() {
            var time = this.cachedEls.displayTime.innerHTML;
            var meridiem = this.isMilitaryFormat() ? '' : this.cachedEls.displayMeridiem.innerHTML;
            var timeValue = time + ' ' + meridiem;

            this.inputEl.value = timeValue.trim();
            this.inputEl.dispatchEvent(new Event('input'));
        }

        /**
         * Set active clock face element
         *
         * @param {Element} containerEl New active elements .parentNode
         * @param {Element} activeEl Element to set active
         * @return {void}
         */
    }, {
        key: 'setActiveEl',
        value: function setActiveEl(containerEl, activeEl) {
            var activeClassName = 'mtp-clock--active';
            var currentActive = containerEl.getElementsByClassName(activeClassName)[0];

            currentActive.classList.remove(activeClassName);
            activeEl.classList.add(activeClassName);
        }

        /**
         * Meridiem select event handler
         *
         * @param {Evenet} event Event object passed from listener
         * @return {void}
         */
    }, {
        key: 'meridiemSelectEvent',
        value: function meridiemSelectEvent(event) {
            var activeClassName = 'mtp-clock--active';
            var element = event.target;
            var currentActive = this.cachedEls.meridiem.getElementsByClassName(activeClassName)[0];
            var value = element.innerHTML;

            if (!currentActive.isEqualNode(element)) {
                currentActive.classList.remove(activeClassName);
                element.classList.add(activeClassName);
                this.cachedEls.displayMeridiem.innerHTML = value;
            }
        }

        /**
         * Time select event handler
         *
         * @param {Event} event Event object passed from listener
         * @param {HTMLElement} containerEl Element containing time list elements
         * @param {HTMLCollection} listEls Collection of list elements
         * @param {integer} displayIndex Index at which selected time should display [1: hours, 2: minutes]
         * @return {void}
         */
    }, {
        key: 'timeSelectEvent',
        value: function timeSelectEvent(event, containerEl, listEls, displayIndex) {
            event.stopPropagation();

            var newActive = event.target;

            this.setActiveEl(containerEl, newActive);
            this.setDisplayTime(newActive.innerHTML, displayIndex);
            this.rotateHand(this.getActiveIndex(listEls));
        }

        /**
         * Check if picker set to military time mode
         *
         * @return {boolean} Is in military time mode
         */
    }, {
        key: 'isMilitaryFormat',
        value: function isMilitaryFormat() {
            return Boolean(this.inputEl.mtpOptions.timeFormat === 'military');
        }

        /**
         * Check if picker object has already set events on picker elements
         *
         * @return {boolean} Has events been set on picker elements
         */
    }, {
        key: 'hasSetEvents',
        value: function hasSetEvents() {
            return this.cachedEls.wrapper.classList.contains('mtp-events-set');
        }

        /**
         * Check if template has already been appended to DOM
         *
         * @return {boolean} Is template in DOM
         */
    }, {
        key: 'isTemplateInDOM',
        value: function isTemplateInDOM() {
            return Boolean(document.getElementsByClassName('mtp-overlay')[0]);
        }
    }]);

    return TimePicker;
})();

window.TimePicker = new TimePicker();
exports['default'] = TimePicker;
module.exports = exports['default'];

},{"./assign":1,"./template":2}]},{},[3]);
