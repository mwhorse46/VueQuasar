<template>
  <div class=" pages">
  <q-page class="column page-content">
    <q-dialog v-model="inception" >
      <q-card class="card-add">
        <div class="modal_inner">
          <q-card-section style="padding-left: 0px;">
            <div class="text-h6" ><q-icon name="add_circle_outline"  class="cross-icon"/>Add Misify</div>
          </q-card-section>
          <div>
            <div class="modal-what">
              <div v-if="nexton==1" >
                <q-card-section class="q-pt-none">
                  Name
                  <q-input filled v-model="text" label="Filled" />
                </q-card-section>
                <q-card-section class="q-pt-none">
                  Limit
                  <div class="rows"><q-input filled v-model="text" class="limit-in" label="Filled" /><q-select class="limit-sel" filled v-model="model" :options="modaloptions" label="Filled" /></div>
              </q-card-section>
              </div>
              <div v-else-if="nexton==2">
                <q-card-section class="q-pt-none">
                  Type
                  <!-- <q-input filled v-model="text" label="Filled" class="doneinput"/> -->
                  <q-select class="doneinput" filled v-model="model" :options="modaloptions" label="Filled" />
                </q-card-section>
                <q-card-section class="q-pt-none">
                  API UserName
                  <q-input filled v-model="text" label="Filled" class="doneinput"/>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  API Password
                  <q-input filled v-model="text" label="Filled" class="doneinput"/>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  Currency
                  <!-- <q-input filled v-model="text" label="Filled" class="doneinput"/> -->
                  <q-select class="doneinput" filled v-model="model" :options="modaloptions" label="Filled" />
                </q-card-section>
              </div>
            </div>

            <q-card-actions align="right" v-if="nexton==1">
              <q-btn label="Next"  @click="secondDialog" class="card-next"/>
            </q-card-actions>
            <q-card-actions align="right" class="bg-white text-teal" v-else-if="nexton==2">
              <q-btn ref="Dialog"  @click="secondDialog" class="card-next" label="Done" />
            </q-card-actions>
          </div>
        </div>
      </q-card>
    </q-dialog>
    <div class="row justify-between" style="border-bottom: solid 1px #F3F3F5;">
      <div  class="searchpage">
        <input type="search" class="search" placeholder="Search" style="border:none;padding-left: 20px;">
        <q-icon name="search" style="position: relative; right: 50px;"/>
      </div>
      <div class="row">
        <q-btn round no-outline icon="mdi-bell-outline" class="bell-notification" >
          <q-badge floating color="#4EFDEA" rounded style="position: absolute;right: 13px;top:16px">4</q-badge>
        </q-btn>
        <select  class="brand">
          <option>
            Brand Shop
          </option>
          <option>
            Facebook
          </option>
          <option>
            Twitter
          </option>
          <option>
            Oracle
          </option>
        </select>
      </div>
    </div>
    <div class="column">
      <div class="row justify-between">
        <h5 class="page-name" >Midsify</h5>
        <div class="mytooltip">
          <div style="">Reserve 160 Days <span style="position: relative;left: 45%;">50K</span></div>
          <div style="width: 20%;"><q-linear-progress class="sumupprogress" size="25px" :value="sumupprogress" /></div>
          <div class="mytext"><div class="sumup-text-up">Release estimate <p class="sumup-text-down">March 4, 2023</p></div></div>
        </div>
        <div>
          <q-btn color="blue" @click="inception=true" icon="add_circle_outline" label="Add"  class="addmidsify"/>
        </div>
      </div>
      <div class="row">
        <q-table
          class="my-sticky-virtscroll-table w-100"
          row-key="name"
          :rows="rows"
          :columns="columns"
          hide-bottom
        >
          <template v-slot:body="props">
            <q-tr :props="props" class="tr-pro">
              <q-td key="name" align="center" :props="props" style="width:20%">
                <div class="highlight">{{ props.row.name }}</div>
              </q-td>
              <q-td key="progress" :props="props" style="width:50%;padding-left: 25px;" >

                  <div v-if="props.row.status%2==1">
                    <div class="tooltip">
                      <q-linear-progress size="25px" :value= props.row.progress  color="blue" class="progress">
                        <div class="absolute-full flex flex-center">
                          <q-badge style="height: 200%;  position:absolute; left:52%;" class="badge-bg" :style="{marginLeft:props.row.progress*100-55+'%'}" color="white" text-color="accent" :label="progressLabel1"/>
                        </div>
                      </q-linear-progress>
                      <p class="tooltiptext"  :style="{marginLeft:props.row.progress*50-15+'%'}">{{props.row.uptext}}<br><span class="downspan">{{props.row.downtext}}</span></p>
                    </div>
                  </div>
                  <div v-if="props.row.status%2==0">
                    <div class="tooltip">
                      <q-linear-progress  size="25px" :value= props.row.progress  color="#4EFDEA" class="progress1">
                        <div class="absolute-full flex flex-center">
                          <q-badge style="height: 200%;  position:absolute; left:52%" :style="{marginLeft:props.row.progress*100-55+'%'}" color="white" text-color="accent" :label="progressLabel1"/>
                        </div>
                      </q-linear-progress>
                      <p class="tooltiptext"  :style="{marginLeft:props.row.progress*50-15+'%'}">{{props.row.uptext}}<br><span class="downspan">{{props.row.downtext}}</span></p>
                    </div>
                  </div>

                <div class="my-table-details">
                  {{ props.row.details }}
                </div>
              </q-td>
              <q-td key="reserve" :props="props" class="reserve" style="width:20%;padding-left: 25px;">
                {{ props.row.reserve }}
              </q-td>
              <q-td key="status" :props="props">
                <div v-if="props.row.status==1">
                  <div class="Live" >
                    <i class="q-icon notranslate material-icons Liveicon" aria-hidden="true" role="presentation" style="font-size: 5px;color:red">circle-small</i>Live
                  </div>
                </div>
                <div v-if="props.row.status==2">
                  <div class="Next" >
                    <i class="q-icon notranslate material-icons Liveicon" aria-hidden="true" role="presentation" style="font-size: 5px;color:blue">circle-small</i>Next
                  </div>
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
const columns = [
  { name: 'progress', align: 'left', label: 'Name', field: 'name', sortable: true },
  { name: 'name', required: true, label: 'Progress', align: 'left', field: row => row.progress, format: val => `${val}`, sortable: true },
  { name: 'status', align: 'left', label: 'Reserve', field: 'status', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'reserve', align: 'left', label: 'Status', field: 'reserve', sortable: true }
]

