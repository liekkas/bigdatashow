<template>
  <div class="full" style="height: 90vh;">
    <div class="tool">
      <Select v-model="curRegion" style="width:68px">
          <Option v-for="item in regions" :value="item.name" :key="item.name">{{ item.label }}</Option>
      </Select>
      <DatePicker type="month" placeholder="Select month" style="width: 100px"></DatePicker>
    </div>
    
    <div class="full" style="display: flex;">
      <div class="left">
        <div class="left-box1">
          wwwwe

          <div class="left-box3">
            <div class="left-box3-up border">
              11
            </div>
            <div class="left-box3-down border">
22
            </div>
          </div>
        </div>
        <div class="left-box2">

        </div>
        
      </div>  
      
      <div class="right">
        <div class="box1">
          <div class="box1-left border">
            年龄分布
          </div>
          <div class="box1-right border">
            学历分布
          </div>
        </div>

        <div class="box2 border">
          乘车时长
        </div>

        <div class="box2 border">
          乘车频次
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      regions: [
        {name: 'china', label: '全国'},
        {name: 'bj', label: '北京'},
        {name: 'sh', label: '上海'},
        {name: 'gz', label: '广州'},
        {name: 'sz', label: '深圳'},
      ],
      curRegion: 'china'
    }
  },
}
</script>

<style lang="less" scoped src="./style.less">

</style>

