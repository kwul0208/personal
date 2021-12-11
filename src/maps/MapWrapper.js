import React from "react";
import Wrapper, { Status } from "./Wrapper";
import MyMapComponent from "./MyMapComponent";

const render = (status) => {
    if (status === Status.LOADING) return <p>Loading...</p>;
    if (status === Status.FAILURE) return <p>Error...</p>;
    return null;
};

const MapWrapper = () => (
    <Wrapper apiKey="AIzaSyD6AUPIR0eIiGldIIo0b06uqLxlZDyQh-I" render={render}>
        <MyMapComponent />
    </Wrapper>
);

export default MapWrapper;
