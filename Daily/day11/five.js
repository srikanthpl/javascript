class Parent{
    assets=10000
    get_assets(){
        console.log('Test Case 123')
        return this.assets
    }
}
class Child extends Parent{
    assetss=10 
    get_Parent_Asset(){
        let value=this.get_assets()
        console.log(value)
    }
}
let c1=new Child()
c1.get_Parent_Asset()


// let x=c1.get_Parent_Asset()
// console.log(x)
//console.log(new Child().get_Parent_Asset())