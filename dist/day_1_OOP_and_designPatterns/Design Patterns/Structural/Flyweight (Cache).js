"use strict";
class TreeType {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    display(x, y) {
        console.log(`Render a ${this.color} ${this.name} tree at position (${x}, ${y})`);
    }
}
class Tree {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    display() {
        this.type.display(this.x, this.y);
    }
}
class Forest {
    constructor() {
        this.treeTypes = new Map();
        this.trees = [];
    }
    getTreeType(name, color) {
        const key = `${name}_${color}`;
        if (!this.treeTypes.has(key)) {
            this.treeTypes.set(key, new TreeType(name, color));
        }
        return this.treeTypes.get(key);
    }
    plantTree(x, y, name, color) {
        const type = this.getTreeType(name, color);
        const tree = new Tree(x, y, type);
        this.trees.push(tree);
    }
    display() {
        this.trees.forEach((tree) => tree.display());
    }
}
// Use case
const forest = new Forest();
forest.plantTree(1, 1, "Pine", "Green");
forest.plantTree(3, 4, "Oak", "DarkGreen");
