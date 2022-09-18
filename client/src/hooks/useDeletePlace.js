import { useState, useContext } from 'react';
import axios from 'axios';
import { UtilsContext } from '../context/UtilsContex';

const useDeletePlace = () => {
    const { setSelectedPlace, deleteUIMarker } = useContext(UtilsContext);
    const [isLoading, setIsLoading] = useState(false);
    const deletePlace = async ({ id, setIsModalOpen }) => {
        setIsLoading(true);
        await axios
            .post(`${process.env.REACT_APP_SERVER_URL}/home/delete/${id}`)
            .then((res) => {
                deleteUIMarker({ id });
                setSelectedPlace(null);
                setIsModalOpen(false);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {
        deletePlace,
        isLoading,
    };
};

export default useDeletePlace;
