import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
import { useCallback, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [mealsList, setMealsList] = useState([]);
  const getTasks = useCallback((data) => {
    let mealsList = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const meal = data[key];
        mealsList.push({ ...meal, id: key });
      }
    }
    setMealsList(mealsList);
  }, []);
  let content = <p>Loading ... </p>;
  useEffect(() => {
    const timer = setTimeout(() => {
      sendRequest(
        {
          url: "https://react-http-d373b-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
        },
        getTasks
      );
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [sendRequest, getTasks]);

  if (mealsList.length === 0) {
    content = <p>No meals available. Please add some meals </p>;
  }

  if (mealsList.length > 0) {
    content = mealsList.map((meal) => (
      <MealItem
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Is Loading </p>;
  }
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
