const express = require("express");
const bodyParser = require('body-parser');
const Factura = require('./models.js').Factura;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_HOST || 'mongodb://localhost:27017/restaurantes');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/docs'));

app.listen(process.env.PORT || 8080, () => {});

app.get('/hola', (req, res) => {
  res.send(200, "HOLA!");
});
app.post('/contacto', (req, res) => {
  res.send(200, "recibido!");
});

app.post('/like', (req, res) => {
  let rest = req.body.restaurant;
  rest.likes++;
  res.send(200, rest);
});

//obtener todos
app.get('/api/facturas', (req, res) => {
  Factura
    .find({})
    .catch((err) => {
      res.send(500, "error!");
    })
    .then((facturas) => {
      res.json(facturas);
    });
});

//actualizar crear
app.post('/api/facturas/:id', (req, res) => {
  console.log(req.body)
  Factura.findOneAndUpdate({
    _id: req.param.id
  }, req.body).then((factura) => {
    console.log("updated!")
    res.send(200, "ok");
  }).catch((err) => {
    res.send(500, "La factura no pudo ser modificada");
  })
});

//obtener por id
app.get('/api/facturas/:id', (req, res) => {
  //verificar si el id es valido
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) 
    res.send(400, "bad id");
  Factura
    .findById({_id: req.params.id})
    .then((factura) => {
      res.json(factura);
    })
    .catch((err) => {
      res.send(500, "derp");
    })
});

//borrar
app.delete('/api/facturas', (req, res) => {
  if (!req.query.id.match(/^[0-9a-fA-F]{24}$/)) 
    res.send(400, "bad id");
  Factura
    .findByIdAndRemove(req.query.id)
    .catch((err) => {
      res.send(500, "derp");
    })
    .then(() => {
      res.send(200, "ok");
    })

})

//crear
app.put('/api/facturas', (req, res) => {
  let factura = new Factura({numFactura: req.body.numfactura, nombreEmpresa: req.body.cliente, fechaPago: req.body.date, cantidad: req.body.costo, estado: req.body.estado});
  factura
    .save()
    .then((factura) => {
      res.send(200, "ok");
    })
    .catch((err) => {
      res.send(500, "La factura ya existe");
    })
});

app.get('/datos', (req, res) => {
  res.send(200, {
    "mas-votados": [
      {
        "nombre-plato": "Encebollado",
        "restaurante": "COCA COLA",
        "img": "http://via.placeholder.com/200x130",
        "fecha": "Martes 4",
        "likes": 54

      }, {
        "nombre-plato": "Arroz con pollo",
        "restaurante": "CELEX",
        "img": "http://via.placeholder.com/200x130",
        "fecha": "Jueves 6",
        "likes": 61
      }

    ],
    "esta-semana": [
      {
        "date": "Lunes",
        "menu": [
          {
            "nombre-plato": "Lasagna",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 50
          }, {
            "nombre-plato": "Cazuela",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 20
          }, {
            "nombre-plato": "Estofado de carne",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 35
          }
        ]
      }, {
        "date": "Martes",
        "menu": [
          {
            "nombre-plato": "Caldo de salchicha",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 30
          }, {
            "nombre-plato": "Caldo de bola",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 15
          }, {
            "nombre-plato": "Sancocho de pescado",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 23
          }
        ]
      }, {
        "date": "Miércoles",
        "menu": [
          {
            "nombre-plato": "Lasagna",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 50
          }, {
            "nombre-plato": "Cazuela",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 20
          }, {
            "nombre-plato": "Estofado de carne",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 35
          }
        ]
      }, {
        "date": "Jueves",
        "menu": [
          {
            "nombre-plato": "Caldo de salchicha",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 30
          }, {
            "nombre-plato": "Caldo de bola",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 15
          }, {
            "nombre-plato": "Sancocho de pescado",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 23
          }
        ]
      }, {
        "date": "Viernes",
        "menu": [
          {
            "nombre-plato": "Lasagna",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 50
          }, {
            "nombre-plato": "Cazuela",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 20
          }, {
            "nombre-plato": "Estofado de carne",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 35
          }
        ]
      }, {
        "date": "Sábado",
        "menu": [
          {
            "nombre-plato": "Caldo de salchicha",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 30
          }, {
            "nombre-plato": "Caldo de bola",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 15
          }, {
            "nombre-plato": "Sancocho de pescado",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 23
          }
        ]
      }
    ]
  });

});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/docs/index.html');
});
