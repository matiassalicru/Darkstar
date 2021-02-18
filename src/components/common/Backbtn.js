import React from 'react';
import { useHistory } from 'react-router-dom';
import arrow from '../../Assets/Arrow.png';

export const Backbtn = () => {
    const history = useHistory()

    const goBack = () => {
        return history.goBack();
    }

    return (
      <button className="base__backContainer" onClick={goBack}>
        <img className="base__backImg" src={arrow} alt="flecha" />
      </button>
    );
}
