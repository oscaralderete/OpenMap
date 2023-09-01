# Custom Web Element for OpenMap

Last month, I freelanced in an interesting project. It was originally planned as a WordPress plugin and later develop a script for Laravel and even a small program for Python.

After get access and read the whole project details (the plugin/script should fetch data from an API, parse and render it in form of a pair of tables and 3 svg pie charts) I suggested to develop it in an alternative way: insted write code for different platforms and server languages just develop it as a custom web element, as simple as that because a web element is language server agnostic and runs like any other html tag.

But someone said: "Can a web element fetch or access external APIs?", the answer was (and it's) yes! In that moment I said, "let me explain or even better, let me show how..." I took my GitHub project about [OpenStreetmaps](https://github.com/oscaralderete/markers-on-openstreetmap), copied the basic estructure of a web element and 5 minutes later I presented them a functional map developed as a web element.

Last weekend I refactored that simple code to add some nice features as default values, easy configuration and personalizable popup (I put a video inside one of the examples, just check it out!). This is so simple, so easy to code that I dare you to write your own version for Google Maps or another map provider. You can extend it to make it compatible with React, Vue or Svelte, because at the end it's just a JavaScript component.

If you're interested, you can contact me, I manage a small but ambicious web agency:
[Web+apps Para Emprendedores](https://wpe.oscaralderete.com) we develop solutions for internet entrepreneurs and anyone in need for a taylor made web/mobile application.
