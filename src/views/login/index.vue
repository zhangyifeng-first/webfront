<template>
    <div class="login_container">
        <el-row>
            <el-col :span="14" :xs="0"></el-col>
            <el-col :span="10" :xs="24">
                <el-form class="login_form" ref="loginFormRef" status-icon :model="loginForm" :rules="loginFormRules">
                    <h1>Hello</h1>
                    <h3>欢迎使用运营管理平台</h3>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" show-password :prefix-icon="Lock" v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login_btn" type="primary" :loading="isLoginLoading" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue'
import type { FormRules } from 'element-plus'
import { ElNotification } from 'element-plus'
import { reactive, ref } from "vue"
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router';
// 引入获取当前时间的函数
import { getTime } from '@/utils/time'


let userStore = useUserStore()
let $router = useRouter()
let loginForm = reactive({ username: '', password: '' })
let isLoginLoading = ref(false)
const loginFormRules = reactive<FormRules>({
    username: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },
        { required: true, min: 6, message: '用户名至少六位', trigger: 'change' }
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
    ]
})
let loginFormRef = ref()
// 登录方法
const login = async () => {

    // 保证表单项所有检验通过
    await loginFormRef.value.validate()
    // 开始加载
    isLoginLoading.value = true
    // 通知仓库发登录请求
    // 请求成功-> 首页展示数据
    // 请求失败-> 弹出失败信息
    try {
        await userStore.userLogin(loginForm)
        $router.push('/')
        // 登录成功提示信息
        ElNotification({
            type: 'success',
            message: '欢迎回来',
            title: `Hi,${getTime()}好`
        })
    } catch (error) {
        // 登录失败的信息
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
    } finally {
        isLoginLoading.value = false
    }
}


</script>

<style lang="scss" scoped>
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.png') no-repeat;
    // background-size: cover;
}

.login_form {
    position: relative;
    width: 80%;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f7f7f9;
    padding: 40px;
    border-radius: 20px;

    h1 {
        color: #46b5fc;
        font-size: 40px;
    }

    h3 {
        margin: 20px 0;
        color: #78baf7;
        font-size: 20px;
    }

    .login_btn {
        width: 100%;
    }
}
</style>