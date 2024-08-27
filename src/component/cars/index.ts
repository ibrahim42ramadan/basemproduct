import axios from 'axios';
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/cars', async (req, res) => {
    try {
        const { make, model, year } = req.query;
        const response = await axios.get('https://www.carqueryapi.com/api/0.3/', {
            params: {
                cmd: 'getTrims',
                make,
                model,
                year
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching car details');
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

interface CarTrim {
    model_name: string;
    model_body: string;
    model_price: string;
}

interface CarDetails {
    title: string;
    description: string;
    imageURL: string;
    price: string;
    colors: string[];
    category: {
        name: string;
        imageURL: string;
    };
}

export const getCarDetails = async (make: string, model: string, year: number): Promise<CarDetails[]> => {
    try {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://www.carqueryapi.com/api/0.3/', {
            params: {
                cmd: 'getTrims',
                make: make,
                model: model,
                year: year
            }
        });


        const data = response.data as { Trims: CarTrim[] };
        const carDetails: CarDetails[] = [];

        if (data.Trims && data.Trims.length > 0) {
            data.Trims.slice(0, 10).forEach((car) => {
                carDetails.push({
                    title: `${car.model_name} ${year}`,
                    description: `The ${car.model_name} is a ${car.model_body} from ${make}, offering a blend of performance and comfort.`,
                    imageURL: `https://via.placeholder.com/400x200.png?text=${make}+${car.model_name}`,
                    price: car.model_price || "Price not available",
                    colors: ["Red", "Blue", "Black"], // يمكن تخصيصه بناءً على البيانات الحقيقية
                    category: {
                        name: car.model_body,
                        imageURL: `https://via.placeholder.com/100x100.png?text=${car.model_body}`
                    }
                });
            });
        }

        return carDetails;
    } catch (error) {
        console.error('Error fetching car details:', error);
        return [];
    }
};

// استدعاء الدالة
getCarDetails('toyota', 'camry', 2020).then(cars => {
    cars.forEach(car => {
        console.log(car);
    });
});
