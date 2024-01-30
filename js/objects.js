const person = {
    firstname: "Anwar", 
    lastname: "Bahou",  
    age: 23,                
    get fullname() {
        return this.firstname + ' ' + this.lastname;},

    set fullname(value){
        const [first,last] = value.split(' ')
        this.firstname = first
        this.lastname = last

    },

    set firstname(value){
        this.firstname = value
    }
}
person.fullname = 'ayman ayman'
person.firstname = 'aldlsaj'
person.firstname = 'aldlsaj'
console.log(person.fullname);