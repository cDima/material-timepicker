(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "<div class=\"mtp-overlay\" style=\"display:none\"><div class=\"mtp-wrapper\"><div class=\"mtp-display\"> <span class=\"mtp-display__time\">12:00</span> <span class=\"mtp-display__meridiem\">am</span></div><div class=\"mtp-picker\"><div class=\"mtp-meridiem\"> <span class=\"mtp-clock--active\">am</span> <span>pm</span></div><div class=\"mtp-clock\"><div class=\"mtp-clock__center\"></div><div class=\"mtp-clock__hand\"></div><ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__hours\" style=\"display:none\"><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li class=\"mtp-clock--active\">12</li><li>1</li><li>2</li></ul><ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__minutes\" style=\"display:none\"><li>15</li><li>20</li><li>25</li><li>30</li><li>35</li><li>40</li><li>45</li><li>50</li><li>55</li><li class=\"mtp-clock--active\">0</li><li>5</li><li>10</li></ul><ul class=\"mtp-clock__time mtp-clock__hours-military\" style=\"display:none\"><div class=\"mtp-clock__inner\"><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li class=\"mtp-clock--active\">00</li><li>1</li><li>2</li></div><div class=\"mtp-clock__outer\"><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>12</li><li>13</li><li>14</li></div></ul></div><div class=\"mtp-actions\"> <button type=\"button\" class=\"mtp-actions__button mtp-actions__cancel\">Cancel</button> <button type=\"button\" class=\"mtp-actions__button mtp-actions__back\" style=\"display:none\">Back</button> <button type=\"button\" class=\"mtp-actions__button mtp-actions__ok\">OK</button></div></div></div></div>";

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

},{"../html/timepicker.html":1,"./assign":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaHRtbC90aW1lcGlja2VyLmh0bWwiLCIvdmFyL3d3dy9qcy1tb2R1bGVzL3RpbWVwaWNrZXIvc3JjL2pzL2Fzc2lnbi5qcyIsIi92YXIvd3d3L2pzLW1vZHVsZXMvdGltZXBpY2tlci9zcmMvanMvdGltZXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTUEsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFjO0FBQ2hDLFFBQUksTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQzNDLGNBQU0sSUFBSSxTQUFTLENBQUMseUNBQXlDLENBQUMsQ0FBQztLQUNsRTs7QUFFRCxRQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7O3NDQUxILE9BQU87QUFBUCxlQUFPOzs7QUFPOUIsU0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtBQUM5QyxZQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRTlCLFlBQUksVUFBVSxLQUFLLFdBQVcsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO0FBQ25ELHFCQUFTO1NBQ1o7O0FBRUQsa0JBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRWhDLFlBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRTFDLGFBQUssSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsR0FBRyxHQUFHLEVBQUUsU0FBUyxJQUFJLENBQUMsRUFBRTtBQUM3RSxnQkFBTSxPQUFPLEdBQUcs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QyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLGdCQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDdkQsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2pEOzs7Ozs7Ozs7ZUFPZSw0QkFBRztBQUNmLG1CQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUM7U0FDckU7Ozs7Ozs7OztlQU9XLHdCQUFHO0FBQ1gsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3RFOzs7Ozs7Ozs7ZUFPYywyQkFBRztBQUNkLG1CQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRTs7O1dBeFlDLFVBQVU7OztBQTJZaEIsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7cUJBQ2hCLFVBQVUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm10cC1vdmVybGF5XFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lXFxcIj48ZGl2IGNsYXNzPVxcXCJtdHAtd3JhcHBlclxcXCI+PGRpdiBjbGFzcz1cXFwibXRwLWRpc3BsYXlcXFwiPiA8c3BhbiBjbGFzcz1cXFwibXRwLWRpc3BsYXlfX3RpbWVcXFwiPjEyOjAwPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibXRwLWRpc3BsYXlfX21lcmlkaWVtXFxcIj5hbTwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJtdHAtcGlja2VyXFxcIj48ZGl2IGNsYXNzPVxcXCJtdHAtbWVyaWRpZW1cXFwiPiA8c3BhbiBjbGFzcz1cXFwibXRwLWNsb2NrLS1hY3RpdmVcXFwiPmFtPC9zcGFuPiA8c3Bhbj5wbTwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJtdHAtY2xvY2tcXFwiPjxkaXYgY2xhc3M9XFxcIm10cC1jbG9ja19fY2VudGVyXFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJtdHAtY2xvY2tfX2hhbmRcXFwiPjwvZGl2Pjx1bCBjbGFzcz1cXFwibXRwLWNsb2NrX190aW1lIG10cC1jbG9ja19fb3V0ZXIgbXRwLWNsb2NrX19ob3Vyc1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZVxcXCI+PGxpPjM8L2xpPjxsaT40PC9saT48bGk+NTwvbGk+PGxpPjY8L2xpPjxsaT43PC9saT48bGk+ODwvbGk+PGxpPjk8L2xpPjxsaT4xMDwvbGk+PGxpPjExPC9saT48bGkgY2xhc3M9XFxcIm10cC1jbG9jay0tYWN0aXZlXFxcIj4xMjwvbGk+PGxpPjE8L2xpPjxsaT4yPC9saT48L3VsPjx1bCBjbGFzcz1cXFwibXRwLWNsb2NrX190aW1lIG10cC1jbG9ja19fb3V0ZXIgbXRwLWNsb2NrX19taW51dGVzXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lXFxcIj48bGk+MTU8L2xpPjxsaT4yMDwvbGk+PGxpPjI1PC9saT48bGk+MzA8L2xpPjxsaT4zNTwvbGk+PGxpPjQwPC9saT48bGk+NDU8L2xpPjxsaT41MDwvbGk+PGxpPjU1PC9saT48bGkgY2xhc3M9XFxcIm10cC1jbG9jay0tYWN0aXZlXFxcIj4wPC9saT48bGk+NTwvbGk+PGxpPjEwPC9saT48L3VsPjx1bCBjbGFzcz1cXFwibXRwLWNsb2NrX190aW1lIG10cC1jbG9ja19faG91cnMtbWlsaXRhcnlcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmVcXFwiPjxkaXYgY2xhc3M9XFxcIm10cC1jbG9ja19faW5uZXJcXFwiPjxsaT4zPC9saT48bGk+NDwvbGk+PGxpPjU8L2xpPjxsaT42PC9saT48bGk+NzwvbGk+PGxpPjg8L2xpPjxsaT45PC9saT48bGk+MTA8L2xpPjxsaT4xMTwvbGk+PGxpIGNsYXNzPVxcXCJtdHAtY2xvY2stLWFjdGl2ZVxcXCI+MDA8L2xpPjxsaT4xPC9saT48bGk+MjwvbGk+PC9kaXY+PGRpdiBjbGFzcz1cXFwibXRwLWNsb2NrX19vdXRlclxcXCI+PGxpPjE1PC9saT48bGk+MTY8L2xpPjxsaT4xNzwvbGk+PGxpPjE4PC9saT48bGk+MTk8L2xpPjxsaT4yMDwvbGk+PGxpPjIxPC9saT48bGk+MjI8L2xpPjxsaT4yMzwvbGk+PGxpPjEyPC9saT48bGk+MTM8L2xpPjxsaT4xNDwvbGk+PC9kaXY+PC91bD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJtdHAtYWN0aW9uc1xcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibXRwLWFjdGlvbnNfX2J1dHRvbiBtdHAtYWN0aW9uc19fY2FuY2VsXFxcIj5DYW5jZWw8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJtdHAtYWN0aW9uc19fYnV0dG9uIG10cC1hY3Rpb25zX19iYWNrXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lXFxcIj5CYWNrPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibXRwLWFjdGlvbnNfX2J1dHRvbiBtdHAtYWN0aW9uc19fb2tcXFwiPk9LPC9idXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+XCI7XG4iLCIvKipcbiAqIE9iamVjdC5hc3NpZ24gcG9seWZpbGxcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IFRhcmdldCBvYmplY3QgdG8gbWVyZ2UgcHJvcGVydGllcyBvbnRvXG4gKiBAcGFyYW0gey4uLm9iamVjdH0gc291cmNlcyAgU291cmNlIG9iamVjdCB0byBtZXJnZSBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm4ge29iamVjdH0gVGFyZ2V0IG9iamVjdCB3aXRoIG1lcmdlZCBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgICBpZiAodGFyZ2V0ID09PSAndW5kZWZpbmVkJyB8fCB0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgdG8gPSBPYmplY3QodGFyZ2V0KTtcblxuICAgIGZvciAobGV0IGluYyA9IDA7IGluYyA8IHNvdXJjZXMubGVuZ3RoOyBpbmMgKz0gMSkge1xuICAgICAgICBsZXQgbmV4dFNvdXJjZSA9IHNvdXJjZXNbaW5jXTtcblxuICAgICAgICBpZiAobmV4dFNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmV4dFNvdXJjZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0U291cmNlID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgICAgIGNvbnN0IGtleXNBcnJheSA9IE9iamVjdC5rZXlzKG5leHRTb3VyY2UpO1xuXG4gICAgICAgIGZvciAobGV0IG5leHRJbmRleCA9IDAsIGxlbiA9IGtleXNBcnJheS5sZW5ndGg7IG5leHRJbmRleCA8IGxlbjsgbmV4dEluZGV4ICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5leHRTb3VyY2UsIG5leHRLZXkpO1xuXG4gICAgICAgICAgICBpZiAoZGVzYyAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3NpZ247XG4iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi4vaHRtbC90aW1lcGlja2VyLmh0bWwnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICcuL2Fzc2lnbic7XG5cbmNsYXNzIFRpbWVQaWNrZXIge1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBuZXcgVGltZVBpY2tlciBpbnN0YW5jZVxuICAgICAqXG4gICAgICogQHJldHVybiB7VGltZVBpY2tlcn0gTmV3IFRpbWVQaWNrZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLnNldHVwVGVtcGxhdGUoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7fTtcbiAgICAgICAgLy8gYHN0YW5kYXJkYCBvciBgbWlsaXRhcnlgIGRpc3BsYXkgaG91cnNcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucy50aW1lRm9ybWF0ID0gJ3N0YW5kYXJkJztcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMgPSB7fTtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1vdmVybGF5JylbMF07XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLndyYXBwZXIgPSB0aGlzLmNhY2hlZEVscy5vdmVybGF5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC13cmFwcGVyJylbMF07XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLnBpY2tlciA9IHRoaXMuY2FjaGVkRWxzLndyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXRwLXBpY2tlcicpWzBdO1xuICAgICAgICB0aGlzLmNhY2hlZEVscy5tZXJpZGllbSA9IHRoaXMuY2FjaGVkRWxzLndyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXRwLW1lcmlkaWVtJylbMF07XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLm1lcmlkaWVtU3BhbnMgPSB0aGlzLmNhY2hlZEVscy5tZXJpZGllbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3BhbicpO1xuICAgICAgICB0aGlzLmNhY2hlZEVscy5kaXNwbGF5VGltZSA9IHRoaXMuY2FjaGVkRWxzLndyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXRwLWRpc3BsYXlfX3RpbWUnKVswXTtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheU1lcmlkaWVtID0gdGhpcy5jYWNoZWRFbHMud3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtZGlzcGxheV9fbWVyaWRpZW0nKVswXTtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuYnV0dG9uQ2FuY2VsID0gdGhpcy5jYWNoZWRFbHMucGlja2VyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1hY3Rpb25zX19jYW5jZWwnKVswXTtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuYnV0dG9uQmFjayA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtYWN0aW9uc19fYmFjaycpWzBdO1xuICAgICAgICB0aGlzLmNhY2hlZEVscy5idXR0b25PayA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtYWN0aW9uc19fb2snKVswXTtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3VycyA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtY2xvY2tfX2hvdXJzJylbMF07XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlcyA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtY2xvY2tfX21pbnV0ZXMnKVswXTtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzID0gdGhpcy5jYWNoZWRFbHMucGlja2VyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1jbG9ja19faG91cnMtbWlsaXRhcnknKVswXTtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIYW5kID0gdGhpcy5jYWNoZWRFbHMucGlja2VyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1jbG9ja19faGFuZCcpWzBdO1xuICAgICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzTGkgPSB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xuICAgICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXNMaSA9IHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzTGkgPSB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XG5cbiAgICAgICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGV2ZW50IHRvIHRoZSBpbnB1dCBlbGVtZW50IHRvIG9wZW4gd2hlbiBgZm9jdXNgIGV2ZW50IGlzIHRyaWdnZXJlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8SFRNTEVsZW1lbnR9IGlucHV0RWwgU2VsZWN0b3IgZWxlbWVudCB0byBiZSBxdWVyaWVkIG9yIGV4aXN0aW5nIEhUTUxFbGVtZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9ucyB0byBtZXJnZWQgd2l0aCBkZWZhdWx0cyBhbmQgc2V0IHRvIGlucHV0IGVsZW1lbnQgb2JqZWN0XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBiaW5kSW5wdXQoaW5wdXRFbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpbnB1dEVsIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dEVsKTtcblxuICAgICAgICBlbGVtZW50Lm10cE9wdGlvbnMgPSBhc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZXZlbnQgPT4gdGhpcy5zaG93RXZlbnQoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIHBpY2tlciB3aXRoIHRoZSBpbnB1dCBwcm92aWRlZCBpbiBjb250ZXh0IHdpdGhvdXQgYmluZGluZyBldmVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEhUTUxFbGVtZW50fSBpbnB1dEVsIFNlbGVjdG9yIGVsZW1lbnQgdG8gYmUgcXVlcmllZCBvciBleGlzdGluZyBIVE1MRWxlbWVudFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgdG8gbWVyZ2VkIHdpdGggZGVmYXVsdHMgYW5kIHNldCB0byBpbnB1dCBlbGVtZW50IG9iamVjdFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgb3Blbk9uSW5wdXQoaW5wdXRFbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbCA9IGlucHV0RWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGlucHV0RWwgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlucHV0RWwpO1xuICAgICAgICB0aGlzLmlucHV0RWwubXRwT3B0aW9ucyA9IGFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIHRoZSB0ZW1wbGF0ZSBpbiBET00gaWYgbm90IGFscmVhZHlcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0dXBUZW1wbGF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVGVtcGxhdGVJbkRPTSgpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBldmVudHMgb24gcGlja2VyIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldEV2ZW50cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1NldEV2ZW50cygpKSB7XG4gICAgICAgICAgICAvLyBjbG9zZVxuICAgICAgICAgICAgdGhpcy5jYWNoZWRFbHMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMuaGlkZUV2ZW50KGV2ZW50KSk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlZEVscy5idXR0b25DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLmhpZGVFdmVudChldmVudCkpO1xuXG4gICAgICAgICAgICAvLyBuZXh0L3ByZXYgc3RlcCBhY3Rpb25zXG4gICAgICAgICAgICB0aGlzLmNhY2hlZEVscy5idXR0b25Pay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2hhbmdlU3RlcCh0aGlzLmN1cnJlbnRTdGVwICsgMSkpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZWRFbHMuYnV0dG9uQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2hhbmdlU3RlcCgwKSk7XG5cbiAgICAgICAgICAgIC8vIG1lcmlkaWVtIHNlbGVjdCBldmVudHNcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbCh0aGlzLmNhY2hlZEVscy5tZXJpZGllbVNwYW5zLCBzcGFuID0+IHtcbiAgICAgICAgICAgICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5tZXJpZGllbVNlbGVjdEV2ZW50KGV2ZW50KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gdGltZSBzZWxlY3QgZXZlbnRzXG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGhpcy5jYWNoZWRFbHMuY2xvY2tIb3Vyc0xpLCBob3VyID0+IHtcbiAgICAgICAgICAgICAgICBob3VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVTZWxlY3RFdmVudChldmVudCwgdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3VycywgdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3Vyc0xpLCAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlc0xpLCBtaW51dGUgPT4ge1xuICAgICAgICAgICAgICAgIG1pbnV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lU2VsZWN0RXZlbnQoZXZlbnQsIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlcywgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaW51dGVzTGksIDEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzTGksIGhvdXIgPT4ge1xuICAgICAgICAgICAgICAgIGhvdXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZVNlbGVjdEV2ZW50KGV2ZW50LCB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnMsIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWlsaXRhcnlIb3Vyc0xpLCAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ210cC1ldmVudHMtc2V0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHRoZSBwaWNrZXIgaW4gdGhlIERPTVxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzaG93KCkge1xuICAgICAgICBjb25zdCBpc01pbGl0YXJ5Rm9ybWF0ID0gdGhpcy5pc01pbGl0YXJ5Rm9ybWF0KCk7XG5cbiAgICAgICAgLy8gYmx1ciBpbnB1dCB0byBwcmV2ZW50IG9uc2NyZWVuIGtleWJvYXJkIGZyb20gZGlzcGxheWluZ1xuICAgICAgICB0aGlzLmlucHV0RWwuYmx1cigpO1xuICAgICAgICB0aGlzLnRvZ2dsZUhvdXJzVmlzaWJsZSh0cnVlLCBpc01pbGl0YXJ5Rm9ybWF0KTtcbiAgICAgICAgdGhpcy50b2dnbGVNaW51dGVzVmlzaWJsZSgpO1xuICAgICAgICB0aGlzLnNldERpc3BsYXlUaW1lKGlzTWlsaXRhcnlGb3JtYXQgPyAnMDAnIDogJzEyJywgMCk7XG4gICAgICAgIHRoaXMuc2V0RGlzcGxheVRpbWUoJzAnLCAxKTtcblxuICAgICAgICB0aGlzLmNhY2hlZEVscy5kaXNwbGF5TWVyaWRpZW0uc3R5bGUuZGlzcGxheSA9IGlzTWlsaXRhcnlGb3JtYXQgPyAnbm9uZScgOiAnaW5saW5lJztcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMubWVyaWRpZW0uc3R5bGUuZGlzcGxheSA9IGlzTWlsaXRhcnlGb3JtYXQgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgICB0aGlzLmNhY2hlZEVscy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZSBmb3IgaW5wdXQgZm9jdXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IG9iamVjdCBwYXNzZWQgZnJvbSBsaXN0ZW5lclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2hvd0V2ZW50KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcGlja2VyIGluIHRoZSBET01cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmlucHV0RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2JsdXInKSk7XG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgdGhlIHBpY2tlciBlbGVtZW50IG9uIHRoZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gZXZlbnQgbGlzdGVuZXIgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGhpZGVFdmVudChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBvbmx5IGFsbG93IGV2ZW50IGJhc2VkIGNsb3NlIGlmIGV2ZW50LnRhcmdldCBjb250YWlucyBvbmUgb2YgdGhlc2UgY2xhc3Nlc1xuICAgICAgICAvLyBoYWNrIHRvIHByZXZlbnQgb3ZlcmxheSBjbG9zZSBldmVudCBmcm9tIHRyaWdnZXJpbmcgb24gYWxsIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGFsbG93ZWRDbGFzc2VzID0gWydtdHAtb3ZlcmxheScsICdtdHAtYWN0aW9uc19fY2FuY2VsJ107XG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3Q7XG5cbiAgICAgICAgYWxsb3dlZENsYXNzZXMuc29tZShhbGxvd2VkQ2xhc3MgPT4ge1xuICAgICAgICAgICAgaWYgKGNsYXNzTGlzdC5jb250YWlucyhhbGxvd2VkQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHBpY2tlciBzdGF0ZSB0byBkZWZhdWx0c1xuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICByZXNldFN0YXRlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgdGhpcy50b2dnbGVIb3Vyc1Zpc2libGUodHJ1ZSwgdGhpcy5pc01pbGl0YXJ5Rm9ybWF0KCkpO1xuICAgICAgICB0aGlzLnRvZ2dsZU1pbnV0ZXNWaXNpYmxlKCk7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnNMaVs5XS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlc0xpWzldLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzTGlbOV0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGlzcGxheWVkIHRpbWUsIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBmaWxsIGlucHV0IHZhbHVlIG9uIGNvbXBsZXRldGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIE5ld2x5IHNlbGVjdGVkIHRpbWUgdmFsdWVcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IGluZGV4IEluZGV4IG9mIHZhbHVlIHRvIHJlcGxhY2UgWzAgPSBob3VycywgMSA9IG1pbnV0ZXNdXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXREaXNwbGF5VGltZSh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgdGltZSA9IHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlUaW1lLmlubmVySFRNTC5zcGxpdCgnOicpO1xuXG4gICAgICAgIC8vIHByZXBlbmQgd2l0aCB6ZXJvIGlmIHNlbGVjdGluZyBtaW51dGVzIGFuZCB2YWx1ZSBpcyBzaW5nbGUgZGlnaXRcbiAgICAgICAgdGltZVtpbmRleF0gPSBpbmRleCA9PT0gMSAmJiB2YWx1ZSA8IDEwID8gYDAke3ZhbHVlfWAgOiB2YWx1ZTtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheVRpbWUuaW5uZXJIVE1MID0gdGltZS5qb2luKCc6Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUm90YXRlIHRoZSBoYW5kIGVsZW1lbnQgdG8gc2VsZWN0ZWQgdGltZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBub2RlSW5kZXggSW5kZXggb2YgYWN0aXZlIGVsZW1lbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHJvdGF0ZUhhbmQobm9kZUluZGV4ID0gOSkge1xuICAgICAgICAvLyByb3RhdGlvbiBpcyBkb25lIGluIGluY3JlbWVudHMgb2YgMzBkZWdcbiAgICAgICAgLy8gbm9kZUluZGV4IDAgaXMgMyBlbGVtZW50cyBiZWhpbmQgMGRlZyBzbyBzdWJ0cmFjdCA5MCBmcm9tIHRoZSBzdW1cbiAgICAgICAgY29uc3Qgcm90YXRlRGVnID0gbm9kZUluZGV4ICogMzAgLSA5MDtcbiAgICAgICAgY29uc3Qgc3R5bGVWYWwgPSBgcm90YXRlKCR7cm90YXRlRGVnfWRlZylgO1xuXG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBzdHlsZVZhbDtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIYW5kLnN0eWxlWyctd2Via2l0LXRyYW5zZm9ybSddID0gc3R5bGVWYWw7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZC5zdHlsZVsnLW1zLXRyYW5zZm9ybSddID0gc3R5bGVWYWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRvIHRoZSBzcGVjaWZpZWQgc3RlcFxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBzdGVwIEluZGV4IG9mIHN0ZXAgdG8gY2hhbmdlIHRvXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBjaGFuZ2VTdGVwKHN0ZXApIHtcbiAgICAgICAgY29uc3QgaXNNaWxpdGFyeUZvcm1hdCA9IHRoaXMuaXNNaWxpdGFyeUZvcm1hdCgpO1xuICAgICAgICBjb25zdCBob3VyRWxzID0gaXNNaWxpdGFyeUZvcm1hdCA/IHRoaXMuY2FjaGVkRWxzLmNsb2NrTWlsaXRhcnlIb3Vyc0xpIDogdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3Vyc0xpO1xuICAgICAgICBjb25zdCBtaW51dGVFbHMgPSB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXNMaTtcbiAgICAgICAgY29uc3QgY2hhbmdlU3RlcEFjdGlvbiA9IFtcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUhvdXJzVmlzaWJsZSh0cnVlLCBpc01pbGl0YXJ5Rm9ybWF0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1pbnV0ZXNWaXNpYmxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVIYW5kKHRoaXMuZ2V0QWN0aXZlSW5kZXgoaG91ckVscykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUhvdXJzVmlzaWJsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTWludXRlc1Zpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVIYW5kKHRoaXMuZ2V0QWN0aXZlSW5kZXgobWludXRlRWxzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVNlbGVjdGVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBdW3N0ZXBdO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBzdGVwO1xuICAgICAgICBjaGFuZ2VTdGVwQWN0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGhvdXIgKGJvdGggbWlsaXRhcnkgYW5kIHN0YW5kYXJkKSBjbG9jayB2aXNpYmxpdHkgaW4gRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmlzaWJsZSBJcyBjbG9jayBmYWNlIHRvZ2dsZWQgdmlzaWJsZSBvciBoaWRkZW5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTWlsaXRhcnlGb3JtYXQgSXMgdXNpbmcgbWlsaXRhcnkgaG91ciBmb3JtYXRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRvZ2dsZUhvdXJzVmlzaWJsZShpc1Zpc2libGUgPSBmYWxzZSwgaXNNaWxpdGFyeUZvcm1hdCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnMuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSAmJiAhaXNNaWxpdGFyeUZvcm1hdCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWlsaXRhcnlIb3Vycy5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlICYmIGlzTWlsaXRhcnlGb3JtYXQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBtaW51dGUgY2xvY2sgdmlzaWJsaXR5IGluIERPTVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1Zpc2libGUgSXMgY2xvY2sgZmFjZSB0b2dnbGVkIHZpc2libGUgb3IgaGlkZGVuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0b2dnbGVNaW51dGVzVmlzaWJsZShpc1Zpc2libGUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXMuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkJhY2suc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICdpbmxpbmUtYmxvY2snIDogJ25vbmUnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYWN0aXZlIHRpbWUgZWxlbWVudCBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MQ29sbGVjdGlvbn0gdGltZUVscyBDb2xsZWN0aW9uIG9mIHRpbWUgZWxlbWVudHMgdG8gZmluZCBhY3RpdmUgaW5cbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfSBBY3RpdmUgZWxlbWVudCBpbmRleFxuICAgICAqL1xuICAgIGdldEFjdGl2ZUluZGV4KHRpbWVFbHMpIHtcbiAgICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gMDtcblxuICAgICAgICBbXS5zb21lLmNhbGwodGltZUVscywgKHRpbWVFbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aW1lRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdHAtY2xvY2stLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZUluZGV4ID4gMTEgPyBhY3RpdmVJbmRleCAtIDEyIDogYWN0aXZlSW5kZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHNlbGVjdGVkIHRpbWUgdG8gaW5wdXQgZWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0aW1lU2VsZWN0ZWQoKSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLmNhY2hlZEVscy5kaXNwbGF5VGltZS5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IG1lcmlkaWVtID0gdGhpcy5pc01pbGl0YXJ5Rm9ybWF0KCkgPyAnJyA6IHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNZXJpZGllbS5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHRpbWVWYWx1ZSA9IGAke3RpbWV9ICR7bWVyaWRpZW19YDtcblxuICAgICAgICB0aGlzLmlucHV0RWwudmFsdWUgPSB0aW1lVmFsdWUudHJpbSgpO1xuICAgICAgICB0aGlzLmlucHV0RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhY3RpdmUgY2xvY2sgZmFjZSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lckVsIE5ldyBhY3RpdmUgZWxlbWVudHMgLnBhcmVudE5vZGVcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGFjdGl2ZUVsIEVsZW1lbnQgdG8gc2V0IGFjdGl2ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0QWN0aXZlRWwoY29udGFpbmVyRWwsIGFjdGl2ZUVsKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzTmFtZSA9ICdtdHAtY2xvY2stLWFjdGl2ZSc7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmUgPSBjb250YWluZXJFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGFjdGl2ZUNsYXNzTmFtZSlbMF07XG5cbiAgICAgICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgICAgIGFjdGl2ZUVsLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXJpZGllbSBzZWxlY3QgZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVuZXR9IGV2ZW50IEV2ZW50IG9iamVjdCBwYXNzZWQgZnJvbSBsaXN0ZW5lclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgbWVyaWRpZW1TZWxlY3RFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCBhY3RpdmVDbGFzc05hbWUgPSAnbXRwLWNsb2NrLS1hY3RpdmUnO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlID0gdGhpcy5jYWNoZWRFbHMubWVyaWRpZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhY3RpdmVDbGFzc05hbWUpWzBdO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICAgIGlmICghY3VycmVudEFjdGl2ZS5pc0VxdWFsTm9kZShlbGVtZW50KSkge1xuICAgICAgICAgICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNZXJpZGllbS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRpbWUgc2VsZWN0IGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IG9iamVjdCBwYXNzZWQgZnJvbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lckVsIEVsZW1lbnQgY29udGFpbmluZyB0aW1lIGxpc3QgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSBsaXN0RWxzIENvbGxlY3Rpb24gb2YgbGlzdCBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gZGlzcGxheUluZGV4IEluZGV4IGF0IHdoaWNoIHNlbGVjdGVkIHRpbWUgc2hvdWxkIGRpc3BsYXkgWzE6IGhvdXJzLCAyOiBtaW51dGVzXVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdGltZVNlbGVjdEV2ZW50KGV2ZW50LCBjb250YWluZXJFbCwgbGlzdEVscywgZGlzcGxheUluZGV4KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG5ld0FjdGl2ZSA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICB0aGlzLnNldEFjdGl2ZUVsKGNvbnRhaW5lckVsLCBuZXdBY3RpdmUpO1xuICAgICAgICB0aGlzLnNldERpc3BsYXlUaW1lKG5ld0FjdGl2ZS5pbm5lckhUTUwsIGRpc3BsYXlJbmRleCk7XG4gICAgICAgIHRoaXMucm90YXRlSGFuZCh0aGlzLmdldEFjdGl2ZUluZGV4KGxpc3RFbHMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBwaWNrZXIgc2V0IHRvIG1pbGl0YXJ5IHRpbWUgbW9kZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gSXMgaW4gbWlsaXRhcnkgdGltZSBtb2RlXG4gICAgICovXG4gICAgaXNNaWxpdGFyeUZvcm1hdCgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5pbnB1dEVsLm10cE9wdGlvbnMudGltZUZvcm1hdCA9PT0gJ21pbGl0YXJ5Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgcGlja2VyIG9iamVjdCBoYXMgYWxyZWFkeSBzZXQgZXZlbnRzIG9uIHBpY2tlciBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gSGFzIGV2ZW50cyBiZWVuIHNldCBvbiBwaWNrZXIgZWxlbWVudHNcbiAgICAgKi9cbiAgICBoYXNTZXRFdmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucygnbXRwLWV2ZW50cy1zZXQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0ZW1wbGF0ZSBoYXMgYWxyZWFkeSBiZWVuIGFwcGVuZGVkIHRvIERPTVxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gSXMgdGVtcGxhdGUgaW4gRE9NXG4gICAgICovXG4gICAgaXNUZW1wbGF0ZUluRE9NKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtb3ZlcmxheScpWzBdKTtcbiAgICB9XG59XG5cbndpbmRvdy5UaW1lUGlja2VyID0gVGltZVBpY2tlcjtcbmV4cG9ydCBkZWZhdWx0IFRpbWVQaWNrZXI7XG4iXX0=
