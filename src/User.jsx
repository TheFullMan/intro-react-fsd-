import './User.css';

const User = ({name, lastName, image}) => {
    return (
      <>
        <h1>Bonjour mon nom est {name} {lastName}</h1>
        <img src={image} alt="image de profil"/>
      </>
    );
  };
  
  export default User;