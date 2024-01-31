const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personas: [" Pedro ", " Maria "],
			registerStatus: false,
		},
		actions: {

			exampleFunction: () => {
				console.log("hola")
				return
			},

			register: async (name, email, password) => {
				try {
					const data = {
						name: name,
						email: email,
						password: password
					};

					const response = await fetch("http://127.0.0.1:5000/users", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					});

					const statusCode = response.status;
					const responseData = await response.json();

					if (statusCode === 201) {
						setStore({ ...getStore(), registerStatus: true });
					}

					return responseData;
				} catch (error) {
					console.error("Error:", error);
					throw error;
				}
			},

		}
	};
};

export default getState;