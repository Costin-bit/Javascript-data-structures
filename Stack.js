
class Stack {
    constructor() {
        this.array = [];
        this.top = 0;
    }

    isEmpty() {
        return this.top == 0;
    }

    length() {
        return this.top;
    }

    peek() {
        if (this.isEmpty() == true) {
            return "The Stack is empty.";
        }
        return this.array[this.top - 1];
    }

    push(item) {
        this.array[this.top] = item;
        this.top += 1;
        return "The item was inserted correctly."
    }

    pop() {
        if (isEmpty() == false) {
            this.top -= 1;
            return "The itam removed is " + this.array.pop() + ".";
        }
        return "The Stack is empty.";
    }

    print() {
        if (this.isEmpty() == true) {
            return "The Stack is empty.";
        }
        let top = this.top - 1;
        while (top >= 0) {
            console.log(this.array[top]);
            top--;
        }
    }
}

let stack = new Stack;