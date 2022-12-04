import * as bootstrap from "bootstrap";
import { MutableRefObject } from "react";

export function OpenModalBootstrap(elementRef: MutableRefObject<any>) {
    const modalEle = elementRef.current
    const bsModal = new bootstrap.Modal(modalEle, {
        backdrop: 'static',
        keyboard: true,
    })
    bsModal.show();
}
export function CloseModalBootstrap(elementRef: MutableRefObject<any>) {
    const modalEle = elementRef.current
    var bsModal = bootstrap.Modal.getInstance(modalEle)
    bsModal?.hide();
}
export class ConfigModal {
    modalRef: MutableRefObject<any>;
    width: number;
    constructor(width: number, modalRef: MutableRefObject<any>) {
        this.width = width;
        this.modalRef = modalRef;
    }
}