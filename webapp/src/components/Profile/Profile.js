import React from "react";
import { Value} from "@solid/react";
import { Image} from '@material-ui/icons';
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.css";
import DocumentTitle from "react-document-title";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    return (
      <DocumentTitle title="Perfil">
        <div className="prueba">
          <h2 className="h2" data-testId="label">Este es tu Perfil, <Value src="Raul" /> </h2>
          <br></br>
            <Image className = "imagen"
              source={{
                uri: 'https://uo263918.solidcommunity.net/profile/img001.jpg',
              }}
            />
       </div>
      </DocumentTitle>
    );
  };


export default Profile;