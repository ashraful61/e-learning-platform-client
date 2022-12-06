import React from "react";

const Blog = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl py-3">What is cors ? </h1>
      <p>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
        that allows a server to indicate any origins (domain, scheme, or port)
        other than its own from which a browser should permit loading resources.
        CORS also relies on a mechanism by which browsers make a "preflight"
        request to the server hosting the cross-origin resource, in order to
        check that the server will permit the actual request. In that preflight,
        the browser sends headers that indicate the HTTP method and headers that
        will be used in the actual request.
      </p>
      <h1 className="text-2xl py-3">Why are you using firebase? What other options do you have to implement authentication ? </h1>
      <p>
      Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
      </p>

      <h1 className="text-2xl py-3">How does the private route work?</h1>

      <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property</p>
      <h1 className="text-2xl py-3">What is Node? How does Node work?</h1>
      <p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.</p>
    </div>
  );
};

export default Blog;
