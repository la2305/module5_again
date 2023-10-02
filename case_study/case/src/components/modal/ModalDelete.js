import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function ModalDelete({ showModal, hideModal, confirm }) {

    return (
        <>
            <Modal show={showModal.show} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Confirm delete {showModal.info.name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={hideModal}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => confirm(showModal.info.id)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;