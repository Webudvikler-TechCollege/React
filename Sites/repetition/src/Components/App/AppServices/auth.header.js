const authHeader = () => {
  // Henter localstorage hvis den eksisterer
  const current_token = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

	// Smider token i en auth header hvis den eksisterer
	if(current_token) {
		return {
			"Access-Control-Allow-Origin" : "*",
			"Authorization" : `Bearer ${current_token.access_token}`
		}
	} else {
		return {}
	}
};

export default authHeader;
