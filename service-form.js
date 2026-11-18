emailjs.init("24nNjZwbJ1jiMR7js");

const SERVICE_ID = "service_xn1nuxp";
const TEMPLATE_ID = "template_fn9shco";

const serviceForm = document.getElementById("service-form");

if (serviceForm) {
  serviceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = serviceForm.querySelector("button[type='submit']");
    btn.disabled = true;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, serviceForm)
      .then(() => {
        serviceForm.reset();
        window.location.href = "gracias.html";
      })
      .catch((err) => {
        console.error("❌ Error:", err);
        alert("Hubo un error al enviar el mensaje, intentá de nuevo.");
        btn.disabled = false;
      });
  });
}