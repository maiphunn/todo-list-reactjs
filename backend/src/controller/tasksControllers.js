import Task from '../models/Task.js';


export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    }
    catch (error) {
        console.error("Loi khi goi getAllTasks", error);
        res.status(500).json({ message: 'Lỗi server' });

    }
}

export const createTasks = (req, res) => {
    try {
        const { title } = req.body;
        const task = new Task({ title });

        const newTask = task.save()
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Loi khi goi createAllTasks", error);
        res.status(500).json({ message: 'Lỗi server' });
    }

}

export const updateTask = async (req, res) => {
    try {
        const { title, status, completedAt } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, status, completedAt },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Không tìm thấy nhiệm vụ' });
        }

        res.status(200).json(updatedTask);

    } catch (error) {
        console.error("Loi khi goi updatedTasks", error);
        res.status(500).json({ message: 'Lỗi server' });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const deteledTask = await Task.findByIdAndDelete(req.params.id);
        if (!deteledTask) {
            return res.status(404).json({ message: 'Không tìm thấy nhiệm vụ' });
        }

        res.status(200).json({ message: 'Nhiệm vụ đã được xóa' });

    } catch (error) {
        console.error("Loi khi goi deletedTasks", error);
        res.status(500).json({ message: 'Lỗi server' });
    }

} 