let cats = [
    { id: '1', name: 'Luna', age: 2 },
    { id: '2', name: 'Bella', age: 5 },
    { id: '3', name: 'Lola', age: 7 },
    { id: '4', name: 'Kitty', age: 1 },
    { id: '5', name: 'Oreo', age: 9 }
];

const catControllers = {
    // Get all cats
    getCats: (req, res) => {
        res.status(200).json(cats);
    },

    // Get a cat by ID
    getCatsById: (req, res) => {
        const { id } = req.params;
        const catExist = cats.find((cat) => cat.id === id);
        if (catExist) {
            res.status(200).json(catExist);
        } else {
            res.status(404).json({ Message: `Cat with id ${id} not found` });
        }
    },

    // Add a new cat
    addCat: (req, res) => {
        const { name, age } = req.body;
        if (!name || !age) {
            res.status(400).json({ Message: 'Please provide name and age' });
        }
        const newCat = { id: String(cats.length + 1), name, age };
        cats.push(newCat);
        res.status(201).json(newCat);
    },

    // Update a cat
    updateCat: (req, res) => {
        const { id } = req.params;
        const { name, age } = req.body;
        if (!name || !age) {
            res.status(400).json({ Message: 'Please provide name and age' });
        }
        const catExist = cats.find((cat) => cat.id === id);
        if (catExist) {
            catExist.name = name;
            catExist.age = age;
            res.status(200).json(catExist);
        } else {
            res.status(404).json({ Message: `Cat with id ${id} not found` });
        }
    },

    // Delete a cat
    deleteCat: (req, res) => {
        const { id } = req.params;
        const catExist = cats.find((cat) => cat.id === id);
        if (catExist) {
            cats = cats.filter((cat) => cat.id !== id);
            res.status(200).json({ Message: `Cat with id ${id} deleted` });
        } else {
            res.status(404).json({ Message: `Cat with id ${id} not found` });
        }
    }
};

export default catControllers;
