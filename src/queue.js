const { NotImplementedError } = require('../extensions/index.js');
const { testOptional, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    const firstIsEmpty = this.first;

    if (!firstIsEmpty) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }

    // update last elm
    this.last = newNode;
  }

  dequeue() {
    const firstIsEmpty = this.first;
    if (!firstIsEmpty) return null;
    const firstNodeValue = this.first.value;

    this.first = this.first.next;
    if (!firstIsEmpty) this.last = null;

    return firstNodeValue;
  }
}

module.exports = {
  Queue
};
