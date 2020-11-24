var app = new Vue({
    el: '#app',
    data: {
        isActive: true,
        isBlue: true,
        message: 'Melbourne City Tourist Guide'
    }
});

var vm = new Vue({
    el: "#app1",
    data: {
        message1: ""
    }
});

var search = new Vue({
    el: '#search',
    data: {
        counter: 0
    },
    methods: {
        addToSearch() {
            this.counter += 1
        }
    }
});

Vue.component('save-item', {
    template: '\
<li>\
{{title}}\
<button v-on:click="$emit(\'remove\')">remove</button>\
</li>\
',
    props: ['title']
})

new Vue({
    el: '#save-list',
    data: {
        newSaveText: '',
        saves: [
        ],
        nextSaveId: 1
    },
    methods: {
        addNewSave: function () {
            this.saves.push({
                id: this.nextSaveId++,
                title: this.newSaveText
            })
            this.newSaveText = ''
        }
    }

});


Vue.component('tab-State Libaray Victoria', {
    template: '<div>State Library Victoria is the central library of the state of Victoria, Australia, located in Melbourne. It was established in 1854 as the Melbourne Public Library, making it Australia oldest public library and one of the first free libraries in the world.</div>'
})
Vue.component('tab-National Gallery of Victoria', {
    template: '<div>The National Gallery of Victoria,popularly known as the NGV,is an art museum in Melbourne, Victoria,Australia. Founded in 1869,it is Australia oldest, largest and most visited art museum.</div>'
})
Vue.component('tab-Royal Exhibition Building', {
    template: '<div>The Royal Exhibition Building is a World Heritage-listed building in Melbourne, Australia, built in 1879-80 as part of the international exhibition movement, which presented over 50 exhibitions between 1851 and 1915 around the globe.</div>'
})

new Vue({
    el: '#scenic-spots',
    data: {
        currentTab: 'State Libaray Victoria',
        tabs: ['State Library Victoria', 'National Gallery of Victoria', 'Royal Exhibition Building']
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab
        }
    }
});


var app = new Vue({
    el: '#restaurant1',
    data: {
        info: 'Embla: Nominally it’s a wine bar, but Embla’s charms are far more profound than those two words suggest. Come here for some of the city’s best food, paired with an idiosyncratic wine list poured by staff who give a damn. 122 Russell Street, Melbourne',
        open: true,
        image: './image/embla.jpg',
        rank: ''
    }
})

var app = new Vue({
    el: '#restaurant2',
    data: {
        info: 'Cheek: This stark, futuristic restaurant might be inspired by American barbeque, but its Asian-accented highlights – duck, mapo tofu empanadas – are totally original. Level 1 301 Swanston Street, Melbourne',
        open: false,
        image: './image/cheek.jpg',
        rank: ''
    }
})

var app = new Vue({
    el: '#restaurant3',
    data: {
        info: 'Lesa: This restaurant eschews the quick, noisy, share-plate format. Slow down with the important people in your life, aided by some of the best food and wine Melbourne has to offer. Level 1 122 Russell Street, Melbourne',
        open: true,
        image: './image/lesa.jpg',
        rank: ''
    }
})



new Vue({
    el: '#web',
    data: {
        show: true
    }
})

new Vue({
    el: '#phone',
    data: {
        show: true
    }
})
