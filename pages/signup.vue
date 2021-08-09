<template >
    <div class="loginform">
    
        <section>
          <div class="signin">
            <strong>Enter your credentials</strong>
          </div>
          
            <form >
              <label for="name" >
                  Name: <input type="text"   id="name " placeholder="Enter your name" v-model.trim="username" @blur="uservalidNamefun" maxlength="10" @keypress="uservalidName='valid'">
                  
                  <p v-if="uservalidName==='invalid'" :class="{errorstyle:uservalidName=='invalid'}">{{uservalidNamemsg}}</p>
                </label>  
                <label for="age" >
                D/O/B: <input type="date"   id="age " placeholder="Enter your age" v-model="userage" @blur="userAgefun" @keypress="useragevalid='valid'">
                  <p v-if="useragevalid==='invalid'" :class="{errorstyle:useragevalid==='invalid'}">{{userageMsg}}</p>
                </label>
                <label for="email">
                  Email:<input type="text"   id="email " placeholder="Enter your email" v-model.trim="useremail" @blur="validateEmail" @keypress="emailval='valid'" >
                <p v-if="emailval==='invalid'" :class="{errorstyle:emailval==='invalid'}">{{emailmsg}}</p>
                </label>
                <label for="password" >
                  Password:<input type="password" id="password " placeholder="Set your password" v-model.trim="password" @blur="userPasswordfun" @keypress="passwordvalid='valid'">
                <p v-if="passwordvalid==='invalid'" :class="{errorstyle:passwordvalid==='invalid'}">{{passwordMsg}}</p>
                </label>
                <label for="checkbox">
                  <div class="checkboxval">
                    <p class="checkboxpara">This is to verify that all the information given by me is true:</p>
                   <input type="checkbox" name=" checkbox"  id="checkbox1 " class="checkbox1"  v-model="checked" @click="check">
                   </div>
                </label>
                <button @click.prevent="Proceed" class="cls-1"  v-if="proceed===true">Proceed</button>
               <label for="OTP" v-if="OTP===true">
                
                 <input type="text" maxlength="8" placeholder="Please enter your 8 digits OTP" id="OTP" v-model.trim="OTPvalueuser">
               <button @click.prevent="submit" class="cls-1" >Submit</button>
               </label>
               
                
                <button title="close"  class="cls-2" @click.prevent="$emit('signinval',true)">X</button>


            </form>
            <button @click="googleapi">Magic</button>
        </section>

       
      
        
    </div>
</template>




<style>
.loginform
{
  position: relative;
  top:20vh;
  left:25%;
  width:50%;
  height:70vh;
  background-image: none;
  background:  rgb(145, 204, 211);
 
}

form{
   display: flex;
   flex-direction: column;
  align-items: center;
}

form input{
    font-size: 15px;
    width:300px;
    height:40px;
    border-radius: 4px;
    margin: 10px;
   
}



.cls-1{
    width:100px;
    height:40px;
    border-radius: 3px;
    
    box-shadow: 0px 2px 3px 1px grey;
    font-size: 15px;
   
}
.cls-2{
  position: absolute;
  top:10px;
  right:10px;
  width:20px;
  height:20px;
  background-color: red;
  color: white;
}
.cls-2:hover{
  width:25px;
  height:25px;
  background-color: rgb(219, 99, 99);
  font-size: 15px;
}
.signin{
    display:flex;
    flex-direction: row;
    justify-content: center;
    padding:10px;
    width: 600px;
    height: 60px;
    margin-left: 100px;
    background:  rgb(145, 204, 211);
    
}
strong{
    font-size: 30px;
    color:rgb(190, 116, 103)
    
}


.checkbox1{
  position: absolute;
  bottom: 6px;
  right: 180px;
  width:20px;
  height:20px;
  border:2px solid black;
  
}
::selection{
  background:rgb(255, 255, 0);
}
.errorstyle{
  font-size:17px;
  margin: 2px;
}
p{
  font-size: 17px;
  color: red;
}
.checkboxval{
  position: relative;
  width: 700px;
  height: 40px;
  margin: 15px;
  
  background-color: rgb(145, 204, 211);;

}
.checkboxpara{
  color: blue;
  font-size: 20px;
}

</style>

<script>
export default {

}
</script>

<style>

</style>
