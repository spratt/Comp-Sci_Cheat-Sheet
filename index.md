By [Simon Pratt](http://pr4tt.com)

## [Data Structures](http://opendatastructures.org)

### [Array](http://opendatastructures.org/ods-java/2_Array_Based_Lists.html)

A fixed number of sequential memory locations, into which data is
inserted sequentially beginning with the lowest or highest memory
address.  A counter keeps track of how many of the memory locations
contain data.  

This structure provides constant-time access to any element and
constant-time insertion or removal at the end, using constant extra
space.

### [Linked List](http://opendatastructures.org/ods-java/3_Linked_Lists.html)

A pointer to a series of nodes, each of which contain a datum and a
pointer to the next node in the list.

![Linked List](http://opendatastructures.org/ods-java/img500.png)

This structure provides constant removal from the start, and a pointer
to the tail is a simple optimization which allows constant-time
insertion at the end.

### Binary Tree

A binary tree stores elements in a well-defined ordering.  Each node
of the tree stores an element along with pointers to left and right
children.  The left child and all its children contain elements which
precede or are equal to the element at the node.  Similarly for the
right child and all its children.

A perfectly balanced binary tree has logarithmic query time.

### Skiplist

TODO

## [Algorithms](http://compgeom.cs.uiuc.edu/~jeffe/teaching/algorithms/)

### Binary Search

Given a sorted array and a query item, comparing the middle element to
the query item determines whether the query element belongs in the
first or second halves of the array.  This means each check eliminates
half of the search space.  Recursive application of this fact takes
logarithmic time to find the position of the query item in the array.

### Dijkstra's Algorithm

TODO

## Attribution

Many of the images, including the image of the linked list, are from
[Pat Morin's excellent data structures
book](http://opendatastructures.org/).
