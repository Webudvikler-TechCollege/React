const authHeader = () => {
  // Henter localstorage hvis den eksisterer
  const current_token = sessionStorage.getItem("token")
    ? JSON.parse(sessionStorage.getItem("token"))
    : "";
	console.log(current_token);

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
