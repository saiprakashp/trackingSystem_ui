import * as actionTypes from './PtsPagerTypes';

export const downloadPage = (fileNameKey, fileValue, limitKey, limitValue, fileTypeKey, fileTypeValue) => {
    return {
        type: actionTypes.DOWNLOAD_FILE,
        fileNameKey: fileNameKey,
        fileValue: fileValue,
        limitKey: limitKey,
        limitValue: limitValue,
        fileTypeKey: fileTypeKey,
        fileTypeValue: fileTypeValue
    };
};

export const showDataNewPage = (urlKey, urlValue, actionKey, actionValue) => {
    return {
        type: actionTypes.SHOW_DATA_IN_PAGE,
        urlKey: urlKey,
        urlValue: urlValue,
        actionKey: actionKey,
        actionValue: actionValue
    };
};
export const savePagination = (paginationKey, paginationValue) => {
    return {
        type: actionTypes.SAVE_PAGINATION,
        paginationKey: paginationKey,
        paginationValue: paginationValue
    };
};
