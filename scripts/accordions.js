// FUNCIONALIDADES DE ACCORDIONS

document.addEventListener("renderComplete", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        document.querySelectorAll(".faq-item").forEach((el) => {
          el.classList.remove("active");
        });

        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
});