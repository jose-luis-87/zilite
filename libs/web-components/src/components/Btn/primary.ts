import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-button')
export class CustomButton extends LitElement {
  // Declarar los estilos con `override`
  static styles = css`
    button {
      background-color: #6200ee;
      color: #ffffff;
      border: none;
      padding: 0.5em 1em;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #3700b3;
    }
  `; 

  // Propiedad reactiva para la etiqueta del botón
  @property({ type: String }) // Corrección en la definición de la propiedad
  label = 'Click Me';

  // Método que maneja el evento click
  private onClick(): void {
    console.log('Botón presionado');
    this.dispatchEvent(new CustomEvent('button-click', {
      detail: { message: 'El botón ha sido presionado' },
      bubbles: true,
      composed: true
    }));
  }

  // Renderizado del componente con `override`
  render() {
    return html`<button @click=${this.onClick}>${this.label}</button>`;
  }
}
