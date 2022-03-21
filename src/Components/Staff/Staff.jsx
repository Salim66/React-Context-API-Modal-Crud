import React, { useContext } from 'react';
import { faEdit, faEye } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Container, Row, Button, Table } from 'react-bootstrap';
import StaffCreateModal from '../SfaffCreateModal/StaffCreateModal';
import StaffViewModal from '../StaffViewModal/StaffViewModal';
import './Staff.css';
import ContextManager from '../../Context/ContextManager';
import StaffEditModal from '../SfaffEditModal/StaffEditModal';

function Staff() {

    let [staffs, handleCreateModalShow, createModal, handleCreateModalClose, handleModalInput, input, handleStaffCreateForm, handleEditId, editStaff, editModal, handleEidtModalClose, handleModalEdit, handleStaffUpdateForm, handleViewId, viewStaff, viewModal, handleViewModalClose, handleDeleteId] = useContext(ContextManager);
  
  return (
    <>
        <StaffCreateModal></StaffCreateModal>
        <StaffViewModal></StaffViewModal>
        <StaffEditModal></StaffEditModal>
        <Container>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={10}>
                    <Card>
                        <Card.Header>
                            <div className='d-flex justify-content-between'>
                                <h3>All Staff</h3>
                                <Button className='btn btn-sm' onClick={ handleCreateModalShow }>Add Staff</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Photo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        staffs.map((data, index) => 
                                            <tr>
                                                <td>{ index + 1 }</td>
                                                <td>{ data.name }</td>
                                                <td>{ data.email }</td>
                                                <td>{ data.username }</td>
                                                <td>
                                                    <img style={{ width: '60px', height: '60px' }} src={ data.photo } alt="" />
                                                </td>
                                                <td>
                                                    <Button onClick={() => handleViewId(data.id)} className='btn btn-sm btn-info'><FontAwesomeIcon icon={ faEye }></FontAwesomeIcon></Button> &nbsp;
                                                    <Button onClick={() => handleEditId(data.id)} className='btn btn-sm btn-warning'><FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon></Button> &nbsp;
                                                    <Button onClick={() => handleDeleteId(data.id)} className='btn btn-sm btn-danger'><FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon></Button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
};

export default Staff;