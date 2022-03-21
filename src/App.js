import React, {useEffect, useState} from 'react';
import './App.css';
import Staff from './Components/Staff/Staff';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextManager from './Context/ContextManager';
import swal from 'sweetalert';
import axios from 'axios';

function App() {

  const [staffs, setStaff] = useState([]);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [input, setInput] = useState({
    name: '',
    email: '',
    username: '',
    photo: ''
  });

  const [editStaff, setEditStaff] = useState(0);
  const [editId, setEditId] = useState(0);
  const [viewStaff, setViewStaff] = useState([]);

  useEffect(() => {
    handleAllStaff();
  }, []);

  async function handleAllStaff(){
    let res = await axios.get('http://localhost:5050/staff');
    setStaff(res.data);
  }

  let handleCreateModalShow = () => setCreateModal(true);
  let handleCreateModalClose = () => setCreateModal(false);

  let handleEditModalShow = () => setEditModal(true);
  let handleEidtModalClose = () => setEditModal(false);

  let handleViewModalShow = () => setViewModal(true);
  let handleViewModalClose = () => setViewModal(false);

  let handleModalInput = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
  }

  let handleStaffCreateForm = (e) => {
    e.preventDefault();
    // console.log(input);
    axios.post('http://localhost:5050/staff', input).then(res => {

      axios.get('http://localhost:5050/staff').then(res => setStaff(res.data));

    });

    setInput({
      name: '',
      email: '',
      username: '',
      photo: ''
    });

    handleCreateModalClose();

  }


  let handleEditId = (id) => {
    setEditId(id);
    axios.get('http://localhost:5050/staff/' + id).then(res => setEditStaff(res.data));

    handleEditModalShow();

  }

  let handleViewId = (id) => {

    axios.get('http://localhost:5050/staff/' + id).then(res => setViewStaff(res.data));

    handleViewModalShow();

  }

  let handleDeleteId = (id) => {

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {

          axios.delete('http://localhost:5050/staff/' + id).then(res => {
              axios.get('http://localhost:5050/staff').then(res => setStaff(res.data));
          });

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
   });

  }

  let handleModalEdit = (e) => {
    setEditStaff({
      ...editStaff,
      [e.target.name] : e.target.value
    });
  }

  let handleStaffUpdateForm = (e) => {
    e.preventDefault();
    // alert(editId);
    // console.log(editStaff);




    axios.patch("http://localhost:5050/staff/" + editId, editStaff ).then(res => {

          axios.get('http://localhost:5050/staff').then(res => setStaff(res.data));

          handleEidtModalClose();
      
      });


  }
  
  
 

  return (
    <>
      <ContextManager.Provider value={[staffs, handleCreateModalShow, createModal, handleCreateModalClose, handleModalInput, input, handleStaffCreateForm, handleEditId, editStaff, editModal, handleEidtModalClose, handleModalEdit, handleStaffUpdateForm, handleViewId, viewStaff, viewModal, handleViewModalClose, handleDeleteId]}>
        <Staff></Staff>
      </ContextManager.Provider>
    </>
  );
}

export default App;
