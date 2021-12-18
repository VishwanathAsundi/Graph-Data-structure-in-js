// Accessing Min/Max element is O(1)
// Insertion is O(Logn)
// Removing a node is O(Logn).

// Heaps can be implemented using Arrays and LinkedLists
// Most commonly array is used to omplement Heap data structure

class MinHeap {
    constructor() {
        this.heap = [null];
    }
    getMin() {
        // Min value of heap is available at index 1
        this.heap[1];
    }
    insert(node) {
        this.heap.push(node);

        let current = this.heap.length - 1;
        // If parent node value is greater than child, then swap the nodes
        while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) {
            // js ES6 array destructuring syntax
            [this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]];
            current = Math.floor(current / 2);
        }
    }
    removeRootNode() {

        let smallest = this.heap[1];
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);


            if (this.heap.length == 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (this.heap[current] > this.heap[leftChildIndex] || this.heap[current] > this.heap[rightChildIndex]) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[leftChildIndex], this.heap[current]] = [this.heap[current], this.heap[leftChildIndex]];
                    current = leftChildIndex;
                } else {
                    [this.heap[rightChildIndex], this.heap[current]] = [this.heap[current], this.heap[rightChildIndex]];
                    current = rightChildIndex;
                }
                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;
            }
        } else if (this.heap.length == 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }
        return smallest;
    }
    printHeap() {
        document.write("<br/>")
        for (let i = 1; i < this.heap.length; i++) {
            document.write(this.heap[i], " ");
        }
    }
}
const mh = new MinHeap();
mh.insert(10);
mh.insert(23);

mh.insert(36);
mh.insert(18);

mh.printHeap();

document.write("<br/>")

document.write(mh.removeRootNode(), " Removed from the Heap array");


mh.printHeap();