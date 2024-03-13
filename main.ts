class User{
    public static count = 0;
    public name:string
    private readonly login:string
    private password:string
    private readonly grade:number
    // constructor( public name:string, private readonly login:string, private password:string, private readonly grade:number)
        
    constructor(  name:string, login:string,  password:string, grade:number){
      this.name = name
      this.login = login
      this.password = password
      this.grade = grade
      User.count++;
    }
  
    get_password(){
      return "********";
    }
  
    set_password(newPassword: string){
      this.password = newPassword;
    }
  
    showInfo(){
      console.log(`Имя: ${this.name}`);
      console.log(`Логин: ${this.login}`);
    }
    
    eq(user:User): boolean{
      return this.grade === user.grade;
    }
  
    lt(user:User): boolean{
      return this.grade < user.grade;
    }
  
    gt(user:User): boolean{
      return this.grade > user.grade;
    }
  
    static getCount():number{
      return User.count;
    }
  }
  
  
  class SuperUser{
     public static count = 0;
     name:string
     login:string
     password:string
     public role:string
     grade:number
     
  
     constructor(name:string, login:string, password:string, role:string, grade:number){
      this.name = name
      this.login = login
      this.password = password
      this.role = role
      this.grade = grade
  
      
      SuperUser.count++;
     }
  
     showInfo(){
      console.log(`Имя: ${this.name}`);
      console.log(`Логин: ${this.login}`);
      console.log(`role: ${this.role}`);
     }
  
     static getCount(): number{
      return SuperUser.count;
     }
  }
  
  const user1 = new User('Paul McCartney', 'paul', '1234', 3)
  const user2 = new User('George Harrison', 'george', '5678', 2)
  const user3 = new User('Richard Starkey', 'ringo', '8523', 3)
  const admin = new SuperUser('John Lennon', 'john', '0000', 'admin', 5)
  
  // user1.showInfo()
  // admin.showInfo()
  
  
  
  
  
  // let users = User.count
  // let admins = SuperUser.count
  
  // console.log(`Всего обычных пользователей: ${users}`)
  // console.log(`Всего супер-пользователей: ${admins}`)
  
  
  
  
  
  
  console.log( user1.lt(user2) )
  console.log( admin.gt(user3) )
  console.log( user1.eq(user3) )
  
  