// ============================================
//       012 - Asynchronous JavaScript
// ============================================


// === CHALLENGE: “Callback Hell” ===

// Mostrar tres mensajes, uno después del otro, usando setTimeout:

// 1️⃣ "Preparando..."
// 2️⃣ "Cargando datos..."
// 3️⃣ "Listo!"

function showMessages() {
   setTimeout(() => {
     console.log("preparando");
     setTimeout(() => {
       console.log("cargando");
       setTimeout(() => {
         console.log("listo");
       }, 1000);
     }, 1000);
   }, 1000);
 }
 showMessages()