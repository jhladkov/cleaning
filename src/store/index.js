import {createStore} from 'vuex'

export default createStore({
    state: {
        servicesInfo: [
            {
                title: 'Мойка окон',
                description: "Мойка окон очень важна",
                index: 0
            },
            {
                title: 'Мойка квартир и офисов',
                description: "Мойка окон очень важна",
                index: 1
            },
            {
                title: 'Уборка после ремонта',
                description: "Мойка окон очень важна",
                index: 2
            },
            {
                title: 'Химчистка',
                description: "Мойка окон очень важна",
                index: 3
            },
            {
                title: 'Озонация',
                description: "Мойка окон очень важна",
                index: 4
            },
            {
                title: 'Дезифекция, дератизация',
                description: "Мойка окон очень важна",
                index: 5
            },
        ]
    },
    mutations: {

    },
    actions: {

    },
})
