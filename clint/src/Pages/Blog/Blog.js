import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-gray-900 rounded-box"
      >
        <div className="collapse-title text-white text-xl font-medium">
        Difference between SQL and NoSQL?
        </div>
        <div className="collapse-content">
          <p className="text-white">tabIndex={0} Difference between SQL and NoSQL? SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-gray-900 rounded-box"
      >
        <div className="collapse-title text-white text-xl font-medium">
        What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p className="text-white">tabIndex={1}JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-gray-900 rounded-box"
      >
        <div className="collapse-title text-white text-xl font-medium">
        How does NodeJS handle multiple requests at the same time?t
        </div>
        <div className="collapse-content">
          <p className="text-white">tabIndex={2} NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-gray-900 rounded-box"
      >
        <div className="collapse-title text-white text-xl font-medium">
        What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p className="text-white">tabIndex={3} JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
