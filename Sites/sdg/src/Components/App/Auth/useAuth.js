import create from 'zustand'

export const useAuth = create(set => {
	return {
		// Getter: true hvis token er sat
		loggedIn : Boolean(sessionStorage.getItem('token')),
		// 
		setLoggedIn : (loggedIn = true) => set(() => {
			if(!loggedIn) {
				sessionStorage.removeItem('token')
			}
			return { loggedIn }
		}),
		setLogOut: () => {
			set((state) => {
				sessionStorage.removeItem('token')
				state.loggedIn = false
			})
		}
	}
})