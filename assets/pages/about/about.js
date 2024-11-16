// java script du FAQ

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((item) => {
      const reponse = item.querySelector(".reponse");
      const icone = item.querySelector("i");

      if (item !== faq) {
        reponse.style.display = "hidden";
        icone.classList.add("fa-circle-down");
        icone.classList.remove("fa-circle-up");
      }
    });

    const reponse = faq.querySelector(".reponse");
    if (reponse.classList.contains("hidden")) {
      reponse.classList.remove("hidden");
    } else {
      reponse.classList.add("hidden");
    }

    const icone = faq.querySelector("i");
    icone.classList.toggle("fa-circle-up");
    icone.classList.toggle("fa-circle-down");
  });
});
