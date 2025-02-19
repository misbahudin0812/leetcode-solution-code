var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
    let size = this.queue.length;
    // Rotasi elemen dalam queue untuk mempertahankan urutan stack (LIFO)
    while (size > 1) {
        this.queue.push(this.queue.shift());
        size--;
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
 * Contoh penggunaan:
 * var obj = new MyStack();
 * obj.push(1);
 * obj.push(2);
 * console.log(obj.top()); // return 2
 * console.log(obj.pop()); // return 2
 * console.log(obj.empty()); // return false
 */
