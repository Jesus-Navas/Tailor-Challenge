import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getRestaurantById } from '../api/services';
import styles from '../../styles/Home.module.css'



function RestaurantDetails() {
    const router = useRouter()
    const restaurantId = router.query.id
    const [restaurantData, setRestaurantData] = useState(undefined);


    const fetchRestaurant = () => {
        getRestaurantById(restaurantId).then((response) => {
            const restaurant = response.data;
            setRestaurantData(restaurant);
        });
    };
    useEffect(fetchRestaurant, [restaurantId]);

    if (!restaurantData || !restaurantData.restaurant) return null;
    const { id, name, neighborhood, address, image, reviews, operating_hours } = restaurantData.restaurant;
    return (
        <div className={styles.container}>
            <div>
                <Image
                    priority
                    src={image}
                    height={500}
                    width={500}
                    alt={name}
                    layout='intrinsic'
                    objectFit='contain'
                    placeholder="blurDataURL"
                />
                <h1>{name}</h1>
                <p>{neighborhood}</p>
                <p>{address}</p>
            </div>
            <h2>Reviews</h2>
            <div>
                {reviews.map((review) => (
                    <div>
                        <hr />
                        <p>User: {review.name}</p>
                        <p>Rating: {review.rating}/5</p>
                        <p>{review.comments}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default RestaurantDetails