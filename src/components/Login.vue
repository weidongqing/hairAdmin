<template>
    <div class="form-group">
        <div class="row">
            <label class="col-sm-2 control-label">用户名</label>
            <div class="col-sm-3">
                <input type="text" v-model="username" class="form-control" :placeholder="username">
            </div>
        </div>
        <div class="row">
            <label class="col-sm-2 control-label">密码</label>
            <div class="col-sm-3">
                <input type="text" v-model="password" class="form-control" :placeholder="password">
            </div>
        </div>
        <button class="btn btn-primary" type="button" @click="submit">登录</button>
    </div>
</template>
<script>
    export default{
        props:["placeholder"],
        data:function () {
            return {
                username:"",
                password:"",
                showNav:false
            }
        },
        methods:{
            submit(){
                //this.$emit("childChange","username",this.username)
                this.$store.state.user_name = this.username;
                this.$store.state.user_password = this.password;
                this.$store.commit('showUserInfo');
            }
        }
    }
</script>