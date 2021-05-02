import {db} from "../../api/firebase";
import {toast } from "react-toastify";

  const existeUsuario = async (idAmigo) => {
    const querySnapShot = await db.collection("users").get();
    var existeUsuario = false;
    querySnapShot.forEach((doc) => {
      if (String(doc.data().email.localeCompare(idAmigo)) === String(0) || (String(doc.data().pod.localeCompare(idAmigo)) === String(0))) {
        existeUsuario = true;
      }
    })
    return existeUsuario;
  };

  const eliminarAmigo = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar est@ amig@")) {
        await db.collection("amigos").doc(id).delete();
        toast.info("Has eliminado tu amig@ correctamente", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2500
        });
    }
};





export {eliminarAmigo,existeUsuario};