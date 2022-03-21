import React, { useContext } from 'react';
import { Modal, Card, Col, Container, Row, Table } from 'react-bootstrap';
import ContextManager from '../../Context/ContextManager';

const StaffViewModal = () => {

    let [staffs, handleCreateModalShow, createModal, handleCreateModalClose, handleModalInput, input, handleStaffCreateForm, handleEditId, editStaff, editModal, handleEidtModalClose, handleModalEdit, handleStaffUpdateForm, handleViewId, viewStaff, viewModal, handleViewModalClose, handleDeleteId] = useContext(ContextManager);

    // console.log(viewStaff);

  return (
    <Container>
        <Row className='d-flex justify-content-center'>
            <Col md={3}>
                <Modal show={viewModal} onHide={handleViewModalClose}>
                    <Modal.Body>
                        <Card>
                            <img style={{ width: '100%', height: '400px' }} src={ viewStaff.photo } />
                            <Card.Body>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Username</td>
                                            <td>{ viewStaff.username }</td>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td>{ viewStaff.name }</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{ viewStaff.email }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    </Container>
  )
};

export default StaffViewModal;