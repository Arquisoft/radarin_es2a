import {db} from '../../api/firebase'



const addUserPos = async (lat,lng) => {
    const emailSession = window.sessionStorage.getItem('user');
    const userPos={
        email: emailSession,
        lat: lat,
        lng: lng
    }
        await db.collection('locations').
        doc(emailSession).
        set(userPos)
    }

const getUserPos = async (email) => {
    const coords = await db.collection('locations')
    .doc(email).get()
    return coords;
}

export default {addUserPos, getUserPos};

