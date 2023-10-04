type Node<T> = {
    value: T; next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T> | undefined;
    private tail?: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const node: Node<T> = {value: item};
        this.length += 1;

        if (!this.tail) {
            this.tail = node;
            this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length -= 1;

        const head = this.head;
        this.head = head.next;

        if (!this.length) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}