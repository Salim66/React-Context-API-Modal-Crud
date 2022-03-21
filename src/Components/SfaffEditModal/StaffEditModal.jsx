import React, { useContext } from 'react';
import { CloseButton, Form, Modal, Button } from 'react-bootstrap';
import ContextManager from '../../Context/ContextManager';
import './StaffEditModal.css';

const StaffEditModal = () => {

    let [staffs, handleCreateModalShow, createModal, handleCreateModalClose, handleModalInput, input, handleStaffCreateForm, handleEditId, editStaff, editModal, handleEidtModalClose, handleModalEdit, handleStaffUpdateForm, handleViewId, viewStaff, viewModal, handleViewModalClose, handleDeleteId] = useContext(ContextManager);

  return (
    <Modal show={editModal} onHide={handleEidtModalClose}>
        <Modal.Header>
            <h4 className='d-flex justify-content-between'>Edit Staff </h4> <CloseButton onClick={handleEidtModalClose}></CloseButton>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleStaffUpdateForm}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' value={editStaff.name} onChange={ (e) => handleModalEdit(e) } />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' value={editStaff.email} onChange={ (e) => handleModalEdit(e) } />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phooto</Form.Label>
                    <Form.Control name='photo' value={editStaff.photo} onChange={ (e) => handleModalEdit(e) } />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name='username' value={editStaff.username} onChange={ (e) => handleModalEdit(e) } />
                </Form.Group><br />
                <Form.Group>
                    <Button type='submit' className='btn btn-sm btn-primary'>Update</Button>
                </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
  )
};

export default StaffEditModal;