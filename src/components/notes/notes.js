import React, { Component } from 'react';
import './notes.css'
class Notes extends Component {
  render() {
    return (
      <div className="notes">
          <header>
            {/* heading */}
            <h1> Notes </h1>
          </header>

          <section>
              <div className="sidebar">
                {/* sidebar */}
                  <div>
                    <p>Linked List</p>
                    <p>Singly Linked List</p>
                    <p>Doubly Linked List</p>
                    <p>Circular Linked List</p>
                  </div>
              </div>

              <div className="contenttab">
                {/* main content */}
                <p>A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image:</p>
              </div>
          </section>

      </div>
    );
  }
}

export default Notes;
