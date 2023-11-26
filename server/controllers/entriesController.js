
const mongoose = require("mongoose");
const Entry = require('../models/entryModel');

exports.getEntries = async (req, res) => {
    console.log("get entry Hit");
    try {
        Entry.find({}).then(result => {
            if(result.length === 0) {
                res.status(404).send({message: 'No se encontraron entradas en el blog'})
            } else {
                res.send({entries: result});
            }
        }).catch(err => {
            res.status(500).send({error: true, message: err });
        });
    } catch (err) {
        console.log(err);
    }
}

exports.saveEntry = async (req, res) => {
    console.log("save entry HIT!");
    try {
        const { title, author, content } = req.body;
        
        if (!title) { return res.status(201).send({ error: "El Titulo es requerido" }) }
        if (!author) { return res.status(201).send({ error: "El Autor es requerido" }) }
        if (!content) { return res.status(201).send({ error: "El Contenido es requerido" }) }

        const exist = await Entry.findOne({title}).exec();
        if (exist) { return res.status(201).send({ error: "Ya existe una entrada con este titulo" }); }

        try {
            await Entry({
                title,
                author,
                content
            }).save();
            
            return res.status(200).send({ message: "Entrada guardada correctamente"});
        } catch (err) {
            console.log(err);
        }

    } catch (err) {
        console.log(err);
    }
}