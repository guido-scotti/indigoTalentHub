
# 🚀 Indigo Talent Hub - Landing Page

¡Bienvenido al repositorio de la Landing Page oficial de **Indigo Talent Hub**! Este proyecto fue desarrollado para proporcionar una interfaz moderna, rápida y funcional, enfocada en la captación de talento y contacto empresarial.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![GoDaddy](https://img.shields.io/badge/godaddy-%231BDBDB.svg?style=for-the-badge&logo=godaddy&logoColor=white)
![Google Workspace](https://img.shields.io/badge/google_workspace-4285F4?style=for-the-badge&logo=google-workspace&logoColor=white)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guidoscotti/)
![Vercel Deploy](https://img.shields.io/badge/deploy-success-brightgreen?style=flat-square&logo=vercel)

## 🌐 Demo
Puedes ver el sitio en vivo aquí: [indigotalenthub.com](https://indigotalenthub.com)

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Despliegue:** [Vercel](https://vercel.com) (Configuración de DNS personalizada y SSL)
* **Servicio de Email:** [EmailJS](https://www.emailjs.com/) con integración de Google Workspace
* **Dominio:** Gestionado originalmente en GoDaddy y delegado a Vercel.

---

## 🚀 Desafíos Técnicos y Soluciones

Este proyecto incluyó una gestión avanzada de infraestructura que demuestra habilidades en administración de dominios y servicios cloud:

### 1. Migración de DNS y Rescate de Correo Corporativo
Se realizó una delegación de **Nameservers** desde GoDaddy hacia Vercel para optimizar el despliegue. Durante el proceso, se re-configuraron manualmente los **Registros MX de Google Workspace** y registros **SPF** para garantizar la continuidad del servicio de correo empresarial, resolviendo errores de propagación (Error 550 5.1.1).

### 2. Integración de Formulario Inteligente
Se implementó un sistema de contacto robusto utilizando **EmailJS**:
* **Seguridad:** Configuración de filtros para evitar spam.
* **UX:** Validación de campos en tiempo real y feedback al usuario tras el envío.
* **OAuth2:** Vinculación segura con servidores de Gmail.

---

## 📦 Instalación y Configuración Local

Si deseas correr este proyecto localmente:

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/guido-scotti/indigoTalentHub.git](https://github.com/guido-scotti/indigoTalentHub.git)

2. Abre el proyecto: Puedes usar el plugin Live Server en VS Code o simplemente abrir el index.html.

3. Variables de Entorno: Para que el formulario funcione, asegúrate de configurar tus propias llaves de EmailJS en el script principal:

  - PUBLIC_KEY

  - SERVICE_ID

  - TEMPLATE_ID

## 📸 Preview del Proyecto

<p align="center">
  <img src="./assets/ssIndigo.png" alt="Screenshot de la Landing Page" width="800px">
</p>

---

Desarrollado por Guido Scotti.

LinkedIn: [Perfil de Linkedin](https://www.linkedin.com/in/guidoscotti/)

Portafolio: [Mi portfolio web](https://guido-scotti.vercel.app/)

© 2026 Indigo Talent Hub. Todos los derechos reservados.
