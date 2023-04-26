import { POSTS_KEY } from 'common/constants';
import getInitialData from 'common/getInitialData';
import React from 'react';
import useLocalStorage from 'services/hooks/useLocalStorage';

const withInitialData = Component => props => {
    const initialData = getInitialData();
    useLocalStorage(POSTS_KEY, initialData);

    return <Component {...props} />;
}

export default withInitialData;
