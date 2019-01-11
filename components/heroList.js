zaa.component('heroList',{
    templateUrl:'components/hero-list.html',
    controller:function($scope){
        this.heros = [
            {name:'batman',age:18},
            {name:'supper man',age:28}
        ]
    }
})