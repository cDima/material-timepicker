/* eslint-disable */
import TimePicker from '../../../src/js/timepicker';
import assign from '../../../src/js/assign';

describe('TimePicker Unit Tests', function() {  
    let picker;

    beforeEach(function() {
        let spanNode = document.createElement('span');
        let liNode = document.createElement('li');
        let divNode = document.createElement('div');
        let ulNode = document.createElement('ul');
        let buttonNode = document.createElement('button');

        picker = new TimePicker();
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

        for (let inc = 0; inc < 24; inc += 1) {
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

    afterEach(function() {
        picker = null;
    });

    describe('#bindInput', function() {
        it('should assign passed options merged with defaultOptions to inputEl parameter', function() {
            const inputEl = document.createElement('input');
            const options = {test: 'value'};
            const expectOptions = assign({}, picker.defaultOptions, options);

            picker.bindInput(inputEl, options);

            expect(inputEl.mtpOptions).to.deep.equal(expectOptions);
        });

        it('should set focus event listener to inputEl parameter', function() {
            const inputEl = document.createElement('input');
            const addEventListenerSpy = sinon.spy(inputEl, 'addEventListener');

            picker.bindInput(inputEl);

            expect(addEventListenerSpy.calledOnce).to.be.true;
            expect(addEventListenerSpy.calledWith('focus', sinon.match.func)).to.be.true;
        });
    });

    describe('#openOnInput', function() {
        it('should assign inputEl parameter to inputEl class property', function() {
            const inputEl = document.createElement('input');

            picker.openOnInput(inputEl);

            expect(picker.inputEl).to.deep.equal(inputEl);
        });

        it('should assign passed options merged with defaultOptions to inputEl.mtpOptions property', function() {
            const inputEl = document.createElement('input');
            const options = {test: 'value'};
            const expectOptions = assign({}, picker.defaultOptions, options);

            picker.openOnInput(inputEl, options);

            expect(picker.inputEl.mtpOptions).to.deep.equal(expectOptions);
        });

        it('should call #show method', function() {
            const inputEl = document.createElement('input');
            const showSpy = sinon.spy(picker, 'show');

            picker.openOnInput(inputEl);

            expect(showSpy.calledOnce).to.be.true;
        });
    });

    describe('#setupTemplate', function() {
        let isTemplateInDOMStub, insertAdjacentHTMLStub;

        beforeEach(function() {
            isTemplateInDOMStub = sinon.stub(picker, 'isTemplateInDOM');
            insertAdjacentHTMLStub = sinon.spy(document.body, 'insertAdjacentHTML');
        });

        afterEach(function() {
            isTemplateInDOMStub.restore();
            insertAdjacentHTMLStub.restore();
        });

        it('should insert template in DOM if #isTemplateInDOM returns false', function() {
            isTemplateInDOMStub.onFirstCall().returns(false);
            picker.setupTemplate();

            expect(isTemplateInDOMStub.calledOnce).to.be.true;
            expect(isTemplateInDOMStub.calledBefore(insertAdjacentHTMLStub)).to.be.true;
            expect(insertAdjacentHTMLStub.calledWith('beforeend', picker.template)).to.be.true;
        });

        it('should not insert template in DOM if #isTemplateInDOM returns true', function() {
            isTemplateInDOMStub.onFirstCall().returns(true);
            picker.setupTemplate();

            expect(isTemplateInDOMStub.calledOnce).to.be.true;
            expect(isTemplateInDOMStub.calledBefore(insertAdjacentHTMLStub)).to.be.true;
            expect(insertAdjacentHTMLStub.neverCalledWith('beforeend', picker.template)).to.be.true;
        });
    });

    describe('#setEvents', function() {
        let hasSetEventsStub, cachedEls, wrapperClassListAddSpy;
        const addEventListenerSpys = {};

        beforeEach(function() {
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

            [].forEach.call(cachedEls.meridiemSpans, span => {
                addEventListenerSpys.meridiemSpans.push(sinon.spy(span, 'addEventListener'));
            });

            [].forEach.call(cachedEls.clockHoursLi, listItem => {
                addEventListenerSpys.clockHoursLi.push(sinon.spy(listItem, 'addEventListener'));
            });

            [].forEach.call(cachedEls.clockMinutesLi, listItem => {
                addEventListenerSpys.clockMinutesLi.push(sinon.spy(listItem, 'addEventListener'));
            });

            [].forEach.call(cachedEls.clockMilitaryHoursLi, listItem => {
                addEventListenerSpys.clockMilitaryHoursLi.push(sinon.spy(listItem, 'addEventListener'));
            });
        });

        afterEach(function() {
            hasSetEventsStub.restore();
            wrapperClassListAddSpy.restore();
            addEventListenerSpys.overlay.restore();
            addEventListenerSpys.buttonCancel.restore();
            addEventListenerSpys.buttonOk.restore();
            addEventListenerSpys.buttonBack.restore();

            addEventListenerSpys.meridiemSpans.forEach(span => {
                span.restore();
            });

            addEventListenerSpys.clockHoursLi.forEach(listItem => {
                listItem.restore();
            });

            addEventListenerSpys.clockMinutesLi.forEach(listItem => {
                listItem.restore();
            });

            addEventListenerSpys.clockMilitaryHoursLi.forEach(listItem => {
                listItem.restore();
            });
        });

        it('should set events on cached elements if #hasSetEvents returns false', function() {
            hasSetEventsStub.onFirstCall().returns(false);
            picker.setEvents();

            expect(hasSetEventsStub.calledOnce).to.be.true;
            expect(addEventListenerSpys.overlay.calledWith('click', sinon.match.func)).to.be.true;
            expect(addEventListenerSpys.buttonCancel.calledWith('click', sinon.match.func)).to.be.true;
            expect(addEventListenerSpys.buttonOk.calledWith('click', sinon.match.func)).to.be.true;
            expect(addEventListenerSpys.buttonBack.calledWith('click', sinon.match.func)).to.be.true;

            addEventListenerSpys.meridiemSpans.forEach(span => {
                expect(span.calledWith('click', sinon.match.func)).to.be.true;
            });

            addEventListenerSpys.clockHoursLi.forEach(listItem => {
                expect(listItem.calledWith('click', sinon.match.func)).to.be.true;
            });

            addEventListenerSpys.clockMinutesLi.forEach(listItem => {
                expect(listItem.calledWith('click', sinon.match.func)).to.be.true;
            });

            addEventListenerSpys.clockMilitaryHoursLi.forEach(listItem => {
                expect(listItem.calledWith('click', sinon.match.func)).to.be.true;
            });
        });

        it('should not set events on cached elements if #hasSetEvents returns true', function() {
            hasSetEventsStub.onFirstCall().returns(true);
            picker.setEvents();

            expect(hasSetEventsStub.calledOnce).to.be.true;
            expect(addEventListenerSpys.overlay.neverCalledWith('click', sinon.match.func)).to.be.true;
            expect(addEventListenerSpys.buttonCancel.neverCalledWith('click', sinon.match.func)).to.be.true;
            expect(addEventListenerSpys.buttonOk.neverCalledWith('click', sinon.match.func)).to.be.true;
            expect(addEventListenerSpys.buttonBack.neverCalledWith('click', sinon.match.func)).to.be.true;

            addEventListenerSpys.meridiemSpans.forEach(span => {
                expect(span.neverCalledWith('click', sinon.match.func)).to.be.true;
            });

            addEventListenerSpys.clockHoursLi.forEach(listItem => {
                expect(listItem.neverCalledWith('click', sinon.match.func)).to.be.true;
            });

            addEventListenerSpys.clockMinutesLi.forEach(listItem => {
                expect(listItem.neverCalledWith('click', sinon.match.func)).to.be.true;
            });

            addEventListenerSpys.clockMilitaryHoursLi.forEach(listItem => {
                expect(listItem.neverCalledWith('click', sinon.match.func)).to.be.true;
            });
        });

        it('should add .mtp-events-set to cachedEls.wrapper.classList if #hasSetEvents returns false', function() {
            hasSetEventsStub.onFirstCall().returns(false);
            picker.setEvents();

            expect(hasSetEventsStub.calledOnce).to.be.true;
            expect(hasSetEventsStub.calledBefore(wrapperClassListAddSpy)).to.be.true;
            expect(wrapperClassListAddSpy.calledWith('mtp-events-set')).to.be.true;
        });

        it('should not add .mtp-events-set to cachedEls.wrapper.classList if #hasSetEvents returns true', function() {
            hasSetEventsStub.onFirstCall().returns(true);
            picker.setEvents();

            expect(hasSetEventsStub.calledOnce).to.be.true;
            expect(hasSetEventsStub.calledBefore(wrapperClassListAddSpy)).to.be.true;
            expect(wrapperClassListAddSpy.neverCalledWith('mtp-events-set')).to.be.true;
        });
    });

    describe('#show', function() {
        let blurSpy, isMilitaryFormatStub, toggleHoursVisibleSpy, toggleMinutesVisibleSpy,
        setDisplayTimeSpy;

        beforeEach(function() {
            picker.inputEl = document.createElement('input');
            blurSpy = sinon.spy(picker.inputEl, 'blur');
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            toggleHoursVisibleSpy = sinon.spy(picker, 'toggleHoursVisible');
            toggleMinutesVisibleSpy = sinon.spy(picker, 'toggleMinutesVisible');
            setDisplayTimeSpy = sinon.spy(picker, 'setDisplayTime');
        });

        afterEach(function() {
            blurSpy.restore();
            isMilitaryFormatStub.restore();
            toggleHoursVisibleSpy.restore();
            toggleMinutesVisibleSpy.restore();
            setDisplayTimeSpy.restore();
        });

        it('should call blur on inputEl', function() {
            picker.show();

            expect(blurSpy.calledOnce).to.be.true;
        });

        it('should call #toggleHoursVisible with true', function() {
            picker.show();

            expect(toggleHoursVisibleSpy.calledOnce).to.be.true;
            expect(toggleHoursVisibleSpy.calledWith(true)).to.be.true;
        });

        it('should call #toggleMinutesVisible with no parameters', function() {
            picker.show();

            expect(toggleMinutesVisibleSpy.calledOnce).to.be.true;
            expect(toggleMinutesVisibleSpy.neverCalledWith(true)).to.be.true;
        });

        it('should call #setDisplayTime with 00 if isMilitaryFormat is true', function() {
            isMilitaryFormatStub.onFirstCall().returns(true);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be.true;
            expect(isMilitaryFormatStub.calledBefore(setDisplayTimeSpy)).to.be.true;
            expect(setDisplayTimeSpy.calledWith('00', 0)).to.be.true;
        });

        it('should call #setDisplayTime, index 0, with 12 if isMilitaryFormat is false', function() {
            isMilitaryFormatStub.onFirstCall().returns(false);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be.true;
            expect(isMilitaryFormatStub.calledBefore(setDisplayTimeSpy)).to.be.true;
            expect(setDisplayTimeSpy.getCall(0).calledWith('12', 0)).to.be.true;
        });

        it('should call #setDisplayTime, index 1, with 0', function() {
            picker.show();

            expect(setDisplayTimeSpy.getCall(1).calledWith('0', 1)).to.be.true;
        });

        it('should set cachedEls.displayMeridiem.style.display to none when isMilitaryFormat is true', function() {
            isMilitaryFormatStub.onFirstCall().returns(true);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be.true;
            expect(picker.cachedEls.displayMeridiem.style.display).to.equal('none');
        });

        it('should set cachedEls.displayMeridiem.style.display to inline when isMilitaryFormat is false', function() {
            isMilitaryFormatStub.onFirstCall().returns(false);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be.true;
            expect(picker.cachedEls.displayMeridiem.style.display).to.equal('inline');
        });

        it('should set cachedEls.meridiem.style.display to none when isMilitaryFormat is true', function() {
            isMilitaryFormatStub.onFirstCall().returns(true);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be.true;
            expect(picker.cachedEls.meridiem.style.display).to.equal('none');
        });

        it('should set cachedEls.meridiem.style.display to block when isMilitaryFormat is false', function() {
            isMilitaryFormatStub.onFirstCall().returns(false);
            picker.show();

            expect(isMilitaryFormatStub.calledOnce).to.be.true;
            expect(picker.cachedEls.meridiem.style.display).to.equal('block');
        });

        it('should set cachedEls.overlay.style.display to block', function() {
            picker.show();

            expect(picker.cachedEls.overlay.style.display).to.equal('block');
        });
    });

    describe('#showEvent', function() {
        it('should assign event.target to inputEl call property', function() {
            const event = {};

            event.target = document.createElement('input');
            event.target.mtpOptions = picker.defaultOptions;
            picker.showEvent(event);

            expect(picker.inputEl).to.equal(event.target);
        });

        it('should call #show method', function() {
            const showSpy = sinon.spy(picker, 'show');
            const event = {};

            event.target = document.createElement('input');
            event.target.mtpOptions = picker.defaultOptions;
            picker.showEvent(event);

            expect(showSpy.calledOnce).to.be.true;
        });
    });

    describe('#hide', function() {
        beforeEach(function() {
            picker.inputEl = document.createElement('input');
            picker.inputEl.mtpOptions = picker.defaultOptions;
        });

        it('should set cachedEls.overlay.style.display to none', function() {
            picker.hide();

            expect(picker.cachedEls.overlay.style.display).to.equal('none');
        });

        it('should call dispatchEvevnt with blur event on inputEl', function() {
            const dispatchEventSpy = sinon.spy(picker.inputEl, 'dispatchEvent');    
            
            picker.hide();

            expect(dispatchEventSpy.calledOnce).to.be.true;
            expect(dispatchEventSpy.args[0][0].type).to.equal('blur');

            dispatchEventSpy.restore();
        });

        it('should call #resetState class method', function() {
            const resetStateSpy = sinon.spy(picker, 'resetState');

            picker.hide();

            expect(resetStateSpy.calledOnce).to.be.true;

            resetStateSpy.restore();
        });
    });

    describe('#hideEvent', function() {
        let event, hideSpy, stopPropagationSpy;

        beforeEach(function() {
            event = {};
            event.stopPropagation = function() {};
            event.target = document.createElement('input');
            picker.inputEl = event.target;
            picker.inputEl.mtpOptions = picker.defaultOptions;
            hideSpy = sinon.spy(picker, 'hide');
            stopPropagationSpy = sinon.spy(event, 'stopPropagation');
        });

        afterEach(function() {
            hideSpy.restore();
            stopPropagationSpy.restore();
        });

        it('should call stopPropagation on event paramater', function() {
            picker.hideEvent(event);

            expect(stopPropagationSpy.calledOnce).to.be.true;
        });

        it('should call #hide if event.target.classList contains mtp-overlay', function() {
            event.target.classList.add('mtp-overlay');
            picker.hideEvent(event);

            expect(hideSpy.calledOnce).to.be.true;
        });

        it('should call #hide if event.target.classList contains mtp-actions__cancel', function() {
            event.target.classList.add('mtp-actions__cancel');
            picker.hideEvent(event);

            expect(hideSpy.calledOnce).to.be.true;
        });

        it('should not call #hide if event.target.classList does not have allowed class', function() {
            picker.hideEvent(event);

            expect(hideSpy.calledOnce).to.be.false;
        });
    });

    describe('#resetState', function() {
        let toggleHoursVisibleSpy, toggleMinutesVisibleSpy, isMilitaryFormatStub, hoursLiDispatchEventSpy,
        minutesLiDispatchEventSpy, militaryHoursLiDispatchEventSpy;

        beforeEach(function() {
            const cachedEls = picker.cachedEls;

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

        afterEach(function() {
            isMilitaryFormatStub.restore();
            toggleHoursVisibleSpy.restore();
            toggleMinutesVisibleSpy.restore();
            hoursLiDispatchEventSpy.restore();
            minutesLiDispatchEventSpy.restore();
            militaryHoursLiDispatchEventSpy.restore();
        });

        it('should set currentStep to 0', function() {
            expect(picker.currentStep).to.equal(2);

            picker.resetState();

            expect(picker.currentStep).to.equal(0);
        });

        it('should call #toggleHoursVisible with parameters true, and result of #isMilitaryFormat', function() {
            isMilitaryFormatStub.onCall(0).returns(true);
            isMilitaryFormatStub.onCall(1).returns(false);

            picker.resetState();

            expect(isMilitaryFormatStub.calledOnce).to.be.true;
            expect(toggleHoursVisibleSpy.calledWith(true, true)).to.be.true;

            picker.resetState();

            expect(isMilitaryFormatStub.calledTwice).to.be.true;
            expect(toggleHoursVisibleSpy.calledWith(true, false)).to.be.true;
        });

        it('should call #toggleMinutesVisible', function() {
            picker.resetState();

            expect(toggleMinutesVisibleSpy.calledOnce).to.be.true;
        });

        it('should call dispatchEvent with click event on cachedEls.clockHoursLi[9]', function() {
            picker.resetState();

            expect(hoursLiDispatchEventSpy.calledOnce).to.be.true;
            expect(hoursLiDispatchEventSpy.args[0][0].type).to.equal('click');
        });

        it('should call dispatchEvent with click event on cachedEls.clockMinutesLi[9]', function() {
            picker.resetState();

            expect(minutesLiDispatchEventSpy.calledOnce).to.be.true;
            expect(minutesLiDispatchEventSpy.args[0][0].type).to.equal('click');
        });

        it('should call dispatchEvent with click event on cachedEls.clockMilitaryHoursLi[9]', function() {
            picker.resetState();

            expect(militaryHoursLiDispatchEventSpy.calledOnce).to.be.true;
            expect(militaryHoursLiDispatchEventSpy.args[0][0].type).to.equal('click');
        });
    });

    describe('#setDisplayTime', function() {
        let displayTimeEl;

        beforeEach(function() {
            picker.cachedEls.displayTime.innerHTML = '00:00';
            displayTimeEl = picker.cachedEls.displayTime;
        });

        it('should replace hour time with value given when index 0', function() {
            expect(displayTimeEl.innerHTML).to.equal('00:00');

            picker.setDisplayTime('15', 0);

            expect(displayTimeEl.innerHTML).to.equal('15:00');
        });

        it('should replace minute time with value given when index 1', function() {
            expect(displayTimeEl.innerHTML).to.equal('00:00');

            picker.setDisplayTime('15', 1);

            expect(displayTimeEl.innerHTML).to.equal('00:15');
        });

        it('should pad minute value with 0 if value is single diget', function() {
            expect(displayTimeEl.innerHTML).to.equal('00:00');

            picker.setDisplayTime('1', 1);

            expect(displayTimeEl.innerHTML).to.equal('00:01');
        });
    });

    describe('#rotateHand', function() {
        it('should set cachedEls.clockHand.style.transform to rotate((nodeIndex * 30 - 90)deg)', function() {
            const nodeIndex = 5;
            const rotateVal = 5 * 30 - 90;

            picker.rotateHand(nodeIndex);

            expect(picker.cachedEls.clockHand.style.transform).to.equal(`rotate(${rotateVal}deg)`);
        });

        it('should have a default value of 9 for nodeIndex', function() {
            const rotateVal = 9 * 30 - 90;

            picker.rotateHand();

            expect(picker.cachedEls.clockHand.style.transform).to.equal(`rotate(${rotateVal}deg)`);
        });
    });

    describe('#changeStep', function() {
        let isMilitaryFormatStub, toggleHoursVisibleSpy, toggleMinutesVisibleSpy,
        getActiveIndexStub, rotateHandSpy, timeSelectedStub, hideSpy;

        beforeEach(function() {
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            toggleHoursVisibleSpy = sinon.spy(picker, 'toggleHoursVisible');
            toggleMinutesVisibleSpy = sinon.spy(picker, 'toggleMinutesVisible');
            getActiveIndexStub = sinon.stub(picker, 'getActiveIndex');
            rotateHandSpy = sinon.spy(picker, 'rotateHand');
            timeSelectedStub = sinon.stub(picker, 'timeSelected', function() {});
            hideSpy = sinon.spy(picker, 'hide');
            picker.inputEl = document.createElement('input');
        });

        afterEach(function() {
            isMilitaryFormatStub.restore();
            toggleHoursVisibleSpy.restore();
            toggleMinutesVisibleSpy.restore();
            getActiveIndexStub.restore();
            rotateHandSpy.restore();
            timeSelectedStub.restore();
            hideSpy.restore();
        });

        it('should call #toggleHoursVisible(true) when step parameter is 0', function() {
            isMilitaryFormatStub.onFirstCall().returns(false);
            getActiveIndexStub.onFirstCall().returns(1);

            picker.changeStep(0);

            expect(toggleHoursVisibleSpy.calledOnce).to.be.true;
            expect(toggleHoursVisibleSpy.calledWith(true, false)).to.be.true;
        });

        it(`should call #getActiveIndex of cachedEls.clockHoursLi
           when isMilitaryFormat is false when step is parameter 0`, function() {
            isMilitaryFormatStub.onFirstCall().returns(false);
            getActiveIndexStub.onFirstCall().returns(1);

            picker.changeStep(0);

            expect(isMilitaryFormatStub.calledOnce).to.be.true;
            expect(getActiveIndexStub.calledOnce).to.be.true;
            expect(getActiveIndexStub.calledWith(picker.cachedEls.clockHoursLi)).to.be.true;
            expect(rotateHandSpy.calledOnce).to.be.true;
            expect(rotateHandSpy.calledWith(1)).to.be.true;
        });

        it(`should call #getActiveIndex with cachedEls.clockMilitaryHoursLi
           when isMilitaryFormat is true when step is parameter 0`, function() {
            isMilitaryFormatStub.onFirstCall().returns(true);
            getActiveIndexStub.onFirstCall().returns(1);

            picker.changeStep(0);

            expect(isMilitaryFormatStub.calledOnce).to.be.true;
            expect(getActiveIndexStub.calledOnce).to.be.true;
            expect(getActiveIndexStub.calledWith(picker.cachedEls.clockMilitaryHoursLi)).to.be.true;
            expect(rotateHandSpy.calledOnce).to.be.true;
            expect(rotateHandSpy.calledWith(1)).to.be.true;
        });

        it('should call #toggleMinutesVisible(true) when step parameter is 1', function() {
            getActiveIndexStub.onFirstCall().returns(1);

            picker.changeStep(1);

            expect(toggleMinutesVisibleSpy.calledOnce).to.be.true;
            expect(toggleMinutesVisibleSpy.calledWith(true)).to.be.true;
        });

        it('should call #getActiveIndex with cachedEls.clockMinutesLi when step parameter is 1', function() {
            getActiveIndexStub.onFirstCall().returns(1);

            picker.changeStep(1);

            expect(getActiveIndexStub.calledOnce).to.be.true;
            expect(getActiveIndexStub.calledWith(picker.cachedEls.clockMinutesLi)).to.be.true;
        });

        it('should call #timeSelected and #hide when step parameter is 2', function() {
            picker.changeStep(2);

            expect(timeSelectedStub.calledOnce).to.be.true;
            expect(hideSpy.calledOnce).to.be.true;
        });

        it('should set currentStep to the step paramater passed', function() {
            expect(picker.currentStep).to.equal(0);
            picker.changeStep(1);
            expect(picker.currentStep).to.equal(1);
        });
    });

    describe('#toggleHoursVisible', function() {
        let clockHours, clockMilitaryHours;

        beforeEach(function() {
            clockHours = picker.cachedEls.clockHours;
            clockMilitaryHours = picker.cachedEls.clockMilitaryHours;
        });

        it(`should set cachedEls.clockHours.style.display to none when
           isVisible is false`, function() {
            picker.toggleHoursVisible(false);

            expect(clockHours.style.display).to.equal('none');
        });

        it(`should set cachedEls.clockHours.style.display to none when
           isVisible is true and isMilitaryFormat is true`, function() {
            picker.toggleHoursVisible(true, true);

            expect(clockHours.style.display).to.equal('none');
        });

        it(`should set cachedEls.clockHours.style.display to block when
           isVisible is true and isMilitaryFormat is false`, function() {
            picker.toggleHoursVisible(true, false);

            expect(clockHours.style.display).to.equal('block');
        });

        it(`should set cachedEls.clockMilitaryHours.style.display to none when
           isVisible is true and isMilitaryFormat is false`, function() {
            picker.toggleHoursVisible(true, false);

            expect(clockMilitaryHours.style.display).to.equal('none');
        });

        it(`should set cachedEls.clockMilitaryHours.style.display to none when
           isVisible is false`, function() {
            picker.toggleHoursVisible(false);

            expect(clockMilitaryHours.style.display).to.equal('none');
        });

        it(`should set cachedEls.clockMilitaryHours.style.display to block when
           isVisible is true and isMilitaryFormat is true`, function() {
            picker.toggleHoursVisible(true, true);

            expect(clockMilitaryHours.style.display).to.equal('block');
        });
    });

    describe('#toggleMinutesVisible', function() {
        let clockMinutes, buttonBack;

        beforeEach(function() {
            clockMinutes = picker.cachedEls.clockMinutes;
            buttonBack = picker.cachedEls.buttonBack;
        });

        it('should set cachedEls.clockMinutes.style.display to block when isVisible is true', function() {
            picker.toggleMinutesVisible(true);

            expect(clockMinutes.style.display).to.equal('block');
        });

        it('should set cachedEls.clockMinutes.style.display to none when isVisible is false', function() {
            picker.toggleMinutesVisible(false);

            expect(clockMinutes.style.display).to.equal('none');
        });

        it('should set cachedEls.buttonBack.style.display to inline-block when isVisible is true', function() {
            picker.toggleMinutesVisible(true);

            expect(buttonBack.style.display).to.equal('inline-block');
        });

        it('should set cachedEls.buttonBack.style.display to none when isVisible is false', function() {
            picker.toggleMinutesVisible(false);

            expect(buttonBack.style.display).to.equal('none');
        });
    });

    describe('#getActiveIndex', function() {
        it('should return the index of element with .mtp-clock--active', function() {
            const expectedIndex = 6;
            const clockHoursLi = picker.cachedEls.clockHoursLi;
            
            clockHoursLi[expectedIndex].classList.add('mtp-clock--active');
            
            expect(picker.getActiveIndex(clockHoursLi)).to.equal(expectedIndex);
        });

        it('should subtract 12 from the element with class .mtp-clock--active if greater than 11', function() {
            const activeIndex = 18;
            const expectedIndex = 6;
            const clockMilitaryHoursLi = picker.cachedEls.clockMilitaryHoursLi;
            
            clockMilitaryHoursLi[activeIndex].classList.add('mtp-clock--active');
            
            expect(picker.getActiveIndex(clockMilitaryHoursLi)).to.equal(expectedIndex);
        });
    });

    describe('#timeSelected', function() {
        let isMilitaryFormatStub, dispatchEventSpy;

        beforeEach(function() {
            picker.inputEl = document.createElement('input');
            picker.cachedEls.displayTime.innerHTML = '11:00';
            picker.cachedEls.displayMeridiem.innerHTML = 'pm';
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            dispatchEventSpy = sinon.spy(picker.inputEl, 'dispatchEvent');
        });

        afterEach(function() {
            isMilitaryFormatStub.restore();
            dispatchEventSpy.restore();
        });

        it(`should set displayTime.innerHTML and displayMeridiem.innerHTML to 
           inputEl.value if isMilitaryFormat is true`, function() {
            isMilitaryFormatStub.onCall(0).returns(false);

            picker.timeSelected();
            expect(picker.inputEl.value).to.equal('11:00 pm');
        });
        
        it('should set displayTime.innerHTML to inputEl.value if isMilitaryFormat is true', function() {
            isMilitaryFormatStub.onCall(0).returns(true);

            picker.timeSelected();
            expect(picker.inputEl.value).to.equal('11:00');
        });

        it('should call dispatch input event on inputEl', function() {
            picker.timeSelected();

            expect(dispatchEventSpy.calledOnce).to.be.true;
            expect(dispatchEventSpy.args[0][0].type).to.equal('input');
        });
    });

    describe('#setActiveEl', function() {
        it('should remove class .mtp-clock--active from element in containerEl parameter', function() {
            const clockHoursLi = picker.cachedEls.clockHoursLi;
            const removeSpy = sinon.spy(clockHoursLi[2].classList, 'remove');
            const activeEl = clockHoursLi[1];

            clockHoursLi[2].classList.add('mtp-clock--active');
            picker.setActiveEl(picker.cachedEls.clockHours, activeEl);

            expect(removeSpy.calledOnce).to.be.true;
            expect(removeSpy.calledWith('mtp-clock--active')).to.be.true;

            removeSpy.restore();
        })

        it('should add class .mtp-clock--active to activeEl parameter', function () {
            const activeEl = picker.cachedEls.clockHoursLi[1];
            const addSpy = sinon.spy(activeEl.classList, 'add');

            picker.cachedEls.clockHoursLi[2].classList.add('mtp-clock--active');
            picker.setActiveEl(picker.cachedEls.clockHours, activeEl);

            expect(addSpy.calledOnce).to.be.true;
            expect(addSpy.calledWith('mtp-clock--active')).to.be.true;

            addSpy.restore();
        });
    });

    describe('#meridiemSelectEvent', function() {
        it('should find child element in cachedEls.meridiem with class .mtp-clock--active and remove class', function() {
            const meridiemSpans = picker.cachedEls.meridiemSpans;
            const removeSpy = sinon.spy(meridiemSpans[0].classList, 'remove');
            const event = {target: meridiemSpans[1]};

            meridiemSpans[0].classList.add('mtp-clock--active');
            picker.meridiemSelectEvent(event);

            expect(removeSpy.calledOnce).to.be.true;
            expect(removeSpy.calledWith('mtp-clock--active')).to.be.true;

            removeSpy.restore();
        });

        it('should add class .mtp-clock--active to event.target element', function() {
            const meridiemSpans = picker.cachedEls.meridiemSpans;
            const addSpy = sinon.spy(meridiemSpans[1].classList, 'add');
            const event = {target: meridiemSpans[1]};

            meridiemSpans[0].classList.add('mtp-clock--active');
            picker.meridiemSelectEvent(event);

            expect(addSpy.calledOnce).to.be.true;
            expect(addSpy.calledWith('mtp-clock--active')).to.be.true;

            addSpy.restore();
        });

        it('should set cachedEls.displayMeridiem.innerHTML to event.target.innerHTML', function() {
            const meridiemSpans = picker.cachedEls.meridiemSpans;
            const event = {target: meridiemSpans[1]};

            meridiemSpans[1].innerHTML = 'am';
            meridiemSpans[0].classList.add('mtp-clock--active');
            picker.meridiemSelectEvent(event);

            expect(picker.cachedEls.displayMeridiem.innerHTML).to.equal('am');
        });

        it('should do nothing if current active elemtn is equal node of event.target', function() {
            picker.cachedEls.meridiemSpans[0].classList.add('mtp-clock--active');

            const activeElement = picker.cachedEls.meridiemSpans[0];
            const event = {target: activeElement};
            const addSpy = sinon.spy(activeElement.classList, 'add');
            const removeSpy = sinon.spy(activeElement.classList, 'remove');

            picker.meridiemSelectEvent(event);

            expect(addSpy.calledOnce).to.be.false;
            expect(removeSpy.calledOnce).to.be.false;

            addSpy.restore();
            removeSpy.restore();
        });
    });

    describe('#timeSelectEvent', function() {
        let event, stopPropagationSpy, setActiveElSpy, setDisplayTimeSpy, rotateHandSpy,
        getActiveIndexSpy, containerEl, listEls, displayIndex;

        beforeEach(function() {
            containerEl = picker.cachedEls.clockHours;
            listEls = picker.cachedEls.clockHoursLi;
            displayIndex = 0;
            event = {
                innerHTML: 'value',
                target: document.createElement('li'),
                stopPropagation: function() {},
            };

            listEls[0].classList.add('mtp-clock--active');
            stopPropagationSpy = sinon.spy(event, 'stopPropagation');
            setActiveElSpy = sinon.spy(picker, 'setActiveEl');
            setDisplayTimeSpy = sinon.spy(picker, 'setDisplayTime');
            rotateHandSpy = sinon.spy(picker, 'rotateHand');
            getActiveIndexSpy = sinon.spy(picker, 'getActiveIndex');
        });

        afterEach(function() {
            stopPropagationSpy.restore();
            setActiveElSpy.restore();
            setDisplayTimeSpy.restore();
            rotateHandSpy.restore();
            getActiveIndexSpy.restore();
        });

        it('should call stopPropagation on passed event parameter', function() {
            picker.timeSelectEvent(event, containerEl, listEls, displayIndex);

            expect(stopPropagationSpy.calledOnce).to.be.true;
        });

        it('should call setActiveEl with containerEl and event.target parameters', function() {
            picker.timeSelectEvent(event, containerEl, listEls, displayIndex);

            expect(setActiveElSpy.calledOnce).to.be.true;
            expect(setActiveElSpy.calledWith(containerEl, event.target)).to.be.true;
        });

        it('should call setDisplayTime with event.target.innerHTML and displayIndex parameters', function() {
            picker.timeSelectEvent(event, containerEl, listEls, displayIndex);

            expect(setDisplayTimeSpy.calledOnce).to.be.true;
            expect(setDisplayTimeSpy.calledWith(event.target.innerHTML, displayIndex)).to.be.true;
        });

        it('should call rotateHand with the result of getActiveIndex', function() {
            picker.timeSelectEvent(event, containerEl, listEls, displayIndex);

            expect(getActiveIndexSpy.calledOnce).to.be.true;
            expect(getActiveIndexSpy.calledWith(listEls)).to.be.true;
            expect(getActiveIndexSpy.returnValues[0]).to.equal(0);
            expect(rotateHandSpy.calledOnce).to.be.true;
            expect(rotateHandSpy.calledWith(0)).to.be.true;
        });
    });
});
