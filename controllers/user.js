const { addDoc, getDocs, updateDoc, doc, deleteDoc } = require("firebase/firestore");
const User = require("../config/firebaseConfig");

//================== Create User=======================//

const createUser = async (req, res) => {
    const data = req.body;
    try {
        await addDoc(User, data);
        res.send({ status: 1, msg: "User added successfully" });
    } catch (error) {
        res.send({ status: 0, msg: "Error adding user", error });
    }
};

//========================Get User============================//

const getAllUsers = async (req, res) => {
    try {
        const snapshot = await getDocs(User);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (data) {
            res.send({ status: 1, msg: "Data fetched successfully", data });
        } else {
            res.send({ status: 0, msg: "data not found", data: [] })
        }
    } catch (error) {
        res.send({ status: 0, msg: "Error fetching data", error });
    }
};

// ==============================Update User===========================//

const updateUser = async (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.send({ status: 0, msg: "Document ID is required" });
    }
    try {
        delete req.body.id;
        const data = req.body;
        const docRef = doc(User, id);
        await updateDoc(docRef, data);
        res.send({ status: 1, msg: "Data updated successfully" });
    } catch (error) {
        res.send({ status: 0, msg: "Error updating document", error });
    }
};

// =====================delete a user====================================//

const deleteUser = async (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.send({ status: 0, msg: "Document ID is required" });
    }
    try {
        const docRef = doc(User, id);
        await deleteDoc(docRef);
        res.send({ status: 1, msg: "Document deleted successfully" });
    } catch (error) {
        res.status(500).send({ msg: "Error deleting document", error });
    }
};

module.exports = { createUser, getAllUsers, updateUser, deleteUser };
