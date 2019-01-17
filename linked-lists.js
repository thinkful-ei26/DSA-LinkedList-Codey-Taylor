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

    insertFirst(item){
        this.head = new _Node(item, this.head);
    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
        }
        else{
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(itemToInsert, item){
        let currNode = this.head;
        if (!this.head){
            return null;
        }
        while(currNode.next !== null){
             
            if(currNode.next.value === item) {
                console.log(currNode.next.next)
                
                currNode.next= new _Node(itemToInsert, currNode.next.next )
                
                console.log(currNode);
            }
            
            currNode = itemToInsert;
        }
    }
    // ('hotdog', 'Helo')
    // ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck']

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


    remove(item){ 
        //if the list is empty
        if (!this.head){
            return null;
        }
        //if the node to be removed is head, make the next node head
        if(this.head.value === item){
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
        if(currNode === null){
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
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

    SLL.insertBefore('Hot dog', 'Helo')
    console.log(SLL.find('Boomer'))

    return SLL;
}
main(items);
