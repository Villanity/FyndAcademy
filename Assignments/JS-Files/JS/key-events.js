
      document.addEventListener("keydown", function(event) {
        console.log("Key down:", event.key);
      });
      
      document.addEventListener("keyup", function(event) {
        console.log("Key up:", event.key);
      });
      
      document.addEventListener("keypress", function(event) {
        console.log("Key pressed:", event.key);
      });
    