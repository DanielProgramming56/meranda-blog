export const createNewUser = (req, res) => {
        try {
                const { first_name, last_name, email, password } = req.body
                console.log(first_name, last_name, email, password)
        } catch (error) {

        }
}

