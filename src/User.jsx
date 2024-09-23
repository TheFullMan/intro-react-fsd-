import './User.css';

const User = () => {

    const info = {
        name : 'Samuel',
        lastName : 'Armagnac',
        age : 27
    }; 

    const isAuthenticated = true;

    return (
      <div className="user-container">
        {isAuthenticated ? (
            <h1>Welcome {info.name}!</h1>
        ) : (
            <h1>Please Sign In</h1>
        )}
        <p>
            Fan de gaming, je suis en train d'apprendre à coder pour pouvoir coder mon propre Jeu un jour !
        </p>
      </div>
    );
  };
  
  export default User;