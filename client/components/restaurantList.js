import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { getRestaurants } from "../pages/api/services";
import styles from '../styles/Home.module.css'

function Restaurantlist() {
    const [restaurantData, setRestaurantData] = useState([]);

    const fetchRestaurants = () => {
        getRestaurants().then((response) => {
            const restaurants = response.data;
            setRestaurantData(restaurants);
            
        });
    };
    useEffect(fetchRestaurants, []);

    if (!restaurantData.restaurants || restaurantData.restaurants.length === 0) {

        return (
            <p>Loading</p>
        )
    } else {
        return (
            <div className={styles.grid}>

                {restaurantData.restaurants.map((restaurant) => (

                    <Link href={`/details/${restaurant._id}`}>
                        <div className={styles.card} key={restaurant._id}>
                            <Image
                                priority
                                src={restaurant.image}
                                height={250}
                                width={250}
                                alt={restaurant.name}
                                layout='intrinsic'
                                objectFit='contain'
                                placeholder="blurDataURL"
                            />
                            <h4>{restaurant.name}</h4>
                            <small>{restaurant.neighborhood}</small>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
}

export default Restaurantlist

