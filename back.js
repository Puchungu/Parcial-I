/*
class Miformulario extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    margin-top: 0px;
                }
                .texto {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: darkblue;
                    margin-top: none;
                    margin-top: 0;
                }
                label {
                    font-size: 20px;
                    margin: 10px 0 5px;
                    color: #f9faf8;
                }
                button {
                    margin-top: 15px;
                    margin-bottom: 15px;
                    padding: 10px 20px;
                    font-size: 15px;
                    color: white;
                    background-color: #007BFF;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
                
                h1{
                    color: #f9faf8;
                }
            </style>
            <div class="container">
                <div class="texto">
                    <h1>Formulario</h1>
                        <label>Usuario</label>
                        <input>
                        <label>Password</label>
                        <input type="password">
                        <button>Enviar</button>
                </div>
            </div>
        `;  
    }
}
customElements.define("mi-formulario", Miformulario);
*/

/*
class HeroText extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
            <style>
                #hero {
                    display: flex;
                    background-color: darkblue;
                    padding: 50px 8%;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                .herotext{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    flex-wrap: wrap;
                }        
                .heromaintext{
                    display: flex;
                    flex-wrap: wrap;
                    color: #f9faf8;
                    font-weight: 900;
                    font-size: 48px;
                    margin-bottom: 0px;
                }
                .herosubtext{
                    display: flex;
                    flex-wrap: wrap;
                    color: #e5e7eb;
                    font-size: 18px;
                    margin-top: 5px;
                    margin-bottom: 0px;
                }
                .herobutton{
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 5px;
                    background-color: #3882f6;
                    font-size: 18px;
                    color: #f9faf8;
                    padding: 5px 30px;
                    border-radius: 5px;
                    border: 0px;
                }
                #heroimage{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    align-items: center;
                }

                .placeholder{
                    margin-top: 10px;
                    width: 100%;
                    height: auto;
                }
            </style>
           <div id="hero">
                <div class="herotext">
                    <p class="heromaintext">${this.getAttribute("main-text")}</p>
                    <p class="herosubtext">${this.getAttribute("sub-text")}</p>
                </div>
                <div class="heroimage">
                    <img class="placeholder" src="${this.getAttribute("url")}" alt="placeholder">
                </div>     
            </div>
        `;
    }
}
customElements.define("hero-text", HeroText);
*/

