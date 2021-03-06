"use strict";
cc._RF.push(module, '419bfW4lPdMOZ3VzBk3BRxW', 'BaseFunction');
// Script/basic/BaseFunction.ts

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function modify(subject, func) {
    subject.next(func(subject.getValue()));
}
exports.modify = modify;
function eventToBehavior(node, eventType, resultSelector, initial) {
    var behavior = new rxjs_1.BehaviorSubject(initial);
    var handler = function (e) {
        behavior.next(resultSelector(e));
    };
    node.on(eventType, handler);
    return behavior;
}
exports.eventToBehavior = eventToBehavior;
function eventToObservable(node, eventType, resultSelector) {
    return new rxjs_1.Observable(function (subscriber) {
        var handler = function (e) {
            if (resultSelector == undefined) {
                subscriber.next(null);
            }
            else {
                subscriber.next(resultSelector(e));
            }
        };
        node.on(eventType, handler);
        subscriber.add(function () { return node.off(eventType, handler); });
    });
}
exports.eventToObservable = eventToObservable;

cc._RF.pop();