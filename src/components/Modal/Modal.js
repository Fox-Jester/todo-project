import { createModal } from "./createModal.js"
import applyModalListeners from "./modalEvents.js"

class Modal {
    static create = (type, onCreate) => {
         createModal(type);
         applyModalListeners(type, onCreate);
    }
};

export default Modal;