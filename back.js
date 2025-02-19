
// Sin  slot

class MiElemento extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        // Obtener valores pasados en el HTML
        const titulo = this.getAttribute("titulo");
        const descripcion = this.getAttribute("descripcion");

        // Definir la estructura del componente
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 2px solid #444;
                    border-radius: 10px;
                    padding: 15px;
                    width: 200px;
                    text-align: center;
                    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
                    font-family: Arial, sans-serif;
                }
                .title {
                    font-size: 18px;
                    font-weight: bold;
                }
                .desc {
                    font-size: 14px;
                    color: #555;
                }
            </style>
            <div class="card">
                <div class="title">${titulo}</div>
                <div class="desc">${descripcion}</div>
            </div>
        `;
    }
}

window.customElements.define('mi-elemento', MiElemento)

// Con slot

class MiElemento2 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    display: flex;
                    flex-wrap: wrap;
                    border: 2px solid #444;
                    border-radius: 10px;
                    padding: 15px;
                    width: 200px;
                    text-align: center;
                    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
                    font-family: Arial, sans-serif;
                }
                .title {
                    font-size: 18px;
                    font-weight: bold;
                }
                .desc {
                    font-size: 14px;
                    color: #555;
                }
            </style>
            <div class="card">
                <slot></slot> <!-- Aquí se insertará el contenido -->
            </div>
        `;
    }
}

customElements.define("mi-elemento2", MiElemento2);

// Usando estilos desde otro archivo css
class MiElemento3 extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      // Creas un enlace a tu archivo CSS externo
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "styles.css";  // Ruta del archivo CSS
  
      // Asegúrate de agregar el enlace al shadowRoot
      this.shadowRoot.appendChild(link);
  
      // El contenido HTML del componente
      this.shadowRoot.innerHTML +=`
    <div class="container">
        <div class="card">
          <h2>${this.getAttribute('titulo')}</h2>
          <p>${this.getAttribute('descripcion')}</p>
        </div>
    </div>
      `;
    }
  }
customElements.define("mi-elemento3", MiElemento3);