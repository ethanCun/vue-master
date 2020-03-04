<template>
  <div>
    <el-container>
      <el-header>
        <span>注册页面</span>
      </el-header>
      <el-main>
        <el-form ref="form" :model="form" >
          <el-form-item label="省份">
            <el-select v-model="form.checkedProvinces" placeholder="请选择省份" @change="provinceChange">
              <el-option v-for="(item, idx) in form.provinces" :key="idx" :label="item.title" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生日">
            <el-date-picker v-model="form.birthday" type="date" placeholder="请选择生日" @change="birthdayChange"></el-date-picker>
          </el-form-item>
          <el-form-item label="是否成年">
            <el-switch v-model="form.adult" @change="adultChange">是否成年</el-switch>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex" @change="sexChange">
              <el-radio label="man">男</el-radio>
              <el-radio label="women">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="兴趣爱好">
            <!-- v-model绑定所有选定的爱好 -->
            <el-checkbox-group v-model="form.checkedInterest" @change="interestChange">
              <el-checkbox  v-for="(item, idx) in form.interests" :key="idx" :label="item.label">{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">立即提交</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default{
    name: 'register',
    data(){
      return {
        form:{
          checkedProvinces:[],
          birthday: '',
          adult: false ,
          sex: 'women',
          interests:[
             {
               label: '唱歌',
               value: 'siging'
             },
             {
               label: '跳舞',
               value: 'dancing'
             },
             {
               label: '画画',
               value: 'writing'
             }

          ],
          checkedInterest:[],
          provinces:[
            {
              title: '上海',
              value: 'shanghai'
            },
            {
              title: '北京',
              value: 'beijing'
            }
          ]
        }
      }
    },
    methods:{

      provinceChange(e){
        this.checkedProvinces = e
        console.log(this.checkedProvinces)
      },

      birthdayChange(e){
        this.birthday = e.dateFormat()
        console.log(this.birthday)
      },

      adultChange(e){
        this.adult = e
        console.log(this.adult)
      },

      sexChange(e){
        this.sex = e
        console.log(this.sex)
      },

      interestChange(e){
        this.checkedInterest = e
        console.log(JSON.stringify(this.checkedInterest))
      },

      submitForm(e){
        console.log(e)
        
        delete this.form.provinces;
        delete this.form.interests;
        
        console.log(JSON.stringify(this.form))
      }
    }
  }
</script>

<style>
</style>