const rows = [
  {
    name: 'Maverick',
    progress: 0.7,
    reserve: '$25k',
    downtext: '$3000',
    uptext: 'Reserve',
    status: 1
  },
  {
    name: 'CMS',
    progress: 0.4,
    reserve: '$100k',
    downtext: '10k/100k',
    uptext: 'Earning',
    status: 2
  },
  {
    name: 'CMS',
    progress: 0.5,
    reserve: 'For 5 days',
    downtext: '2/5',
    uptext: 'Days',
    status: 3
  },
  {
    name: 'Maverick',
    progress: 0.6,
    reserve: '15k per Transaction',
    downtext: '2k/15k',
    uptext: 'Toatal Transaction',
    status: 4
  }
]

export default {

  setup () {
    // const subpropos= ref("33%")
    const progress1 = ref(0.1)
    const sumupprogress = ref(0.8)
    return {
      columns,
      inception: ref(false),
      // secondDialog: ref(false),
      rows,
      model: ref(null),
      sumupprogress,
      // subpropos,
      progress1,
      progressLabel1: computed(() => (progress1.value * 100) + '%'),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      modaloptions: [
        'Days', 'Transaction', 'Volume'
      ]
    }
  },
  data () {
    return {
      nexton: 1
    }
  },
  methods: {
    secondDialog: function (event) {
      if (this.nexton === 0) this.nexton = 1
      else if (this.nexton === 1) this.nexton = 2
      else if (this.nexton === 2) { this.nexton = 1; this.inception = false }
      // console.log(this.nexton)
    }
  }

}

