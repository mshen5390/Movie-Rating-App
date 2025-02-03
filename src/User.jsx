import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const User = () => {
    return (
        <div className="profile-page">
          <h1>User Profile</h1>
          <p>Welcome to your profile page!</p>
          <Link to="/">Back to Home</Link>
        </div>
      );
}
export default User;