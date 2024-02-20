import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { updateUser } from '../services/UserService'
import { postUser } from '../services/UserService';
import { toast } from 'react-toastify';

const ModalEditUser: React.FC = (props) => {
    const { show, handleClose, userEdit, handleEditUserfromModal } = props as { show: boolean, handleClose: () => void, userEdit: any, handleEditUserfromModal: (data: any) => void };

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleEditUser = async () => {
        let res = await updateUser(email, password)
        if (res && res.updatedAt) {
            handleEditUserfromModal({
                email: email,
                id: userEdit.id,
            });
            handleClose();
            toast.success("Edit user successfully");
        }
    }
    useEffect(() => {
        if (show) {
            setEmail(userEdit.email)
            setPassword(userEdit.password)
        }
    }, [userEdit])
    console.log(">>>check props:", userEdit)
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={handleEmail} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" value={password} onChange={handlePassword} />
                            </div>
                        </div>
                    </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEditUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalEditUser