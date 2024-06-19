import { FactoryBase, IDetail, IDomain } from "../abs/heads";

/**
 * Interface representing a tree subject.
 */
export interface ITreeNode extends IDomain<ITreeNode> {
    addNode(node: TreeNode): void;
    addNode(value: string): void;
    addNode(nov: TreeNode | string): void;
    findNode(value: string): TreeNode | undefined;
    isExists(value: string): boolean;
    getValue(): string | null;
    getChildren(): ITreeNode[];
}

export class TreeNode implements ITreeNode {
    private value: string | null = null;
    private children: TreeNode[];
    constructor();
    constructor(value: string);
    constructor(value?: string) {
        this.value = value ?? null;
        this.children = [];
    }

    addNode(node: TreeNode): void;
    addNode(value: string): void;
    addNode(nov: TreeNode | string): void {
        if (nov instanceof TreeNode) {
            this.children.push(nov);
        } else {
            this.children.push(new TreeNode(nov));
        }
    }

    findNode(value: string): TreeNode | undefined {
        return this.children.find((v) => value == v.value);
    }

    isExists(value: string): boolean {
        return this.findNode(value) != undefined;
    }

    getValue(): string | null {
        return this.value;
    }

    getChildren(): ITreeNode[] {
        return this.children;
    }
}

/**
 * Detail interface for generating ITree instances.
 * @template TTree - The type of the tree.
 */
export interface iTreeNodeGenerateDetail<TTree extends ITreeNode> extends IDetail<TTree> {}

export class TreeNodeGenerateDetail implements iTreeNodeGenerateDetail<ITreeNode> {

}

export class TreeNodeFactory implements FactoryBase<ITreeNode, iTreeNodeGenerateDetail<ITreeNode>> {
    build(detail?: iTreeNodeGenerateDetail<ITreeNode> | undefined): ITreeNode | ITreeNode[] | null {
        
        return null;
    }
}

