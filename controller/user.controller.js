const getAllUsers = (req, res) => {


    const { page, limit = 10 } = req.query

    res.status(200).json({

        message: 'Get all',
        pagination: { page, limit}
    })

}

const getOneUser = (req, res) => {


    res.status(200).json({

        message: 'Get one'
    })

}

const createNewUser = (req, res) => {

    const body = req.body;
    res.status(200).json({

        message: 'Create',
        body: body

    })

}

const updateUser = (req, res) => {
    
    const id = req.params;
    const body = req.body;


    res.status(200).json({

        message: 'Update',
        body: body,
        id: id
    })

}

const deleteUser = (req, res) => {


    res.status(200).json({

        message: 'Delete'
    })

}


module.exports = {

    createNewUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,

}