const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const MongoClient = require('mongodb').MongoClient;

const app = express()

const u = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, 'html')))
app.use(express.static(path.join(__dirname, 'css')))
app.use(express.static(path.join(__dirname, 'assets')))

app.get('/20BIT0155.html', (req, res) => {
    res.sendFile(path.join(__dirname, '20BIT0155.html'))
})

app.post('/submitted', u, function (req, res) {
    var product = {
        product_id: req.body.prodid,
        name: req.body.prodname,
        description: req.body.desp,
        image: req.body.image,
        price: req.body.price,
    }

    var customer = {
        customer_id: req.body.customerid,
        name: req.body.customername,
        address: req.body.customeraddr,
        email: req.body.customeremail,
    }

    var review = {
        review_id: req.body.reviewid,
        customer_id: req.body.customerid,
        product_id: req.body.prodid,
        review: req.body.review,
    }

    MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
        if (err)
            throw err;
        else
            console.log("mongo connected!")
        var dbo = db.db("QStore");
        dbo.collection('products').insertOne(product);
        dbo.collection('customers').insertOne(customer);
        dbo.collection('reviews').insertOne(review);
    })
    res.send("<h1>Submitted!!!</h1>")
})

app.get('/part_i', u, function (req, res) {
    MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
        if (err) throw err;

        var dbo = db.db("QStore");

        var query1 = { price: { $gte: 25, $lte: 150 } };

        dbo.collection("products").find(query1).toArray(function (err, result) {
            if (err) throw err;

            console.log(result);
            res.send(result);
            db.close();
        });
    });
})

app.get('/part_ii', u, function (req, res) {
    MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
        if (err) throw err;

        var dbo = db.db("QStore");

        var query2 = { customer_id: '1234' };

        dbo.collection('products').aggregate([
            {
                $lookup: {
                    from: 'customers',
                    localField
                        : 'product_id',
                    foreignField
                        : '_id',
                    as: 'orderdetails'
                }
            }
        ]).toArray(function (err, res) {
            if (err) throw err;
            console.log(JSON.stringify(res));
            db.close();
        });

        dbo.collection('products').find(query2).toArray(function (err, res) {
            if (err) throw err;

            
            console.log(JSON.stringify(res));
        })

        // dbo.collection("products").find(query2).toArray(function (err, result) {
        //     if (err) throw err;

        //     console.log(result);
        //     res.send(result);
        //     db.close();
        // });
    });
})

app.get('/part_iii', u, function (req, res) {
    MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
        if (err) throw err;

        var dbo = db.db("QStore");

        var query3 = { customer_id: '1234' };

        dbo.collection("reviews").find(query3).toArray(function (err, result) {
            if (err) throw err;

            console.log(result);
            res.send(result);
            db.close();
        });
        dbo.collection("products").find(query3).toArray(function (err, result) {
            if (err) throw err;

            console.log(result);
            res.send(result);
            db.close();
        });
    });
})

app.listen(1234, () => {
    console.log('Running...')
})