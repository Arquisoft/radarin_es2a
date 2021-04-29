import React, { Fragment } from 'react';
import data from "@solid/query-ldflex";

import { Value, Link } from "@solid/react";
import DocumentTitle from "react-document-title";
import { Image} from "@solid/react";

function Profile (){

  const webId = sessionStorage.getItem("pod");
  const image = data[webId].vcard_hasPhoto;

  if (webId !== null){
    return (
      <div>
        <br></br>
        
      <DocumentTitle title="Profile">
          <div className="prueba">
            <Image src={image} defaultSrc="/img/defaultUser.png" />
            <h2><Value src="user.name"></Value></h2>
                      <p><Link href={`${webId}`}>Acceder a mi pod</Link></p>
            </div>
            </DocumentTitle>
      </div>
  );
  }
  else{
    return (
          <DocumentTitle title="Profile">
          <div className="prueba">
            <h2 className="h2" data-testId="label">No estas logueado con tu pod</h2>
            </div>
            </DocumentTitle>
    );
  }
  
 
}

export default Profile;