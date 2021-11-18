// for deupliicate row
export const defaultTimeSheet = {
    projectAssesment: {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: '-1', selected: true, displayValue: 'Please Select'},
                {value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
            ]
        },
        value: '-1',
        classes: ['']
    },
    activity: {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: '-1', selected: true, displayValue: 'Please Select'},
                {value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
            ]
        },
        value: '-1',
        classes: ['']
    },
    type: {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: '-1', selected: true, displayValue: 'Please Select'},
                {value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
            ]
        },
        value: '-1',
        classes: ['']
    },
    monTim: {
        elementType: 'text',
        elementConfig: {
            type: 'text',
            placeholder: 'Mon Hrs'
        },
        value: 0,
        classes: ['width80', 'height20']
    },
    tueTim: {
        elementType: 'text',
        elementConfig: {
            type: 'text',
            placeholder: 'Tue Hrs'
        },
        value: 0,
        classes: ['width80', 'height20']
    },
    wedTim: {
        elementType: 'text',
        elementConfig: {
            type: 'text',
            placeholder: 'Wed Hrs'
        },
        value: 0,
        classes: ['width80', 'height20']
    },
    thuTim: {
        elementType: 'text',
        elementConfig: {
            type: 'text',
            placeholder: 'Thu Hrs'
        },
        value: 0,
        classes: ['width80', 'height20']
    },
    friTim: {
        elementType: 'text',
        elementConfig: {
            type: 'text',
            placeholder: 'Fri Hrs'
        },
        value: 0,
        classes: ['width80', 'height20']
    },
    satTim: {
        elementType: 'text',
        elementConfig: {
            type: 'text',
            placeholder: 'Sat Hrs'
        },
        value: 0,
        classes: ['width80', 'height20']
    },
    sunTim: {
        elementType: 'text',
        elementConfig: {
            type: 'text',
            placeholder: 'Sun Hrs'
        },
        value: 0,
        classes: ['width80', 'height20']
    },
    total: {
        elementType: 'text',
        elementConfig: {
            type: 'text',
            disabled: true
        },
        value: 0,
        classes: ['width80', 'height20']
    },
    status: {
        elementType: 'text',
        elementConfig: {
            type: 'text',
            disabled: true
        },
        value: 'N/A',
        classes: ['width80', 'height20']
    },
    delete: {
        elementType: 'img',
        src: 'delete_red',
        alt: 'Delete',
        classes: ['img-thumbnail', 'imgsm', 'height20']
    },

};
