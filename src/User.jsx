import './User.css';

const User = ({name, lastname, image}) => {
console.log(props)
    return (
      <>
        <h1>Bonjour mon nom est {name} {lastname}</h1>
        <img src={image} alt="image de profil"/>
      </>
    );
  };
  
  export default User;