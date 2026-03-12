export const getAllTasks = (req, res) => {
    res.status(200).send({ message: 'Co 1 task can lam' });
}

export const createTasks = (req, res) => {
    res.status(201).json({ message: 'Nhiệm vụ thêm vào thanh công' });
}

export const updateTask = (req, res) => {
    res.status(200).json({ message: 'Nhiệm vụ update thanh công' });
}

export const deleteTask = (req, res) => {
    res.status(200).json({ message: 'Nhiệm vụ delete thanh công' });
}