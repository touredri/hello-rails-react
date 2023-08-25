import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGreeting } from "./redux/reducers/greetingSlice";

function Greeting() {
    const dispatch = useDispatch();
    const { greeting } = useSelector(state => state.greeting);

    useEffect(() => {
        dispatch(fetchGreeting());
    }, []);

    return (
        <h2>{greeting}</h2>
    )
}

export default Greeting;
