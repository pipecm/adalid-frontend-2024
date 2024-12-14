export class Stack {
    constructor() {
        this.data = [];
    }

    push(item) {
        this.data.push(item);
    }

    pop(item) {
        return this.data.pop();
    }

    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.data.length === 0;
    }

    getLastItem() {
        return this.data[this.data.length - 1];
    }
}

export class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
    }

    dequeue() {
        return this.data.shift();
    }

    getFirstItem() {
        return this.data[0];
    }

    getLastItem() {
        return this.data[this.data.length - 1];
    }
}