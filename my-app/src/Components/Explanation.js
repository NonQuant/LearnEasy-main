import axios from "axios";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { SlBookOpen } from "react-icons/sl";
import { TbSearch } from "react-icons/tb";
import Modal from "react-modal";
import gif from "./images/loading-gif.gif";

Modal.setAppElement("#root");

export class Explanation extends React.Component {
    url = "http://localhost:8000/api/create-explanation/";
    constructor() {
        super();
        this.state = {
            showModal: false,
            currentText: "",
        };
        // reference for input tag
        this.inputRef = React.createRef();
        this.loadingRef = React.createRef();
        this.gifRef = React.createRef();

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    render() {
        // function for fetching response from ChatGPT and setting current text
        const setText = (text) => {
            console.log('Thinking...')
            this.loadingRef.current.style.display = "block"
            this.gifRef.current.style.display = "inline"
            return axios.post(this.url, { "text": text }).then((res) => {
                this.setState({
                    currentText: res.data.explanation,
                })
                console.log("Done!")
                this.loadingRef.current.style.display = "none"
            });
        }
        return (
            <div className="functions__explanations"
            onMouseEnter={() => {
                document.querySelector("#explanation_onhover").style.display = "flex";
              }}
            onMouseLeave={() => {
                document.querySelector("#explanation_onhover").style.display = "none";
              }}>
                <div
                className="functions__onhover"
                id="explanation_onhover"
                style={{display: "none"}}>
                    <span className="functions__onhover__header">Справочник</span>
                    <span className="functions__onhover__text">Получить ответ на вопрос</span>
                </div>
                <SlBookOpen onClick={this.handleOpenModal} className="functions__button" />
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="functions__explanations__Modal"
                    overlayClassName="functions__explanations__Overlay"
                >
                    <h1>Объяснение</h1>
                    <button
                        className="functions__explanations__Modal-button button__close"
                        onClick={this.handleCloseModal}
                    >
                        <GrFormClose />
                    </button>
                    <div className="functions__explanations__Modal__input-wrapper">
                        <input className="functions__explanations__Modal-input"
                            ref={this.inputRef}
                            type="text"
                            placeholder="Ввод данных..."></input>
                        <button
                            className="functions__explanations__Modal-button button__seacrh"
                            onClick={() => {
                                setText(this.inputRef.current.value);
                            }}>
                            <TbSearch />
                        </button>
                    </div>
                    <div ref={this.loadingRef} style={{ display: "none", paddingRight: "5px" }}>Получение ответа...
                        <img ref={this.gifRef} style={{ display: "none" }} src={gif} width="20px" height="20px" /></div>

                    <output
                        placeholder=""
                        className="functions__explanations__Modal-output"
                    >{this.state.currentText}</output>
                </Modal>
            </div>
        );
    }
}
