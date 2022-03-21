import React, { useContext } from 'react';
import { CloseButton, Form, Modal, Button } from 'react-bootstrap';
import ContextManager from '../../Context/ContextManager';
import './StaffCreateModal.css';

const StaffCreateModal = () => {

    let [staffs, handleCreateModalShow, createModal, handleCreateModalClose, handleModalInput, input, handleStaffCreateForm, handleEditId, editStaff, editModal, handleEidtModalClose, handleModalEdit, handleStaffUpdateForm, handleViewId, viewStaff, viewModal, handleViewModalClose, handleDeleteId] = useContext(ContextManager);

  return (
    <Modal show={createModal} onHide={handleCreateModalClose}>
        <Modal.Header>
            <h4 className='d-flex justify-content-between'>Create New Staff </h4> <CloseButton onClick={handleCreateModalClose}></CloseButton>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleStaffCreateForm} method='POST'>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' value={input.name} onChange={ (e) => handleModalInput(e) } />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' value={input.email} onChange={ (e) => handleModalInput(e) } />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phooto</Form.Label>
                    <Form.Control name='photo' value={input.photo} onChange={ (e) => handleModalInput(e) } />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name='username' value={input.username} onChange={ (e) => handleModalInput(e) } />
                </Form.Group><br />
                <Form.Group>
                    <Button type='submit' className='btn btn-sm btn-primary'>Add New</Button>
                </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
  )
};

export default StaffCreateModal;