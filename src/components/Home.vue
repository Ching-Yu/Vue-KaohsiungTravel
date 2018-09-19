<template>
  <div id="filter">
    <div id="header">
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <div>
              <a href="#">HaveFun</a>
            </div>
          </div>
          <div class="col-sm-9">
            <div class="input-out">
              <span class="input">
                  <i class="fas fa-search"></i>
                <input type="text" placeholder="Explore your own activities">
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="main">
      <div class="container">
        <div class="row">
            <div class="col-12 col-md-4">
              <div class="location py-4 px-3">
                <h4 class="mb-4">Location</h4>
                <el-select v-model="value">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <hr>
              <div class="location py-4 px-3">
                <h4 class="mb-4">Categories</h4>
                  <el-checkbox  v-model="check1" @click="check1 = !check1" class="d-block mx-0">免費參觀</el-checkbox>
                  <el-checkbox  v-model="check2" @click="check2 = !check2" class="d-block mx-0">全天候開放</el-checkbox>
              </div>
            </div>
            <div class="col-12 col-md-8 main-right">
              <div class="top-box">
                  <h3 class="mt-4">總共 <span class="resultNumber">{{this.recordsFilter.length}}</span> 個結果...</h3>
                  <div>
                    <button class="btn btn-outline-primary" v-if="check1">免費參觀<i  @click="check1 = false" class="pl-2 far fa-times-circle"></i></button>
                    <button class="btn btn-outline-primary" v-if="check2">全天候開放<i @click="check2 = false" class="pl-2 far fa-times-circle"></i></button>
                  </div>
                </div>
              <div class="data">
                  <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                    <div class="row mt-3 data-box d-flex" v-for="item in recordsFilter" :key="item._id">
                      <div class="col-sm-6 col-md-8 col-lg-4 px-0 text-right">
                        <img :src="item.Picture1">
                      </div>
                      <div class="col-sm-6 col-md-8 col-lg-8 py-4 data-right">
                        <h4>{{item.Name}}</h4>
                        <p class="my-3 description">{{item.Description}}</p>
                        <div class="py-2">
                          <span class="d-inline-block mr-2 font-weight-bold"><i class="fas fa-map-marker-alt mr-1"></i>{{item.Zone}}</span>
                          <span class="categories" v-if="item.Ticketinfo == '免費參觀'"><i class="fas fa-ticket-alt mr-1"></i>{{item.Ticketinfo}}</span>
                        </div>
                        <div class="detail">
                          <i class="far fa-clock mr-1"></i>{{item.Opentime}}
                        </div>
                      </div>
                    </div>
                  </transition-group>
              </div>
          </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'name',
  data(){
    return{
      check1: false,
      check2: false,
      value: '三民區',
      records:[],
      options:[
        {
        value: '全部',
        label: '全部'
        },
        {
        value: '三民區',
        label: '三民區'
        },
        {
        value: '前鎮區',
        label: '前鎮區'
        },
        {
        value: '苓雅區',
        label: '苓雅區'
        },
        {
        value: '仁武區',
        label: '仁武區'
        },
        {
        value: '楠梓區',
        label: '楠梓區'
        },
        {
        value: '左營區',
        label: '左營區'
        },
        {
        value: '鼓山區',
        label: '鼓山區'
        },
        {
        value: '鹽埕區',
        label: '鹽埕區'
        },
        {
        value: '前金區',
        label: '前金區'
        },
        {
        value: '新興區',
        label: '新興區'
        },
        {
        value: '旗津區',
        label: '旗津區'
        },
        {
        value: '小港區',
        label: '小港區'
        },
        {
        value: '鳳山區',
        label: '鳳山區'
        },
        {
        value: '大寮區',
        label: '大寮區'
        },
        {
        value: '鳥松區',
        label: '鳥松區'
        },
        {
        value: '林園區',
        label: '林園區'
        },
        {
        value: '大樹區',
        label: '大樹區'
        },
        {
        value: '大社區',
        label: '大社區'
        },
        {
        value: '岡山區',
        label: '岡山區'
        },
        {
        value: '路竹區',
        label: '路竹區'
        },
        {
        value: '橋頭區',
        label: '橋頭區'
        },
        {
        value: '梓官區',
        label: '梓官區'
        },
        {
        value: '彌陀區',
        label: '彌陀區'
        },
        {
        value: '永安區',
        label: '永安區'
        },
        {
        value: '燕巢區',
        label: '燕巢區'
        },
        {
        value: '田寮區',
        label: '田寮區'
        },
        {
        value: '阿蓮區',
        label: '阿蓮區'
        },
        {
        value: '茄萣區',
        label: '茄萣區'
        },
        {
        value: '湖內區',
        label: '湖內區'
        },
        {
        value: '旗山區',
        label: '旗山區'
        },
        {
        value: '美濃區',
        label: '美濃區'
        },
        {
        value: '內門區',
        label: '內門區'
        },
        {
        value: '杉林區',
        label: '杉林區'
        },
        {
        value: '甲仙區',
        label: '甲仙區'
        },
        {
        value: '六龜區',
        label: '六龜區'
        },
        {
        value: '茂林區',
        label: '茂林區'
        },
        {
        value: '桃源區',
        label: '桃源區'
        },
        {
        value: '那瑪夏區',
        label: '那瑪夏區'
        },
      ]
    }
  },
  created(){
    const vm = this;
    this.$http.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
    .then(function (response) {
      console.log(response.data)
      vm.records = response.data.result.records;
    })
    .catch(function (error) {
      /* 失敗，發生錯誤，然後...*/
    });
  },
  computed:{
    recordsFilter(){
      if(this.check1 && !this.check2 && this.value!= '全部'){
        return this.records.filter(item => item.Ticketinfo == '免費參觀' && item.Zone == this.value );
      }
      else if(this.check2 && !this.check1 && this.value!= '全部'){
        return this.records.filter(item => item.Opentime == '全天候開放'&& item.Zone == this.value );
      }
      else if(this.check1 && this.check2 && this.value!= '全部'){
        return this.records.filter(item => item.Ticketinfo == '免費參觀' && item.Opentime == '全天候開放' && item.Zone == this.value);
      }
      else if(!this.check1 && !this.check2 && this.value!= '全部'){
        return this.records.filter(item => item.Zone == this.value);
      }
      else if(this.check1 && !this.check2 && this.value == '全部'){
        return this.records.filter(item => item.Ticketinfo == '免費參觀');
      }
      else if(!this.check1 && this.check2 && this.value == '全部'){
        return this.records.filter(item => item.Opentime == '全天候開放');
      }
      else if(this.check1 && this.check2 && this.value == '全部'){
        return this.records.filter(item => item.Opentime == '全天候開放' && item.Ticketinfo == '免費參觀');
      }
      else{
        return this.records;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~bootstrap/scss/bootstrap'; 
@import '../../node_modules/animate.css/animate.css';
$orange: #f56040;
$blue : #405de6;

*{
   font-family: Microsoft JhengHei;
   letter-spacing: 1px;
   .far,.fas{
     font-family: "Font Awesome 5 Free";
   }
}
#header{
  height: 92px;
  background: $orange;
  .container{
    max-width: 1200px;
    height: 100%;
    .row{
      height: 100%;
    }
    .col-sm-3{
      div{
        text-align: center;
        line-height: 92px;
        a{
          text-decoration: none;
          font-family: Optima-ExtraBlack;
          font-size: 36px;
          color: #FFFFFF;
        }
      }
    }
    .col-sm-9{
      div.input-out{
        line-height: 92px;
        padding-left: 38px;
        span.input{
          border-bottom: 1px solid #FFFFFF;
          padding-bottom: 10px;
            i{
              font-weight: 600;
              color: white;
              padding-right: 15px;
            }
            input{
            // width: 388px;
            height: 44px;
            font-family: Roboto-Italic;
            font-size: 20px;
            background: transparent;
            border: 0;
            color: rgba(255,255,255,0.50);
              &:focus{
                outline: 0;
              }
          }
        }
      }
    }
  }
}
#main{
   background: #F2F2F2;
    button.btn.btn-outline-primary{
    border-color: $orange;
    padding: 5px 15px;
    border-radius: 15px;
    color: $orange ;
    font-family: Roboto-Italic;
    font-size: 16px;
    &:hover{
      transition: all linear .2s;
      color: white;
      background: $orange;
    }
  }
  .col-md-4{
    background: #EBEBEB;
  }
  .row .data-box{
      img{
        width: 220px;
        height: 220px;
        box-shadow: 0 0 1px 1px lightgray;
      }
      .data-right{
        background: white;
        h4{
          font-weight: 700;
          color: $orange;
        }
        div.detail{
          font-size: 14px;
          color: #9B9B9B;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
      }
        span.categories{
          display: inline-block;
          color: #FFFFFF;
          background: $blue;
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 14px;
        }
    }
    span.demonstration{
      width: 30px;
      margin-right: 10px;
      text-align: right;
    }
    h3.mt-4{
      font-size: 24px;
      color: #000000;
      span{
        font-family: Roboto-Bold;
        font-size: 24px;
        color: #9013FE;
        line-height: 28px;
      }
    }
  }
  p.description{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  span.resultNumber{
    color: $orange;
  }
 //transition
  .fade-enter-active, .fade-leave-active{
      transition: all 1s;
  }
  .fade-enter, .fade-leave-to{
    transition: all 1s;
    opacity: 0 ;
  } 
  .data-right{
    box-shadow: 0 0 1px 1px lightgray;
  }
}

@media(max-width: 576px){
  #main .row .data-box{
    img{
      width: 100%!important;
      height: 220px;
    }
    .text-right{
      text-align: center!important;
    }
  }
  .top-box{
    text-align: center;
  }
  div.location,h3.mt-4{
    text-align: center;
  }
  #main .col-12.col-md-8{
    padding-left: 15px!important;
  }
}

@media (max-width: 767px){
  .data-box{
    padding: 20px;
  }
  
  .data-box.d-flex{
    flex-direction: column;
    align-items: center;
  }

  #main .data-box .col-sm-6{
    text-align: center!important;
  }
}

@media (min-width: 768px){
  .data-box,h3.mt-4{
    margin-left: 15px;
  }
}

@media (max-width: 1339px){
  img{
    width: 100%!important;
  }
  .data-box.d-flex{
    h4{
      padding-top: 10px;
    }
    .col-lg-8{
      padding-bottom: 15px;
      .my-3{
        margin: 0!important;
      }
    }
  }
}

@media (min-width: 1440px){
  h3.mt-4{
    padding-left: 18px;
  }
}
</style>


