import {createStore} from 'vuex'

export default createStore({
    state: {
        servicesInfo: [
            {
                title: 'Мойка окон',
                description: "Здесь будет текст",
                index: 0
            },
            {
                title: 'Мойка квартир и офисов',
                description: "Здесь будет текст",
                index: 1
            },
            {
                title: 'Уборка после ремонта',
                description: "Здесь будет текст",
                index: 2
            },
            {
                title: 'Химчистка',
                description: "Здесь будет текст",
                index: 3
            },
            {
                title: 'Озонация',
                description: "Здесь будет текст",
                index: 4
            },
            {
                title: 'Дезифекция, дератизация',
                description: "Здесь будет текст",
                index: 5
            },
        ]
    },
    mutations: {

    },
    actions: {

    },
})
