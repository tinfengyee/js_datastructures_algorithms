"use strict";

var LinkedList = require("../../../src/datastructures/list/list"),
    expect = require("chai").expect;

describe("Test Linked List", function() {
    var list;

    beforeEach(function() {
        list = new LinkedList();
    });

    it("should be empty with newly created linked list", function() {
        expect(list.empty()).to.equal(true);
        expect(list.size()).to.equal(0);
    });

    it("should not empty after appending elements", function() {
        list.append("a");
        expect(list.empty()).to.equal(false);
        expect(list.size()).to.equal(1);
        expect(list.toString()).to.equal("a");

        list.append("b");
        expect(list.size()).to.equal(2);
        expect(list.toString()).to.equal("a->b");

        expect(list.indexOf("a")).to.equal(0);
        expect(list.indexOf("b")).to.equal(1);
        expect(list.indexOf("c")).to.equal(-1);
    });

    it("should not empty after inserting elements", function() {
        var result = list.insert(1, "a");
        expect(result).to.equal(false);
        expect(list.empty()).to.equal(true);
        expect(list.size()).to.equal(0);
        expect(list.toString()).to.equal("");

        result = list.insert(0, "a");
        expect(result).to.equal(true);
        expect(list.empty()).to.equal(false);
        expect(list.size()).to.equal(1);
        expect(list.toString()).to.equal("a");

        result = list.insert(1, "b");
        expect(result).to.equal(true);
        expect(list.size()).to.equal(2);
        expect(list.toString()).to.equal("a->b");

        result = list.insert(0, "c");
        expect(result).to.equal(true);
        expect(list.size()).to.equal(3);
        expect(list.toString()).to.equal("c->a->b");
    });
});
