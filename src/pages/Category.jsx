import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getFilterByCategory } from "../api";

import { Preloader } from "../layout/Preloader";
import { MealList } from "../components/MealList";
import { Search } from "../components/Search";

export const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const handleSearch = (str) => {
        setFilteredMeals(meals.filter((item) => item.strMeal.toLowerCase().includes(str.toLowerCase())));
        navigate({
            pathname,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getFilterByCategory(name).then((data) => {
            setMeals(data.meals);
            setFilteredMeals(
                search
                    ? data.meals.filter((item) =>
                          item.strMeal.toLowerCase().includes(search.split("=")[1].toLowerCase())
                      )
                    : data.meals
            );
        });
    }, [name, search]);

    return (
        <>
            <Search cb={handleSearch} />
            <button className="btn" onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={filteredMeals} />}
        </>
    );
};
