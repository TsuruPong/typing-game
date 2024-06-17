export class TreeNode {
    readonly value: string | null = null;
    readonly nodes: TreeNode[];

    constructor();
    constructor(value: string);
    constructor(value?: string) {
        this.value = value ?? null;
        this.nodes = [];
    }

    addNode(node: TreeNode): void;
    addNode(value: string): void;
    addNode(nov: TreeNode | string): void {
        if (nov instanceof TreeNode) {
            this.nodes.push(nov);
        } else {
            this.nodes.push(new TreeNode(nov));
        }
    }

    findNode(value: string): TreeNode | undefined {
        return this.nodes.find((v) => value == v.value);
    }

    isExists(value: string): boolean {
        return this.findNode(value) != undefined;
    }
}
