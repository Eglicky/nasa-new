import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
    };
  }

  static get styles() {
    return [css`
    

    .image {
    display: inline-block;
    }

    .image div {
    max-width: 100px;
    font-size: 12px;
    font-weight: bold;
    }

    .image img {
    display: block;
    width: 150px;
    height: 150px;
    }

    `];
  }

  render() {
    return html`
    <div class="image">
        <img src="${this.source}" />
        <div>${this.title}</div>
    </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);