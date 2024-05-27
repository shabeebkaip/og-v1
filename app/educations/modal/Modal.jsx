import ReactDOM from 'react-dom';
import './modal.css';

const Backdrop = (props) => {
    return (
        <div onClick={props.hideHandler} className='backdrop' />
    );
};

const ModelOverlays = (props) => {
    return (
        <div className='modal'>{props.children}</div>
    );
};

const Modal = (props) => {
    if (typeof window === 'undefined') {
        // Return null or any fallback content if running on the server-side
        return null;
    }

    // Access DOM element only on the client-side
    const portalElements = document.getElementById('overlays');

    if (!portalElements) {
        return null; // Return null or any fallback content if the portal element is not found
    }

    return (
        <div>
            {ReactDOM.createPortal(<Backdrop hideHandler={props.hideHandler} />, portalElements)}
            {ReactDOM.createPortal(<ModelOverlays>{props.children}</ModelOverlays>, portalElements)}
        </div>
    );
};

export default Modal;
