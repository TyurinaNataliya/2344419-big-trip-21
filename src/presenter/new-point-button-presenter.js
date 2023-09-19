import NewPointButtonView from '../view/new-point-button-view.js';
import { render } from '../framework/render.js';

export default class NewPointButtonPresenter {
  #container = null;
  #button = null;
  #handleButtonClick = null;

  constructor({container}){
    this.#container = container;
  }

  init({onButtonClick}){
    this.#handleButtonClick = onButtonClick;
    this.#button = new NewPointButtonView({onClick:this.#buttonClickHendler});
    render(this.#button,this.#container);
  }

  disableButton(){
    this.#button.setDisabled(true);
  }

  enebleButton(){
    this.#button.setDisabled(false);
  }

  #buttonClickHendler = () =>{
    this.#handleButtonClick();
  };

}
