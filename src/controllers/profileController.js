const Profile = require('../models/profileModel');

// Crear un perfil
exports.createProfile = async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Leer un perfil
exports.getProfile = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (!profile) return res.status(404).json({ error: 'Perfil no encontrado' });
        res.json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un perfil
exports.updateProfile = async (req, res) => {
    try {
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!profile) return res.status(404).json({ error: 'Perfil no encontrado' });
        res.json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un perfil
exports.deleteProfile = async (req, res) => {
    try {
        const profile = await Profile.findByIdAndDelete(req.params.id);
        if (!profile) return res.status(404).json({ error: 'Perfil no encontrado' });
        res.json({ message: 'Perfil eliminado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
