const VehicleModel = require("../model/vehicle");

// exports.createOne = (req, res) => {
//     const { id, plate, brand, model, color} = req.body;

//     const sql = `INSERT INTO vehicles
//                 (id, plate, brand, model, color)
//                 VALUES 
//                 ('${id}', '${plate}', '${brand}', '${model}', '${color}')`;

//     connDb.run(sql, function(err){
//         console.log(err);
//         if (err) {
//          res.status(201).send({ id, plate, brand, model, color });
//         } else {
//             res.status(400).send({ err });
//         }
//     });
// };

exports.createOne = (req, res) => {
    const data = {...req.body };
    VehicleModel
        .create(data)
        .then(() => res.status(201).json(data))
        .catch((err) => res.status(500).json({ err }));
};

// exports.getAll = (req, res) => {

//     const sql = "SELECT * FROM vehicles";
//     connDb.all(sql, function(err, data) {
//         console.log("RODOU", err, data);
//         res.send(data);
//     });
// };

// exports.getOne = (req, res) => {
//     console.log(req.params);
//     const { id } = req.params;
//     console.log(id);

//     const sql = `SELECT * FROM vehicles WHERE id = '${id}'`;
//     connDb.get(sql, (err, data) => {
//         console.log("==>", err, data);
//         if (data) {
//             res.status(200).send(data);
//         } else {
//             res.status(404).send({ err: "customer not found"});
//         }
//     });
// };

exports.updateOne = (req, res) => {
    VehicleModel
        .update({ ...req.body },
            { 
                where: { placa: req.params.placa }
            }
        )
        .then((data) => res.status(201).json(data))
        .catch((err) => res.status(500).json({ err }));
}

// exports.removeOne = (req, res) => {
//     const { id } = req.params;
//     const sql = `DELETE FROM vehicles WHERE id = '${id}'`;
//     connDb.run(sql, function (err){
//         console.log(arguments);
//         if(err) res.status(204).end();
//     });
//     //res.send("REMOVE ONE");
// };

exports.getAll = (req, res) => {

    VehicleModel
        .findAll()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ err }));
};

exports.getOne = (req, res) => {

    CarModel
        .findOne({ where: { id: req.params } })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(404).send({ errMsg: "vehicle not found" }))
};

exports.deleteOne = (req, res) => {

    VehicleModel
        .destroy({ where: { id: req.params }})
        .then((data) => res.status(204).json(data))
        .catch((err) => res.status(500).json({ err }));
};