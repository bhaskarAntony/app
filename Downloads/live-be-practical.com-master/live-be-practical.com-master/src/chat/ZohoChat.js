// ZohoChat.js

import React, { useEffect } from 'react';

const ZohoChat = () => {
  useEffect(() => {
    // Define $zoho globally
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
      widgetcode: "siq028622a09a4566a5a47d9d936c10cad32c7bc61568fc1e93b3706bac6e03b20c",
      values: {
        name: "", // Default value for the visitor's name
        email: "", // Default value for the visitor's email
        question: "Hi, I have a question:", // Default message to initiate the conversation
        answer: "", // Default answer to a specific question
      },
      ready: function () {}
    };

    // Your Zoho SalesIQ script
    var d = document;
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.id = "zsiqscript";
    s.defer = true;
    s.src = "https://salesiq.zohopublic.in/widget";
    var t = d.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);

    // Cleanup on component unmount
    return () => {
      var scriptElement = document.getElementById("zsiqscript");
      if (scriptElement) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);

  return <div id="zsiqchat-container"></div>;
};

export default ZohoChat;
