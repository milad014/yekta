class Node {
  constructor(key, data) {
    this.key = key;
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(key, data) {
    // debugger;
    const node = this.root;
    if (node === null) {
      this.root = new Node(key, data);
      return;
    } else {
      function searchTree(nodes) {
        //nodes equal this.root;
        // debugger;
        if (key < nodes.key) {
          if (nodes.left === null) {
            nodes.left = new Node(key, data);
            return;
          } else if (nodes.key !== null) {
            return searchTree(nodes.left);
          }
        } else if (key > nodes.key) {
          if (nodes.right === null) {
            nodes.right = new Node(key, data);
            return;
          } else if (nodes.data !== null) {
            return searchTree(nodes.right);
          }
        } else {
          return null;
        }
      }
      searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    if (current === null) {
      return null;
    }
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  findMax() {
    let current = this.root;
    if (current === null) {
      return null;
    }
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  remove(key, data) {
    function removeData(nodes, datas) {
      if (nodes === null) {
        return null;
      } else if (datas < nodes.data) {
        nodes.left = removeData(nodes.left, datas);
        return nodes;
      } else if (datas > nodes.data) {
        nodes.right = removeData(nodes.right, datas);
        return nodes;
      } else {
        if (nodes.left === null && nodes.right === null) {
          nodes = null;
          return nodes;
        } else if (nodes.left === null) {
          nodes = nodes.right;
          return nodes;
        } else if (nodes.right === null) {
          nodes = nodes.left;
          return nodes;
        }
        const min = this.findMinNode(nodes.right);
        nodes.data = min.data;
        nodes.right = removeData(nodes.right, min.data);
        return nodes;
      }
    }
    this.root = removeData(this.root, data);
  }
  preOrderFindDate(date) {
    return this.preOrderByDate(this.root, date, []);
  }
  preOrderByDate(root, date, objects) {
    objects = objects || [];


    if (root !== null) {
      if (root.value.date.includes(date))
        objects.push(root.value)
      this.preOrderByDate(root.left, date, objects);
      this.preOrderByDate(root.right, date, objects);
    }
    return objects;
  }
  print() {
    return this.root;
  }
}

export { Node, BinarySearchTree };
