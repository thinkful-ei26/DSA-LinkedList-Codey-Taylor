class _Node {
    constructor(value, next) {
        this.value=value;
        this.next=next;
    }
}

class LinkedList {
    constructor() {
            this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item);
        }
        else{
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(itemToInsert, item) {
        let currNode = this.head;
        let newNode = new _Node(itemToInsert, null);
        while(currNode) {
            if(currNode.next.value === item) {
                newNode.next = currNode.next;
                currNode.next = newNode;
                return;
            }     
            currNode = currNode.next
        }
    }

    insertAfter(itemToInsert, item) {
        let currNode = this.head;
        let newNode = new _Node(itemToInsert, null)
        while(currNode) {
            if(currNode.value === item && currNode.next === null) {
                currNode.next = newNode;
            }
            else if(currNode.value == item) {
              newNode.next = currNode.next;
              currNode.next = newNode;  
              return;
            }
            currNode = currNode.next;
        }
    }

    insertAt(item, position) {
        let currNode = this.head;
        let newNode = new _Node(item, null);
        let prevNode;
        let i=1; 
        while(currNode.next !== null) {
            if(i === position) {
                newNode.next = currNode;
                prevNode.next = newNode;
                return;
            }
            else if (currNode.next === null) { 
                console.log("your position is out of range");
            }
            prevNode = currNode;
            i++; 
            currNode = currNode.next;
        }                
    }

    find(item) { 
        //start at the head
        let currNode = this.head;
        //if the list is empty
        if (!this.head){
            return null;
        }
        //Check for the item 
        while(currNode.value !== item) {
            //return null if end of the list 
            // and the item is not on the list
            if (currNode.next === null) {
                return null;
            }
            else {
                //otherwise keep looking 
                currNode = currNode.next;
            }
        }
        //found it
        return currNode;
    }


    remove(item) { 
        //if the list is empty
        if (!this.head) {
            return null;
        }
        //if the node to be removed is head, make the next node head
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //start at the head
        let currNode = this.head;
        //keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            //save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

const display = linkedList => {
    let currNode = linkedList.head;
    if (!linkedList.head){
        return null;
    }
    while(currNode !== null) {
        console.log(currNode.value)
        currNode = currNode.next
    }
}

const size = linkedList => {
    let currNode = linkedList.head;
    let count = 0;
    if (!linkedList.head){
        return count;
    }
    while(currNode !== null) {
        count++;
        currNode = currNode.next
    }
    console.log(count);
    return count;
}

const isEmpty = linkedList => {
    if (!linkedList.head){
        return true;
    }
    else return false;
}

const findPrevious = (linkedList, item) => {
    let currNode = linkedList.head;
    if (!linkedList.head){
        return null;
    }
    while(currNode !== null) {
        if(currNode.next.value === item) {
            return currNode;
        }
        currNode = currNode.next
    }
}

const findLast = linkedList => {
    let currNode = linkedList.head;
    if (!linkedList.head){
        return null;
    }
    while(currNode !== null) {
        if(currNode.next === null) {
            return currNode;
        }
        currNode = currNode.next;
    }
}

const items = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
const main = items => {
    const SLL = new LinkedList;
    items.map(item => SLL.insertLast(item))

    // SLL.insertFirst('Tauhida');
    // console.log(SLL.find('Tauhida'));

    // SLL.remove('squirrel');
    // SLL.remove('Boomer');

    // SLL.insertBefore('Hot dog', 'Helo')
    // SLL.insertAfter('Hot dog', 'Boomer')
    // SLL.insertAt('Hot dog', 3)

    // console.log(SLL.find('Apollo'))
    // console.log(SLL.find('Boomer'))
    // console.log(SLL.find('Hot dog'))
    // console.log(SLL.find('Helo'))

    return SLL;
}
const linkedList = main(items);

// display(linkedList);
// size(linkedList);
// console.log(isEmpty(linkedList));
// console.log(findPrevious(linkedList, 'Boomer'))
// console.log(findLast(linkedList))

function WhatDoesThisProgramDo(lst){
    let current = lst.head; // set ${current} to first item in linked list
    while(current !== null){ // loop through all items in list
        let newNode = current; // set neNode to current before incrementing current
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next; // increment next item in list for while loop
    }
} // removing all duplicate nodes in the linked list O(2^n)

// Reverse a list
const reverse = linkedList => {
    let currNode = linkedList.head;
    let prevNode; 
    while(currNode !== null) {
        if(prevNode === currNode){
             prevNode.next = null;
        }
        
        prevNode
        console.log('previous node ', previousNode.value);
        if(currNode.next !== null){
        currNode = currNode.next;
        }
        console.log(" current node ", currNode.value);
    }
}

reverse(linkedList);