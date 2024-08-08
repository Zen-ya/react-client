import React, { useState, useEffect } from 'react';


const Profile = () => {

  const [user, setUser] = useState(null);

  const token = localStorage.getItem('token'); // Récupérer le token
  const UserName = localStorage.getItem('UserName'); // Récupérer l'ID utilisateur
  const Email = localStorage.getItem('Email');

  console.log(UserName);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5555/api/users/${Email}`, {
          headers: {
            'Authorization': `Bearer ${token}` // Ajouter le token dans l'en-tête Authorization
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error('Erreur de récupération des données utilisateur');
        }
      } catch (err) {
        console.error('Erreur de récupération des données utilisateur', err);
      }
    };

    fetchUser();
  }, [token, UserName]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome {UserName} !</h1>
      <h2>Profile</h2>
      <p>UserName: {user.UserName}</p>
      <p>Email: {user.Email}</p>
      <p>Phone: {user.Phone}</p>
      <p>Birthday: {new Date(user.Birthday).toLocaleDateString()}</p>

      <img src={user.AvatarUrl} alt="Avatar" />
      <br></br>
      <ul className="nav-links">
        <li><a href="/update-profile">Update Profile</a></li>
        <li><a href="/Addsong">Add song</a></li>
      </ul>
      <button onClick={() => localStorage.clear()}><a href='/login'>Log out</a></button>
    </div>
    
  );
};

export default Profile;
