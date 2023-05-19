import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function signup(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout() {
		return auth.signOut();
	}
	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email);
	}
	function updateEmail(email) {
		return currentUser.updateEmail(email);
	}
	function updatePassword(password) {
		return currentUser.updatePassword(password);
	}
	function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const name = result.user.displayName;
				const email = result.user.email;
				const profilepic = result.user.photoURL;

				localStorage.setItem("name", name);
				localStorage.setItem("email", email);
				localStorage.setItem("profilepic", profilepic);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	});

	const state = {
		currentUser,
		login,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
		signInWithGoogle,
		signup,
	};

	return (
		<AuthContext.Provider value={state}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
