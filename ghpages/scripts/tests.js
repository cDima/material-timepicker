(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "<div class=\"mtp-overlay\" style=\"display:none\">\n    <div class=\"mtp-wrapper\">\n        <div class=\"mtp-display\">\n            <span class=\"mtp-display__time\">12:00</span>\n            <span class=\"mtp-display__meridiem\">am</span>\n        </div><!-- END .mtp-display -->\n        <div class=\"mtp-picker\">\n            <div class=\"mtp-meridiem\">\n                <span class=\"mtp-clock--active\">am</span>\n                <span>pm</span>\n            </div><!-- END .mtp-meridiem -->\n            <div class=\"mtp-clock\">\n                <div class=\"mtp-clock__center\"></div>\n                <div class=\"mtp-clock__hand\"></div>\n                <ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__hours\" style=\"display:none\">\n                    <li>3</li>\n                    <li>4</li>\n                    <li>5</li>\n                    <li>6</li>\n                    <li>7</li>\n                    <li>8</li>\n                    <li>9</li>\n                    <li>10</li>\n                    <li>11</li>\n                    <li class=\"mtp-clock--active\">12</li>\n                    <li>1</li>\n                    <li>2</li>\n                </ul>\n                <ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__minutes\" style=\"display:none\">\n                    <li>15</li>\n                    <li>20</li>\n                    <li>25</li>\n                    <li>30</li>\n                    <li>35</li>\n                    <li>40</li>\n                    <li>45</li>\n                    <li>50</li>\n                    <li>55</li>\n                    <li class=\"mtp-clock--active\">0</li>\n                    <li>5</li>\n                    <li>10</li>\n                </ul>\n                <ul class=\"mtp-clock__time mtp-clock__hours-military\" style=\"display:none\">\n                    <div class=\"mtp-clock__inner\">\n                        <li>3</li>\n                        <li>4</li>\n                        <li>5</li>\n                        <li>6</li>\n                        <li>7</li>\n                        <li>8</li>\n                        <li>9</li>\n                        <li>10</li>\n                        <li>11</li>\n                        <li class=\"mtp-clock--active\">00</li>\n                        <li>1</li>\n                        <li>2</li>\n                    </div>\n                    <div class=\"mtp-clock__outer\">\n                        <li>15</li>\n                        <li>16</li>\n                        <li>17</li>\n                        <li>18</li>\n                        <li>19</li>\n                        <li>20</li>\n                        <li>21</li>\n                        <li>22</li>\n                        <li>23</li>\n                        <li>12</li>\n                        <li>13</li>\n                        <li>14</li>\n                    </div>\n                </ul>\n            </div><!-- END .mtp-clock -->\n            <div class=\"mtp-actions\">\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__cancel\">Cancel</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__back\" style=\"display:none\">Back</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__ok\">OK</button>\n            </div><!-- END .mtp-actions -->\n        </div><!-- END .mtp-picker -->\n    </div><!-- END .mtp-wrapper -->\n</div><!-- END .mtp-overlay -->\n";

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _htmlTimepickerHtml = require('../html/timepicker.html');

var _htmlTimepickerHtml2 = _interopRequireDefault(_htmlTimepickerHtml);

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

        this.template = _htmlTimepickerHtml2['default'];
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
                document.body.insertAdjacentHTML('beforeend', _htmlTimepickerHtml2['default']);
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

window.TimePicker = TimePicker;
exports['default'] = TimePicker;
module.exports = exports['default'];

},{"../html/timepicker.html":1,"./assign":2}],4:[function(require,module,exports){
/* eslint-disable */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcJsTimepicker = require('../../src/js/timepicker');

var _srcJsTimepicker2 = _interopRequireDefault(_srcJsTimepicker);

var _srcJsAssign = require('../../src/js/assign');

var _srcJsAssign2 = _interopRequireDefault(_srcJsAssign);

describe('TimePicker Unit Tests', function () {
    var picker = undefined;

    beforeEach(function () {
        var spanNode = document.createElement('span');
        var liNode = document.createElement('li');
        var divNode = document.createElement('div');
        var ulNode = document.createElement('ul');
        var buttonNode = document.createElement('button');

        picker = new _srcJsTimepicker2['default']();
        picker.cachedEls = {};
        picker.cachedEls.overlay = divNode.cloneNode();
        picker.cachedEls.wrapper = divNode.cloneNode();
        picker.cachedEls.picker = divNode.cloneNode();
        picker.cachedEls.meridiem = divNode.cloneNode();
        picker.cachedEls.displayTime = spanNode.cloneNode();
        picker.cachedEls.displayMeridiem = divNode.cloneNode();
        picker.cachedEls.buttonCancel = buttonNode.cloneNode();
        picker.cachedEls.buttonBack = buttonNode.cloneNode();
        picker.cachedEls.buttonOk = buttonNode.cloneNode();
        picker.cachedEls.clockHours = ulNode.cloneNode();
        picker.cachedEls.clockMinutes = ulNode.cloneNode();
        picker.cachedEls.clockMilitaryHours = ulNode.cloneNode();
        picker.cachedEls.clockHand = divNode.cloneNode();

        for (var inc = 0; inc < 24; inc += 1) {
            if (inc <= 1) {
                picker.cachedEls.meridiem.appendChild(spanNode.cloneNode());
            }
            if (inc <= 11) {
                picker.cachedEls.clockHours.appendChild(liNode.cloneNode());
                picker.cachedEls.clockMinutes.appendChild(liNode.cloneNode());
            }

            picker.cachedEls.clockMilitaryHours.appendChild(liNode.cloneNode());
        }

        picker.cachedEls.meridiemSpans = picker.cachedEls.meridiem.childNodes;
        picker.cachedEls.clockHoursLi = picker.cachedEls.clockHours.childNodes;
        picker.cachedEls.clockMinutesLi = picker.cachedEls.clockMinutes.childNodes;
        picker.cachedEls.clockMilitaryHoursLi = picker.cachedEls.clockMilitaryHours.childNodes;
    });

    afterEach(function () {
        picker = null;
    });

    describe('#bindInput', function () {
        it('should assign passed options merged with defaultOptions to inputEl parameter', function () {
            var inputEl = document.createElement('input');
            var options = { test: 'value' };
            var expectOptions = (0, _srcJsAssign2['default'])({}, picker.defaultOptions, options);

            picker.bindInput(inputEl, options);

            expect(inputEl.mtpOptions).to.deep.equal(expectOptions);
        });

        it('should set focus event listener to inputEl parameter', function () {
            var inputEl = document.createElement('input');
            var addEventListenerSpy = sinon.spy(inputEl, 'addEventListener');

            picker.bindInput(inputEl);

            expect(addEventListenerSpy.calledOnce).to.be['true'];
            expect(addEventListenerSpy.calledWith('focus', sinon.match.func)).to.be['true'];
        });
    });

    describe('#openOnInput', function () {
        it('should assign inputEl parameter to inputEl class property', function () {
            var inputEl = document.createElement('input');

            picker.openOnInput(inputEl);

            expect(picker.inputEl).to.deep.equal(inputEl);
        });

        it('should assign passed options merged with defaultOptions to inputEl.mtpOptions property', function () {
            var inputEl = document.createElement('input');
            var options = { test: 'value' };
            var expectOptions = (0, _srcJsAssign2['default'])({}, picker.defaultOptions, options);

            picker.openOnInput(inputEl, options);

            expect(picker.inputEl.mtpOptions).to.deep.equal(expectOptions);
        });

        it('should call #show method', function () {
            var inputEl = document.createElement('input');
            var showSpy = sinon.spy(picker, 'show');

            picker.openOnInput(inputEl);

            expect(showSpy.calledOnce).to.be['true'];
        });
    });

    describe('#setupTemplate', function () {
        var isTemplateInDOMStub = undefined,
            insertAdjacentHTMLStub = undefined;

        beforeEach(function () {
            isTemplateInDOMStub = sinon.stub(picker, 'isTemplateInDOM');
            insertAdjacentHTMLStub = sinon.spy(document.body, 'insertAdjacentHTML');
        });

        afterEach(function () {
            isTemplateInDOMStub.restore();
            insertAdjacentHTMLStub.restore();
        });

        it('should insert template in DOM if #isTemplateInDOM returns false', function () {
            isTemplateInDOMStub.onFirstCall().returns(false);
            picker.setupTemplate();

            expect(isTemplateInDOMStub.calledOnce).to.be['true'];
            expect(isTemplateInDOMStub.calledBefore(insertAdjacentHTMLStub)).to.be['true'];
            expect(insertAdjacentHTMLStub.calledWith('beforeend', picker.template)).to.be['true'];
        });

        it('should not insert template in DOM if #isTemplateInDOM returns true', function () {
            isTemplateInDOMStub.onFirstCall().returns(true);
            picker.setupTemplate();

            expect(isTemplateInDOMStub.calledOnce).to.be['true'];
            expect(isTemplateInDOMStub.calledBefore(insertAdjacentHTMLStub)).to.be['true'];
            expect(insertAdjacentHTMLStub.neverCalledWith('beforeend', picker.template)).to.be['true'];
        });
    });

    describe('#setEvents', function () {
        var hasSetEventsStub = undefined,
            cachedEls = undefined,
            wrapperClassListAddSpy = undefined;
        var addEventListenerSpys = {};

        beforeEach(function () {
            cachedEls = picker.cachedEls;
            hasSetEventsStub = sinon.stub(picker, 'hasSetEvents');
            wrapperClassListAddSpy = sinon.spy(cachedEls.wrapper.classList, 'add');
            addEventListenerSpys.overlay = sinon.spy(cachedEls.overlay, 'addEventListener');
            addEventListenerSpys.buttonCancel = sinon.spy(cachedEls.buttonCancel, 'addEventListener');
            addEventListenerSpys.buttonOk = sinon.spy(cachedEls.buttonOk, 'addEventListener');
            addEventListenerSpys.buttonBack = sinon.spy(cachedEls.buttonBack, 'addEventListener');
            addEventListenerSpys.meridiemSpans = [];
            addEventListenerSpys.clockHoursLi = [];
            addEventListenerSpys.clockMinutesLi = [];
            addEventListenerSpys.clockMilitaryHoursLi = [];

            [].forEach.call(cachedEls.meridiemSpans, function (span) {
                addEventListenerSpys.meridiemSpans.push(sinon.spy(span, 'addEventListener'));
            });

            [].forEach.call(cachedEls.clockHoursLi, function (listItem) {
                addEventListenerSpys.clockHoursLi.push(sinon.spy(listItem, 'addEventListener'));
            });

            [].forEach.call(cachedEls.clockMinutesLi, function (listItem) {
                addEventListenerSpys.clockMinutesLi.push(sinon.spy(listItem, 'addEventListener'));
            });

            [].forEach.call(cachedEls.clockMilitaryHoursLi, function (listItem) {
                addEventListenerSpys.clockMilitaryHoursLi.push(sinon.spy(listItem, 'addEventListener'));
            });
        });

        afterEach(function () {
            hasSetEventsStub.restore();
            wrapperClassListAddSpy.restore();
            addEventListenerSpys.overlay.restore();
            addEventListenerSpys.buttonCancel.restore();
            addEventListenerSpys.buttonOk.restore();
            addEventListenerSpys.buttonBack.restore();

            addEventListenerSpys.meridiemSpans.forEach(function (span) {
                span.restore();
            });

            addEventListenerSpys.clockHoursLi.forEach(function (listItem) {
                listItem.restore();
            });

            addEventListenerSpys.clockMinutesLi.forEach(function (listItem) {
                listItem.restore();
            });

            addEventListenerSpys.clockMilitaryHoursLi.forEach(function (listItem) {
                listItem.restore();
            });
        });

        it('should set events on cached elements if #hasSetEvents returns false', function () {
            hasSetEventsStub.onFirstCall().returns(false);
            picker.setEvents();

            expect(hasSetEventsStub.calledOnce).to.be['true'];
            expect(addEventListenerSpys.overlay.calledWith('click', sinon.match.func)).to.be['true'];
            expect(addEventListenerSpys.buttonCancel.calledWith('click', sinon.match.func)).to.be['true'];
            expect(addEventListenerSpys.buttonOk.calledWith('click', sinon.match.func)).to.be['true'];
            expect(addEventListenerSpys.buttonBack.calledWith('click', sinon.match.func)).to.be['true'];

            addEventListenerSpys.meridiemSpans.forEach(function (span) {
                expect(span.calledWith('click', sinon.match.func)).to.be['true'];
            });

            addEventListenerSpys.clockHoursLi.forEach(function (listItem) {
                expect(listItem.calledWith('click', sinon.match.func)).to.be['true'];
            });

            addEventListenerSpys.clockMinutesLi.forEach(function (listItem) {
                expect(listItem.calledWith('click', sinon.match.func)).to.be['true'];
            });

            addEventListenerSpys.clockMilitaryHoursLi.forEach(function (listItem) {
                expect(listItem.calledWith('click', sinon.match.func)).to.be['true'];
            });
        });

        it('should not set events on cached elements if #hasSetEvents returns true', function () {
            hasSetEventsStub.onFirstCall().returns(true);
            picker.setEvents();

            expect(hasSetEventsStub.calledOnce).to.be['true'];
            expect(addEventListenerSpys.overlay.neverCalledWith('click', sinon.match.func)).to.be['true'];
            expect(addEventListenerSpys.buttonCancel.neverCalledWith('click', sinon.match.func)).to.be['true'];
            expect(addEventListenerSpys.buttonOk.neverCalledWith('click', sinon.match.func)).to.be['true'];
            expect(addEventListenerSpys.buttonBack.neverCalledWith('click', sinon.match.func)).to.be['true'];

            addEventListenerSpys.meridiemSpans.forEach(function (span) {
                expect(span.neverCalledWith('click', sinon.match.func)).to.be['true'];
            });

            addEventListenerSpys.clockHoursLi.forEach(function (listItem) {
                expect(listItem.neverCalledWith('click', sinon.match.func)).to.be['true'];
            });

            addEventListenerSpys.clockMinutesLi.forEach(function (listItem) {
                expect(listItem.neverCalledWith('click', sinon.match.func)).to.be['true'];
            });

            addEventListenerSpys.clockMilitaryHoursLi.forEach(function (listItem) {
                expect(listItem.neverCalledWith('click', sinon.match.func)).to.be['true'];
            });
        });

        it('should add .mtp-events-set to cachedEls.wrapper.classList if #hasSetEvents returns false', function () {
            hasSetEventsStub.onFirstCall().returns(false);
            picker.setEvents();

            expect(hasSetEventsStub.calledOnce).to.be['true'];
            expect(hasSetEventsStub.calledBefore(wrapperClassListAddSpy)).to.be['true'];
            expect(wrapperClassListAddSpy.calledWith('mtp-events-set')).to.be['true'];
        });

        it('should not add .mtp-events-set to cachedEls.wrapper.classList if #hasSetEvents returns true', function () {
            hasSetEventsStub.onFirstCall().returns(true);
            picker.setEvents();

            expect(hasSetEventsStub.calledOnce).to.be['true'];
            expect(hasSetEventsStub.calledBefore(wrapperClassListAddSpy)).to.be['true'];
            expect(wrapperClassListAddSpy.neverCalledWith('mtp-events-set')).to.be['true'];
        });
    });

    describe('#show', function () {
        var blurSpy = undefined,
            isMilitaryFormatStub = undefined,
            toggleHoursVisibleSpy = undefined,
            toggleMinutesVisibleSpy = undefined,
            setDisplayTimeSpy = undefined;

        beforeEach(function () {
            picker.inputEl = document.createElement('input');
            blurSpy = sinon.spy(picker.inputEl, 'blur');
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            toggleHoursVisibleSpy = sinon.spy(picker, 'toggleHoursVisible');
            toggleMinutesVisibleSpy = sinon.spy(picker, 'toggleMinutesVisible');
            setDisplayTimeSpy = sinon.spy(picker, 'setDisplayTime');
        });

        afterEach(function () {
            blurSpy.restore();
            isMilitaryFormatStub.restore();
            toggleHoursVisibleSpy.restore();
            toggleMinutesVisibleSpy.restore();
            setDisplayTimeSpy.restore();
        });

        it('should call blur on inputEl', function () {
            picker.show();

            expect(blurSpy.calledOnce).to.be['true'];
        });

        it('should call #toggleHoursVisible with true', function () {
            picker.show();

            expect(toggleHoursVisibleSpy.calledOnce).to.be['true'];
            expect(toggleHoursVisibleSpy.calledWith(true)).to.be['true'];
        });

        it('should call #toggleMinutesVisible with no parameters', function () {
            picker.show();

            expect(toggleMinutesVisibleSpy.calledOnce).to.be['true'];
            expect(toggleMinutesVisibleSpy.neverCalledWith(true)).to.be['true'];
        });

        it('should call #setDisplayTime with 00 if isMilitaryFormat is true', function () {
            isMilitaryFormatStub.onFirstCall().returns(true);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be['true'];
            expect(isMilitaryFormatStub.calledBefore(setDisplayTimeSpy)).to.be['true'];
            expect(setDisplayTimeSpy.calledWith('00', 0)).to.be['true'];
        });

        it('should call #setDisplayTime, index 0, with 12 if isMilitaryFormat is false', function () {
            isMilitaryFormatStub.onFirstCall().returns(false);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be['true'];
            expect(isMilitaryFormatStub.calledBefore(setDisplayTimeSpy)).to.be['true'];
            expect(setDisplayTimeSpy.getCall(0).calledWith('12', 0)).to.be['true'];
        });

        it('should call #setDisplayTime, index 1, with 0', function () {
            picker.show();

            expect(setDisplayTimeSpy.getCall(1).calledWith('0', 1)).to.be['true'];
        });

        it('should set cachedEls.displayMeridiem.style.display to none when isMilitaryFormat is true', function () {
            isMilitaryFormatStub.onFirstCall().returns(true);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be['true'];
            expect(picker.cachedEls.displayMeridiem.style.display).to.equal('none');
        });

        it('should set cachedEls.displayMeridiem.style.display to inline when isMilitaryFormat is false', function () {
            isMilitaryFormatStub.onFirstCall().returns(false);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be['true'];
            expect(picker.cachedEls.displayMeridiem.style.display).to.equal('inline');
        });

        it('should set cachedEls.meridiem.style.display to none when isMilitaryFormat is true', function () {
            isMilitaryFormatStub.onFirstCall().returns(true);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be['true'];
            expect(picker.cachedEls.meridiem.style.display).to.equal('none');
        });

        it('should set cachedEls.meridiem.style.display to block when isMilitaryFormat is false', function () {
            isMilitaryFormatStub.onFirstCall().returns(false);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be['true'];
            expect(picker.cachedEls.meridiem.style.display).to.equal('block');
        });

        it('should set cachedEls.overlay.style.display to block', function () {
            picker.show();

            expect(picker.cachedEls.overlay.style.display).to.equal('block');
        });
    });

    describe('#showEvent', function () {
        it('should assign event.target to inputEl call property', function () {
            var event = {};

            event.target = document.createElement('input');
            event.target.mtpOptions = picker.defaultOptions;
            picker.showEvent(event);

            expect(picker.inputEl).to.equal(event.target);
        });

        it('should call #show method', function () {
            var showSpy = sinon.spy(picker, 'show');
            var event = {};

            event.target = document.createElement('input');
            event.target.mtpOptions = picker.defaultOptions;
            picker.showEvent(event);

            expect(showSpy.calledOnce).to.be['true'];
        });
    });

    describe('#hide', function () {
        beforeEach(function () {
            picker.inputEl = document.createElement('input');
            picker.inputEl.mtpOptions = picker.defaultOptions;
        });

        it('should set cachedEls.overlay.style.display to none', function () {
            picker.hide();

            expect(picker.cachedEls.overlay.style.display).to.equal('none');
        });

        it('should call dispatchEvevnt with blur event on inputEl', function () {
            var dispatchEventSpy = sinon.spy(picker.inputEl, 'dispatchEvent');

            picker.hide();

            expect(dispatchEventSpy.calledOnce).to.be['true'];
            expect(dispatchEventSpy.args[0][0].type).to.equal('blur');

            dispatchEventSpy.restore();
        });

        it('should call #resetState class method', function () {
            var resetStateSpy = sinon.spy(picker, 'resetState');

            picker.hide();

            expect(resetStateSpy.calledOnce).to.be['true'];

            resetStateSpy.restore();
        });
    });

    describe('#hideEvent', function () {
        var event = undefined,
            hideSpy = undefined,
            stopPropagationSpy = undefined;

        beforeEach(function () {
            event = {};
            event.stopPropagation = function () {};
            event.target = document.createElement('input');
            picker.inputEl = event.target;
            picker.inputEl.mtpOptions = picker.defaultOptions;
            hideSpy = sinon.spy(picker, 'hide');
            stopPropagationSpy = sinon.spy(event, 'stopPropagation');
        });

        afterEach(function () {
            hideSpy.restore();
            stopPropagationSpy.restore();
        });

        it('should call stopPropagation on event paramater', function () {
            picker.hideEvent(event);

            expect(stopPropagationSpy.calledOnce).to.be['true'];
        });

        it('should call #hide if event.target.classList contains mtp-overlay', function () {
            event.target.classList.add('mtp-overlay');
            picker.hideEvent(event);

            expect(hideSpy.calledOnce).to.be['true'];
        });

        it('should call #hide if event.target.classList contains mtp-actions__cancel', function () {
            event.target.classList.add('mtp-actions__cancel');
            picker.hideEvent(event);

            expect(hideSpy.calledOnce).to.be['true'];
        });

        it('should not call #hide if event.target.classList does not have allowed class', function () {
            picker.hideEvent(event);

            expect(hideSpy.calledOnce).to.be['false'];
        });
    });

    describe('#resetState', function () {
        var toggleHoursVisibleSpy = undefined,
            toggleMinutesVisibleSpy = undefined,
            isMilitaryFormatStub = undefined,
            hoursLiDispatchEventSpy = undefined,
            minutesLiDispatchEventSpy = undefined,
            militaryHoursLiDispatchEventSpy = undefined;

        beforeEach(function () {
            var cachedEls = picker.cachedEls;

            picker.currentStep = 2;
            picker.inputEl = document.createElement('input');
            picker.inputEl.mtpOptions = picker.defaultOptions;
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            toggleHoursVisibleSpy = sinon.spy(picker, 'toggleHoursVisible');
            toggleMinutesVisibleSpy = sinon.spy(picker, 'toggleMinutesVisible');
            hoursLiDispatchEventSpy = sinon.spy(cachedEls.clockHoursLi[9], 'dispatchEvent');
            minutesLiDispatchEventSpy = sinon.spy(cachedEls.clockMinutesLi[9], 'dispatchEvent');
            militaryHoursLiDispatchEventSpy = sinon.spy(cachedEls.clockMilitaryHoursLi[9], 'dispatchEvent');
        });

        afterEach(function () {
            isMilitaryFormatStub.restore();
            toggleHoursVisibleSpy.restore();
            toggleMinutesVisibleSpy.restore();
            hoursLiDispatchEventSpy.restore();
            minutesLiDispatchEventSpy.restore();
            militaryHoursLiDispatchEventSpy.restore();
        });

        it('should set currentStep to 0', function () {
            expect(picker.currentStep).to.equal(2);

            picker.resetState();

            expect(picker.currentStep).to.equal(0);
        });

        it('should call #toggleHoursVisible with parameters true, and result of #isMilitaryFormat', function () {
            isMilitaryFormatStub.onCall(0).returns(true);
            isMilitaryFormatStub.onCall(1).returns(false);

            picker.resetState();

            expect(isMilitaryFormatStub.calledOnce).to.be['true'];
            expect(toggleHoursVisibleSpy.calledWith(true, true)).to.be['true'];

            picker.resetState();

            expect(isMilitaryFormatStub.calledTwice).to.be['true'];
            expect(toggleHoursVisibleSpy.calledWith(true, false)).to.be['true'];
        });

        it('should call #toggleMinutesVisible', function () {
            picker.resetState();

            expect(toggleMinutesVisibleSpy.calledOnce).to.be['true'];
        });

        it('should call dispatchEvent with click event on cachedEls.clockHoursLi[9]', function () {
            picker.resetState();

            expect(hoursLiDispatchEventSpy.calledOnce).to.be['true'];
            expect(hoursLiDispatchEventSpy.args[0][0].type).to.equal('click');
        });

        it('should call dispatchEvent with click event on cachedEls.clockMinutesLi[9]', function () {
            picker.resetState();

            expect(minutesLiDispatchEventSpy.calledOnce).to.be['true'];
            expect(minutesLiDispatchEventSpy.args[0][0].type).to.equal('click');
        });

        it('should call dispatchEvent with click event on cachedEls.clockMilitaryHoursLi[9]', function () {
            picker.resetState();

            expect(militaryHoursLiDispatchEventSpy.calledOnce).to.be['true'];
            expect(militaryHoursLiDispatchEventSpy.args[0][0].type).to.equal('click');
        });
    });

    describe('#setDisplayTime', function () {
        var displayTimeEl = undefined;

        beforeEach(function () {
            picker.cachedEls.displayTime.innerHTML = '00:00';
            displayTimeEl = picker.cachedEls.displayTime;
        });

        it('should replace hour time with value given when index 0', function () {
            expect(displayTimeEl.innerHTML).to.equal('00:00');

            picker.setDisplayTime('15', 0);

            expect(displayTimeEl.innerHTML).to.equal('15:00');
        });

        it('should replace minute time with value given when index 1', function () {
            expect(displayTimeEl.innerHTML).to.equal('00:00');

            picker.setDisplayTime('15', 1);

            expect(displayTimeEl.innerHTML).to.equal('00:15');
        });

        it('should pad minute value with 0 if value is single diget', function () {
            expect(displayTimeEl.innerHTML).to.equal('00:00');

            picker.setDisplayTime('1', 1);

            expect(displayTimeEl.innerHTML).to.equal('00:01');
        });
    });

    describe('#rotateHand', function () {
        it('should set cachedEls.clockHand.style.transform to rotate((nodeIndex * 30 - 90)deg)', function () {
            var nodeIndex = 5;
            var rotateVal = 5 * 30 - 90;

            picker.rotateHand(nodeIndex);

            expect(picker.cachedEls.clockHand.style.transform).to.equal('rotate(' + rotateVal + 'deg)');
        });

        it('should have a default value of 9 for nodeIndex', function () {
            var rotateVal = 9 * 30 - 90;

            picker.rotateHand();

            expect(picker.cachedEls.clockHand.style.transform).to.equal('rotate(' + rotateVal + 'deg)');
        });
    });

    describe('#changeStep', function () {
        var isMilitaryFormatStub = undefined,
            toggleHoursVisibleSpy = undefined,
            toggleMinutesVisibleSpy = undefined,
            getActiveIndexStub = undefined,
            rotateHandSpy = undefined,
            timeSelectedStub = undefined,
            hideSpy = undefined;

        beforeEach(function () {
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            toggleHoursVisibleSpy = sinon.spy(picker, 'toggleHoursVisible');
            toggleMinutesVisibleSpy = sinon.spy(picker, 'toggleMinutesVisible');
            getActiveIndexStub = sinon.stub(picker, 'getActiveIndex');
            rotateHandSpy = sinon.spy(picker, 'rotateHand');
            timeSelectedStub = sinon.stub(picker, 'timeSelected', function () {});
            hideSpy = sinon.spy(picker, 'hide');
            picker.inputEl = document.createElement('input');
        });

        afterEach(function () {
            isMilitaryFormatStub.restore();
            toggleHoursVisibleSpy.restore();
            toggleMinutesVisibleSpy.restore();
            getActiveIndexStub.restore();
            rotateHandSpy.restore();
            timeSelectedStub.restore();
            hideSpy.restore();
        });

        it('should call #toggleHoursVisible(true) when step parameter is 0', function () {
            isMilitaryFormatStub.onFirstCall().returns(false);
            getActiveIndexStub.onFirstCall().returns(1);

            picker.changeStep(0);

            expect(toggleHoursVisibleSpy.calledOnce).to.be['true'];
            expect(toggleHoursVisibleSpy.calledWith(true, false)).to.be['true'];
        });

        it('should call #getActiveIndex of cachedEls.clockHoursLi\n           when isMilitaryFormat is false when step is parameter 0', function () {
            isMilitaryFormatStub.onFirstCall().returns(false);
            getActiveIndexStub.onFirstCall().returns(1);

            picker.changeStep(0);

            expect(isMilitaryFormatStub.calledOnce).to.be['true'];
            expect(getActiveIndexStub.calledOnce).to.be['true'];
            expect(getActiveIndexStub.calledWith(picker.cachedEls.clockHoursLi)).to.be['true'];
            expect(rotateHandSpy.calledOnce).to.be['true'];
            expect(rotateHandSpy.calledWith(1)).to.be['true'];
        });

        it('should call #getActiveIndex with cachedEls.clockMilitaryHoursLi\n           when isMilitaryFormat is true when step is parameter 0', function () {
            isMilitaryFormatStub.onFirstCall().returns(true);
            getActiveIndexStub.onFirstCall().returns(1);

            picker.changeStep(0);

            expect(isMilitaryFormatStub.calledOnce).to.be['true'];
            expect(getActiveIndexStub.calledOnce).to.be['true'];
            expect(getActiveIndexStub.calledWith(picker.cachedEls.clockMilitaryHoursLi)).to.be['true'];
            expect(rotateHandSpy.calledOnce).to.be['true'];
            expect(rotateHandSpy.calledWith(1)).to.be['true'];
        });

        it('should call #toggleMinutesVisible(true) when step parameter is 1', function () {
            getActiveIndexStub.onFirstCall().returns(1);

            picker.changeStep(1);

            expect(toggleMinutesVisibleSpy.calledOnce).to.be['true'];
            expect(toggleMinutesVisibleSpy.calledWith(true)).to.be['true'];
        });

        it('should call #getActiveIndex with cachedEls.clockMinutesLi when step parameter is 1', function () {
            getActiveIndexStub.onFirstCall().returns(1);

            picker.changeStep(1);

            expect(getActiveIndexStub.calledOnce).to.be['true'];
            expect(getActiveIndexStub.calledWith(picker.cachedEls.clockMinutesLi)).to.be['true'];
        });

        it('should call #timeSelected and #hide when step parameter is 2', function () {
            picker.changeStep(2);

            expect(timeSelectedStub.calledOnce).to.be['true'];
            expect(hideSpy.calledOnce).to.be['true'];
        });

        it('should set currentStep to the step paramater passed', function () {
            expect(picker.currentStep).to.equal(0);
            picker.changeStep(1);
            expect(picker.currentStep).to.equal(1);
        });
    });

    describe('#toggleHoursVisible', function () {
        var clockHours = undefined,
            clockMilitaryHours = undefined;

        beforeEach(function () {
            clockHours = picker.cachedEls.clockHours;
            clockMilitaryHours = picker.cachedEls.clockMilitaryHours;
        });

        it('should set cachedEls.clockHours.style.display to none when\n           isVisible is false', function () {
            picker.toggleHoursVisible(false);

            expect(clockHours.style.display).to.equal('none');
        });

        it('should set cachedEls.clockHours.style.display to none when\n           isVisible is true and isMilitaryFormat is true', function () {
            picker.toggleHoursVisible(true, true);

            expect(clockHours.style.display).to.equal('none');
        });

        it('should set cachedEls.clockHours.style.display to block when\n           isVisible is true and isMilitaryFormat is false', function () {
            picker.toggleHoursVisible(true, false);

            expect(clockHours.style.display).to.equal('block');
        });

        it('should set cachedEls.clockMilitaryHours.style.display to none when\n           isVisible is true and isMilitaryFormat is false', function () {
            picker.toggleHoursVisible(true, false);

            expect(clockMilitaryHours.style.display).to.equal('none');
        });

        it('should set cachedEls.clockMilitaryHours.style.display to none when\n           isVisible is false', function () {
            picker.toggleHoursVisible(false);

            expect(clockMilitaryHours.style.display).to.equal('none');
        });

        it('should set cachedEls.clockMilitaryHours.style.display to block when\n           isVisible is true and isMilitaryFormat is true', function () {
            picker.toggleHoursVisible(true, true);

            expect(clockMilitaryHours.style.display).to.equal('block');
        });
    });

    describe('#toggleMinutesVisible', function () {
        var clockMinutes = undefined,
            buttonBack = undefined;

        beforeEach(function () {
            clockMinutes = picker.cachedEls.clockMinutes;
            buttonBack = picker.cachedEls.buttonBack;
        });

        it('should set cachedEls.clockMinutes.style.display to block when isVisible is true', function () {
            picker.toggleMinutesVisible(true);

            expect(clockMinutes.style.display).to.equal('block');
        });

        it('should set cachedEls.clockMinutes.style.display to none when isVisible is false', function () {
            picker.toggleMinutesVisible(false);

            expect(clockMinutes.style.display).to.equal('none');
        });

        it('should set cachedEls.buttonBack.style.display to inline-block when isVisible is true', function () {
            picker.toggleMinutesVisible(true);

            expect(buttonBack.style.display).to.equal('inline-block');
        });

        it('should set cachedEls.buttonBack.style.display to none when isVisible is false', function () {
            picker.toggleMinutesVisible(false);

            expect(buttonBack.style.display).to.equal('none');
        });
    });

    describe('#getActiveIndex', function () {
        it('should return the index of element with .mtp-clock--active', function () {
            var expectedIndex = 6;
            var clockHoursLi = picker.cachedEls.clockHoursLi;

            clockHoursLi[expectedIndex].classList.add('mtp-clock--active');

            expect(picker.getActiveIndex(clockHoursLi)).to.equal(expectedIndex);
        });

        it('should subtract 12 from the element with class .mtp-clock--active if greater than 11', function () {
            var activeIndex = 18;
            var expectedIndex = 6;
            var clockMilitaryHoursLi = picker.cachedEls.clockMilitaryHoursLi;

            clockMilitaryHoursLi[activeIndex].classList.add('mtp-clock--active');

            expect(picker.getActiveIndex(clockMilitaryHoursLi)).to.equal(expectedIndex);
        });
    });

    describe('#timeSelected', function () {
        var isMilitaryFormatStub = undefined,
            dispatchEventSpy = undefined;

        beforeEach(function () {
            picker.inputEl = document.createElement('input');
            picker.cachedEls.displayTime.innerHTML = '11:00';
            picker.cachedEls.displayMeridiem.innerHTML = 'pm';
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            dispatchEventSpy = sinon.spy(picker.inputEl, 'dispatchEvent');
        });

        afterEach(function () {
            isMilitaryFormatStub.restore();
            dispatchEventSpy.restore();
        });

        it('should set displayTime.innerHTML and displayMeridiem.innerHTML to \n           inputEl.value if isMilitaryFormat is true', function () {
            isMilitaryFormatStub.onCall(0).returns(false);

            picker.timeSelected();
            expect(picker.inputEl.value).to.equal('11:00 pm');
        });

        it('should set displayTime.innerHTML to inputEl.value if isMilitaryFormat is true', function () {
            isMilitaryFormatStub.onCall(0).returns(true);

            picker.timeSelected();
            expect(picker.inputEl.value).to.equal('11:00');
        });

        it('should call dispatch input event on inputEl', function () {
            picker.timeSelected();

            expect(dispatchEventSpy.calledOnce).to.be['true'];
            expect(dispatchEventSpy.args[0][0].type).to.equal('input');
        });
    });

    describe('#setActiveEl', function () {
        it('should remove class .mtp-clock--active from element in containerEl parameter', function () {
            var clockHoursLi = picker.cachedEls.clockHoursLi;
            var removeSpy = sinon.spy(clockHoursLi[2].classList, 'remove');
            var activeEl = clockHoursLi[1];

            clockHoursLi[2].classList.add('mtp-clock--active');
            picker.setActiveEl(picker.cachedEls.clockHours, activeEl);

            expect(removeSpy.calledOnce).to.be['true'];
            expect(removeSpy.calledWith('mtp-clock--active')).to.be['true'];

            removeSpy.restore();
        });

        it('should add class .mtp-clock--active to activeEl parameter', function () {
            var activeEl = picker.cachedEls.clockHoursLi[1];
            var addSpy = sinon.spy(activeEl.classList, 'add');

            picker.cachedEls.clockHoursLi[2].classList.add('mtp-clock--active');
            picker.setActiveEl(picker.cachedEls.clockHours, activeEl);

            expect(addSpy.calledOnce).to.be['true'];
            expect(addSpy.calledWith('mtp-clock--active')).to.be['true'];

            addSpy.restore();
        });
    });

    describe('#meridiemSelectEvent', function () {
        it('should find child element in cachedEls.meridiem with class .mtp-clock--active and remove class', function () {
            var meridiemSpans = picker.cachedEls.meridiemSpans;
            var removeSpy = sinon.spy(meridiemSpans[0].classList, 'remove');
            var event = { target: meridiemSpans[1] };

            meridiemSpans[0].classList.add('mtp-clock--active');
            picker.meridiemSelectEvent(event);

            expect(removeSpy.calledOnce).to.be['true'];
            expect(removeSpy.calledWith('mtp-clock--active')).to.be['true'];

            removeSpy.restore();
        });

        it('should add class .mtp-clock--active to event.target element', function () {
            var meridiemSpans = picker.cachedEls.meridiemSpans;
            var addSpy = sinon.spy(meridiemSpans[1].classList, 'add');
            var event = { target: meridiemSpans[1] };

            meridiemSpans[0].classList.add('mtp-clock--active');
            picker.meridiemSelectEvent(event);

            expect(addSpy.calledOnce).to.be['true'];
            expect(addSpy.calledWith('mtp-clock--active')).to.be['true'];

            addSpy.restore();
        });

        it('should set cachedEls.displayMeridiem.innerHTML to event.target.innerHTML', function () {
            var meridiemSpans = picker.cachedEls.meridiemSpans;
            var event = { target: meridiemSpans[1] };

            meridiemSpans[1].innerHTML = 'am';
            meridiemSpans[0].classList.add('mtp-clock--active');
            picker.meridiemSelectEvent(event);

            expect(picker.cachedEls.displayMeridiem.innerHTML).to.equal('am');
        });

        it('should do nothing if current active elemtn is equal node of event.target', function () {
            picker.cachedEls.meridiemSpans[0].classList.add('mtp-clock--active');

            var activeElement = picker.cachedEls.meridiemSpans[0];
            var event = { target: activeElement };
            var addSpy = sinon.spy(activeElement.classList, 'add');
            var removeSpy = sinon.spy(activeElement.classList, 'remove');

            picker.meridiemSelectEvent(event);

            expect(addSpy.calledOnce).to.be['false'];
            expect(removeSpy.calledOnce).to.be['false'];

            addSpy.restore();
            removeSpy.restore();
        });
    });

    describe('#timeSelectEvent', function () {
        var event = undefined,
            stopPropagationSpy = undefined,
            setActiveElSpy = undefined,
            setDisplayTimeSpy = undefined,
            rotateHandSpy = undefined,
            getActiveIndexSpy = undefined,
            containerEl = undefined,
            listEls = undefined,
            displayIndex = undefined;

        beforeEach(function () {
            containerEl = picker.cachedEls.clockHours;
            listEls = picker.cachedEls.clockHoursLi;
            displayIndex = 0;
            event = {
                innerHTML: 'value',
                target: document.createElement('li'),
                stopPropagation: function stopPropagation() {}
            };

            listEls[0].classList.add('mtp-clock--active');
            stopPropagationSpy = sinon.spy(event, 'stopPropagation');
            setActiveElSpy = sinon.spy(picker, 'setActiveEl');
            setDisplayTimeSpy = sinon.spy(picker, 'setDisplayTime');
            rotateHandSpy = sinon.spy(picker, 'rotateHand');
            getActiveIndexSpy = sinon.spy(picker, 'getActiveIndex');
        });

        afterEach(function () {
            stopPropagationSpy.restore();
            setActiveElSpy.restore();
            setDisplayTimeSpy.restore();
            rotateHandSpy.restore();
            getActiveIndexSpy.restore();
        });

        it('should call stopPropagation on passed event parameter', function () {
            picker.timeSelectEvent(event, containerEl, listEls, displayIndex);

            expect(stopPropagationSpy.calledOnce).to.be['true'];
        });

        it('should call setActiveEl with containerEl and event.target parameters', function () {
            picker.timeSelectEvent(event, containerEl, listEls, displayIndex);

            expect(setActiveElSpy.calledOnce).to.be['true'];
            expect(setActiveElSpy.calledWith(containerEl, event.target)).to.be['true'];
        });

        it('should call setDisplayTime with event.target.innerHTML and displayIndex parameters', function () {
            picker.timeSelectEvent(event, containerEl, listEls, displayIndex);

            expect(setDisplayTimeSpy.calledOnce).to.be['true'];
            expect(setDisplayTimeSpy.calledWith(event.target.innerHTML, displayIndex)).to.be['true'];
        });

        it('should call rotateHand with the result of getActiveIndex', function () {
            picker.timeSelectEvent(event, containerEl, listEls, displayIndex);

            expect(getActiveIndexSpy.calledOnce).to.be['true'];
            expect(getActiveIndexSpy.calledWith(listEls)).to.be['true'];
            expect(getActiveIndexSpy.returnValues[0]).to.equal(0);
            expect(rotateHandSpy.calledOnce).to.be['true'];
            expect(rotateHandSpy.calledWith(0)).to.be['true'];
        });
    });
});

},{"../../src/js/assign":2,"../../src/js/timepicker":3}]},{},[4]);
