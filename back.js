class HeroText extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
            <style>
                #hero {
                    display: flex;
                    background-color: #1f2937;
                    padding: 50px 8%;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                .herotext{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
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
                    color: #f9faf8;
                    font-size: 18px;
                    margin-top: 5px;
                    margin-bottom: 0px;
                }
                .herobutton{
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 5px;
                    background-color: darkblue;
                    font-size: 18px;
                    color: #f9faf8;
                    padding: 5px 30px;
                    border-radius: 5px;
                    border: 0px;
                }
                #heroimage{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                }
                .placeholder{
                    width: 350px;
                    height: 250px;
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
                .herobutton:hover{
                    background-color: blue
                }
            </style>
           <div id="hero">
                <div class="herotext">
                    <p class="heromaintext">${this.getAttribute("main-text")}</p>
                    <p class="herosubtext">${this.getAttribute("sub-text")}</p>
                    <button class="herobutton">Mas informacion</button>
                </div>
                <div class="heroimage">
                    <img class="placeholder" src="${this.getAttribute("url")}" alt="placeholder">
                </div>
            </div>
        `;
        const url = this.getAttribute("urlboton");
        this.shadowRoot.querySelector(".herobutton").addEventListener("click", () => {
           window.location.href = url;
        });
    }
}
customElements.define("hero-text", HeroText);


//evento tercer boton
function video(){
    window.location.href = "https://www.youtube.com/watch?v=5zPvzHGcmgI";
}

const boton = document.querySelector("#boton");
boton.addEventListener("mouseover",function(){
    boton.style.backgroundColor = "red";
} );

boton.addEventListener("mouseout", function() {
    boton.style.backgroundColor = "";
  });