</script>
<style>
.doneinput{
  /* height: 30px; */
}
.progress{
  width:100%;
  border-radius: 4px;
  color:#4EFDEA;
  background: #d5d7f0;

}
.progress1{
  width:100%;
  border-radius: 4px;
  color:#4EFDEA;
  background: #e2f5f3;
}
.reserve{
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #000034;
}
.card-add{
  width:45%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;

}
.q-dialog__inner > div {
  border-radius: 24px;
}
.highlight{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  min-width:130px;
  height: 65%;
  text-align: center;
  border-radius: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #000034;
  background: #EFF0F5;
  border-radius: 16px;
}
.tr-pro{
  height: 90px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  /* Dark/dark_1 */

  color: #000034;
}
.mytooltip .mytext {
  display: flex;
  align-items: center;
  visibility: show;
  width: 140px;
  /* background-color: blue; */
  color: #fff;
  z-index: 1;
  bottom: 100%;
  /* left: 33%; */
  left:v-bind((sumupprogress * 100-28) + '%');
  /* left:v-bind(sumupprogress*100); */
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  background-color: white;
  box-shadow: 0px 15px 40px rgba(22, 8, 49, 0.1);
}
.mytooltip {
    position: relative;
    display: inline-block;
    margin-top: 50px;
    margin-right: -60%;
}
.mytooltip .mytext:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 7px;
    border-style: solid;
    border-color: rgb(255, 255, 255) transparent transparent transparent;
}
.mytooltip:hover .mytext {
    visibility: visible;
}
.pages{
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width:1280px;
}
.page-content{
  /* border: solid 2px black; */
  width: 95%;
}
.downspan{
  font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

text-align: center;

/* Dark/dark_2 */

color: #4B4E68;

}
.progress .bg-white{
  background:#a4abf1!important;
}
.progress1 .bg-white{
  background:#b8eee8!important;
}
.modal-what{
  width: 100%;
  /* height: 400px; */
  border: 1px solid #D6D8EA;
  padding-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-radius: 16px;
}
.sumup-text-up{
  position:relative;
  left: 20%;
  top:10px;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #84849A;
}
.modal_content{
  width: 100%;
  height: 50%;
  border:10px red
}
.sumup-text-down{
  text-align: center;
  color: #84849A;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: small;
  line-height: 18px;
  color: #4B4E68;
}
.q-btn .q-icon, .q-btn .q-spinner{
    font-size: none;
}
.limit-sel{
  width:20%;
}
.rows{
  display: flex;
  /* flex-direction: row; */
}
.limit-in{

  width:80%;
  border-right: 1px solid #D6D8EA;
}
.bell-notification{
  margin-top: 10px;
  margin-right: 10px;
  font-size: 20px;
  /* box-shadow: none; */
}
.modal_inner{
  margin-top: 10%;
  width: 90%;
  height: 80%;
}
.page-name{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  color: #000034;
  margin-right: 0px;
}
.brand{
  border-radius: 5px;
  height: 40px;
  width: 130px;
  border-color: #F5F5F5;
  padding-left: 10px;
  margin-top: 10px;
  margin-right: 0px;
}
.q-badge{
  background-color:#4EFDEA;
  color:#000034;
  padding: 5px 7px 2px 5px;
}
.sumupprogress{
  /* padding-right: 85px; */
  width: 250px;
  border-radius: 4px;
  height: 12px;
}
.Live{
  color:red;
  display: inline-block;
  /* align-content: center; */
  width: 40%;
  min-width: 85px;
  height: 60%;
  text-align: center;
  border-radius: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  background: rgba(245, 61, 107, 0.1);
  border-radius: 16px;

}
.sumupprogress .q-linear-progress__model {
    /* background: radial-gradient(black, transparent); */
    background: linear-gradient(90deg, #4EFDEA 6.67%, #5766FF 92.08%);
}
.Next{
  color:blue;
  display: inline-block;
  align-content: center;
  width: 40%;
  min-width: 85px;
  height: 60%;
  text-align: center;
  border-radius: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  background: rgba(119, 130, 241, 0.1);
  border-radius: 16px;
  bottom:30px;
}
.q-btn:before{
  box-shadow:none;
}
.addmidsify{
  margin-top: 50px;
  margin-right: 0px;
  width: 100px;
  border-radius: 10px;
}
.modal-icon{
  position: relative;
  right: 50px;
}
.card-next{
  position: relative;
  bottom: 0px;
  width: 100px;
  border-radius: 10px;
  background: linear-gradient(90deg, #4EFDEA 6.67%, #7581FF 92.08%);
  border-radius: 9px;
}
.my-table-details {
  font-size: 0.85em;
  font-style: italic;
  max-width: 200px;
  white-space: normal;
  color: #555;
  margin-top: 4px;
}

.search{
  background-color: #F3F3F5;
  margin: 20px 0px 20px;
  width: 362px;
  height: 48px;
  border-radius: 5px;
}
.cursor-pointer{
  height: 30px;
}
.cross-icon{
  color:blue !important;
  font-size: large;
}
.q-table .sortable{
  font-size: 20px;
  padding-left: 25px;
}
.tooltip .tooltiptext {
  margin-top: 100px;
  min-width: 70px;
  background-color: white;
  box-shadow: 0px 15px 40px rgba(22, 8, 49, 0.1);
  border-color:rgb(230, 58, 58);
  margin-top: 5px;
  color: #4B4E68;
  text-align: center;
  border-radius: 4px;
  padding: 5px 20px 8px 20px;
  position: absolute;
  z-index: 1;
  bottom: 70%;
  left: v-bind(progressLabel1);
  margin-left: -9%;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #84849A;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltip {
  width: 100%;
  position: relative;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 15px 40px rgba(22, 8, 49, 0.1);
  display: inline-block;
}
</style>
<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #4EFDEA

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
