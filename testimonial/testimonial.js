      document.addEventListener("DOMContentLoaded", () => {
        // Select all pointer items and radio buttons
        // Note: We select the div inside the anchor tag for the pointers
        const pointers = document.querySelectorAll(".sliders__pointer");
        const radios = document.querySelectorAll(".radio-btn");

        // Function to handle the class switching
        function setActiveItem(index) {
          // 1. Remove 'active' class from ALL pointers
          pointers.forEach((pointer) => pointer.classList.remove("active"));

          // 2. Remove 'active' class from ALL radios
          radios.forEach((radio) => radio.classList.remove("active"));

          // 3. Add 'active' class to the specific index clicked
          if (pointers[index]) {
            pointers[index].classList.add("active");
          }
          if (radios[index]) {
            radios[index].classList.add("active");
          }
        }

        // Loop through Pointers (The cards)
        pointers.forEach((pointer, index) => {
          // We add the listener to the parent <a> tag to prevent page reload
          const parentLink = pointer.parentElement;

          parentLink.addEventListener("click", (e) => {
            e.preventDefault(); // Stop the link from jumping to top of page
            setActiveItem(index);
          });
        });

        // Loop through Radio Buttons
        radios.forEach((radio, index) => {
          radio.addEventListener("click", () => {
            setActiveItem(index);
          });
        });
      });